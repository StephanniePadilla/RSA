const fs = require('fs');
const ts = require('typescript');
const path = require('path');
const pkgJson = require('./package.json');

const rootDir = __dirname;
const jsFile = path.join(rootDir, 'build', `${pkgJson.browser}`);
const dtsFile = path.join(rootDir, 'types', `${pkgJson.name}.d.ts`);

const compilerOptions = {
    'declaration': true,
    'noEmit': false,
    'emitDeclarationOnly': true,
    'allowJs': true,
    'esModuleInterop': true,
    'allowSyntheticDefaultImports': true
};

const host = ts.createCompilerHost(compilerOptions);

host.writeFile = (fileName, contents) => {
    if(!fs.existsSync(dtsFile))
        fs.mkdirSync(path.join(__dirname, 'types'));
    fs.writeFileSync(dtsFile, contents);
};

// Prepare and emit the d.ts files
const program = ts.createProgram([jsFile], compilerOptions, host);
program.emit();
