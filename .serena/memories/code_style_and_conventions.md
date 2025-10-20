# Code Style and Conventions

## Language and Module Style
- **ES Modules**: Uses `import`/`export` syntax throughout
- **Modern JavaScript**: Async/await patterns, no callbacks
- **Node.js Built-ins**: Prefers `node:` prefix for built-in modules (e.g., `node:fs`, `node:stream`)

## Code Patterns

### Error Handling
- Uses `.catch()` with `console.error()` and `process.exit(1)`
- Consistent error handling pattern across both files

### Async Programming
- Prefers `async/await` over promises or callbacks
- Uses `pipeline()` for stream operations
- Implements async generators for data streaming

### Performance Considerations  
- Uses streams for memory-efficient large data processing
- Implements compression (gzip) for test data storage
- Uses `performance.now()` for high-precision timing

## File Structure
- Single-purpose files with clear naming
- Comments in Japanese for implementation details
- Descriptive variable names (e.g., `total`, `iterations`, `jsonString`)

## Constants and Configuration
- Uses underscores for large numbers (`500_000`)
- Configurable iteration counts and data sizes
- Hardcoded but easily adjustable parameters

## Stream Processing
- Consistent use of Node.js streams API
- Pipeline pattern for composition
- Proper stream lifecycle management (push null for end)