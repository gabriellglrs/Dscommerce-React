import { useState } from "react";
import "./SearchBar.css";

interface Props {
    onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
    const [text, setText] = useState<string>("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onSearch(text);
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setText(value);
        onSearch(value); // Agora envia o valor atualizado
    }

    function handleReset() {
        setText("");
        onSearch("");
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmit} onReset={handleReset}>
            <button type="submit">🔎︎</button>
            <input
                type="text"
                placeholder="Nome do produto"
                value={text}
                onChange={handleChange}
            />
            <button type="reset" onClick={handleReset}>🗙</button>
        </form>
    );
}


