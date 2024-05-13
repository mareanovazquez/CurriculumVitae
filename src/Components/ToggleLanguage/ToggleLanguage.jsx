export const ToggleLanguage = ({ toggleLang, language }) => {

    return (
        <>
            <div className="toggle-language">
                {language === 'es' ?
                    <button className="btn btn-sm btn btn-outline-light" onClick={toggleLang}>EN</button> :
                    <button className="btn btn-sm btn btn-outline-light" onClick={toggleLang}>ES</button>
                }
            </div>
        </>
    )
}