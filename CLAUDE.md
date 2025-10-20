# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Node.js performance benchmarking project that tests JSON.stringify() performance across different Node.js versions (22, 24, 25). The project generates large test datasets and measures serialization performance to evaluate Node.js improvements.

## Core Commands

### Generate Test Data
```bash
node generateJson.js
```
Creates a compressed dataset (test.json.gz) with 500,000 JSON objects for consistent benchmarking.

### Run Benchmark
```bash
node bench.js
```
Executes the JSON.stringify performance test using the generated dataset.

### Full Test Cycle
```bash
node generateJson.js && node bench.js
```

## Architecture

The project consists of two main components:

1. **Data Generator** (`generateJson.js`): Creates large, structured JSON datasets using Node.js streams and compression
2. **Benchmark Runner** (`bench.js`): Measures JSON.stringify performance with high-precision timing

Key architectural decisions:
- Uses streaming for memory-efficient processing of large datasets
- Employs gzip compression for storage efficiency
- Leverages Node.js performance API for accurate measurements
- Zero external dependencies - uses only Node.js built-ins

## Technology Stack

- **Runtime**: Node.js 22+ (tested on 22, 24, 25)
- **Language**: Modern JavaScript with ES modules
- **Dependencies**: None (built-in modules only)
- **CI/CD**: GitHub Actions for automated benchmarking

## Code Conventions

- ES module syntax (`import`/`export`) throughout
- `node:` prefix for built-in module imports
- Async/await patterns for asynchronous operations
- Stream pipelines for data processing
- Japanese comments for implementation details
- Consistent error handling with `process.exit(1)`

## Development Workflow

1. Make code changes to `generateJson.js` or `bench.js`
2. Test locally: `node generateJson.js && node bench.js`
3. Commit changes (triggers CI benchmarks automatically)
4. Use manual GitHub Actions workflow to update test data if needed

## GitHub Actions

- **Benchmark CI**: Runs automatically on push/PR, tests Node.js 22, 24, 25
- **Update Test Data**: Manual workflow dispatch to regenerate and commit test.json.gz

## Performance Considerations

- Maintains streaming approach for memory efficiency
- Uses compression to manage large test dataset storage
- Preserves high-precision timing measurements
- Configurable iteration counts and dataset sizes via code constants