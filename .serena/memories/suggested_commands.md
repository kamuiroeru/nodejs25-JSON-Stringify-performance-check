# Suggested Commands

## Core Development Commands

### Generate Test Data
```bash
node generateJson.js
```
Generates the compressed test dataset (test.json.gz) with 500,000 JSON objects.

### Run Benchmark
```bash
node bench.js
```
Runs the JSON.stringify performance benchmark using the generated test data.

### Full Test Cycle
```bash
node generateJson.js && node bench.js
```
Regenerates test data and runs benchmark in sequence.

## GitHub Actions Commands

### Trigger Test Data Update
- Manual workflow dispatch for `updateTestJson.yml`
- Updates test.json.gz and commits to repository

### Benchmark Testing
- Automatically runs on push/PR to main branch
- Tests Node.js versions 22, 24, 25 in parallel

## Development Workflow
1. Generate test data: `node generateJson.js`
2. Run benchmark: `node bench.js`  
3. Commit changes if modifying code
4. Push to trigger CI benchmark across Node.js versions

## System Commands
- `node --version` - Check Node.js version
- `ls -la` - List files including compressed test data
- `git status` - Check repository status