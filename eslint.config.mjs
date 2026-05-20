import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    globalIgnores([
        ".next/**",
        "out/**",
        "build/**",
        "next-env.d.ts",
        ".agent/**",
        ".agents/**",
        ".claude/**",
        ".cline/**",
        ".codex/**",
        ".continue/**",
        ".cursor/**",
        ".gemini/**",
        ".omo/**",
        ".opencode/**",
        ".pi/**",
        ".qwen/**",
        ".sisyphus/**",
        ".trae/**",
        ".windsurf/**",
        ".github/**",
        "openspec/**",
        "graphify-out/**",
        "goals/**",
        "venv/**",
        "node_modules/**",
    ]),
]);

export default eslintConfig;
