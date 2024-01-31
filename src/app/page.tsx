export default function Home() {
    return (
        <main>
            <h1>Password generator</h1>
            <div>
                <p>Customize your password</p>
                <div className="grif grid-col-2">
                    <div>
                        <p>Password Length</p>
                        <input
                            type="number"
                            defaultValue={12}
                            min={8}
                            max={20}
                            step={2}
                            className="border"
                        />
                    </div>
                    <div>
                        <p>Password Settings</p>
                        <div className="flex flex-col">
                            <label>
                                <input type="checkbox" name="Uppercase" />
                                Uppercase
                            </label>
                            <label>
                                <input type="checkbox" name="Lowercase" />
                                Lowercase
                            </label>
                            <label>
                                <input type="checkbox" name="Numbers" />
                                Numbers
                            </label>
                            <label>
                                <input type="checkbox" name="Symbols" />
                                Symbols
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
