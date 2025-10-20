# Tech Stack and Dependencies

## Technology Stack
- **Runtime**: Node.js (versions 22, 24, 25 tested)
- **Language**: JavaScript (ES modules)
- **File Format**: No package.json - uses pure Node.js built-in modules

## Dependencies
This project uses **zero external dependencies** and relies entirely on Node.js built-in modules:

### Core Modules Used
- `node:fs` - File system operations (createReadStream, createWriteStream)
- `node:stream` - Streaming operations (Readable, pipeline)
- `node:zlib` - Compression (createGzip, createGunzip)  
- `node:perf_hooks` - Performance measurement (performance.now())

### ES Module Features
- Uses ES module imports (`import` syntax)
- Modern async/await patterns
- Stream pipelines for efficient data processing

## Runtime Requirements
- Node.js 22+ (project tests on 22, 24, 25)
- No build step required
- No package installation needed