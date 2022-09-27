function ThemeProvider({children}) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const providerValue = {
        theme: themes[theme],
        toggleTheme
    };

    return (
        <ThemeContext.Provider value={providerValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export default function App() {
    return (
        <div className={`App theme-${theme}`}>
            <ThemeProvider>
                <Toggle />
                <List />
            </ThemeProvider>
        </div>
    )
}