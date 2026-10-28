param(
    [int]$Port = 3000
)

$baseDir = $PSScriptRoot
if (-not $baseDir) {
    $baseDir = (Get-Location).Path
}

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".htm"  = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".webp" = "image/webp"
    ".gif"  = "image/gif"
    ".ico"  = "image/x-icon"
    ".woff" = "font/woff"
    ".woff2"= "font/woff2"
    ".ttf"  = "font/ttf"
    ".txt"  = "text/plain; charset=utf-8"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

try {
    $listener.Start()
} catch {
    Write-Error "Failed to start listener on port ${Port}: $_"
    exit 1
}

Write-Host ""
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  ANVAYA ATELIER - PUNE INTERIOR DESIGN PORTFOLIO" -ForegroundColor White
Write-Host "  Local Server running at: http://localhost:$Port" -ForegroundColor Green
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "Serving files from: $baseDir"
Write-Host "Press Ctrl+C to stop the server.`n"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $rawUrl = $request.RawUrl
        $urlPath = [System.Uri]::UnescapeDataString($rawUrl.Split('?')[0])

        if ($urlPath -eq "/" -or $urlPath -eq "") {
            $urlPath = "/index.html"
        }

        # Normalize relative path (strip leading slash and convert / to \)
        $relPath = $urlPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $fullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($baseDir, $relPath))

        # Security check: must reside within $baseDir
        $normalizedBase = [System.IO.Path]::GetFullPath($baseDir)
        if (-not $normalizedBase.EndsWith([System.IO.Path]::DirectorySeparatorChar.ToString())) {
            $normalizedBase += [System.IO.Path]::DirectorySeparatorChar
        }

        $response.Headers.Add("Access-Control-Allow-Origin", "*")
        $response.Headers.Add("Cache-Control", "no-cache")

        if (-not $fullPath.StartsWith($normalizedBase) -and $fullPath -ne $normalizedBase.TrimEnd([System.IO.Path]::DirectorySeparatorChar)) {
            $response.StatusCode = 403
            $response.ContentType = "text/plain; charset=utf-8"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("403 Forbidden")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.OutputStream.Close()
            Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] 403 Forbidden: $rawUrl" -ForegroundColor Red
            continue
        }

        if ([System.IO.File]::Exists($fullPath)) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLowerInvariant()
            $contentType = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $contentType
            $response.StatusCode = 200

            try {
                $fileBytes = [System.IO.File]::ReadAllBytes($fullPath)
                $response.ContentLength64 = $fileBytes.Length
                $response.OutputStream.Write($fileBytes, 0, $fileBytes.Length)
                Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] 200 OK: $rawUrl ($($fileBytes.Length) bytes)" -ForegroundColor Green
            } catch {
                $response.StatusCode = 500
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("500 Internal Server Error")
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] 500 Error serving: $rawUrl - $_" -ForegroundColor Red
            } finally {
                $response.OutputStream.Close()
            }
        } else {
            $response.StatusCode = 404
            $response.ContentType = "text/plain; charset=utf-8"
            $msg = "404 Not Found: $rawUrl"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($msg)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.OutputStream.Close()
            Write-Host "[$([DateTime]::Now.ToString('HH:mm:ss'))] 404 Not Found: $rawUrl" -ForegroundColor Yellow
        }
    }
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
        $listener.Close()
    }
}
