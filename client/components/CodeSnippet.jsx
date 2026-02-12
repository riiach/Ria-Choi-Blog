import React from 'react'
import { CodeBlock, dracula } from 'react-code-blocks'
import { Copy } from 'lucide-react'

const CodeSnippet = ({
                         code,
                         language = 'javascript',
                         showLineNumbers = true,
                     }) => {

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(code);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    };

    return (
        <div className="relative my-6 rounded-lg overflow-auto">
            <CodeBlock
                text={code}
                language={language}
                showLineNumbers={showLineNumbers}
                wrapLines
                theme={dracula}
            />

            <button
                onClick={copyToClipboard}
                className="absolute top-2 right-2 text-xs text-gray-300 hover:text-white mt-2 mr-4"
            >
                <Copy className="w-4"/>
            </button>
        </div>
    );
};

export default CodeSnippet;
