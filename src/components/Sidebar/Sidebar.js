import React from 'react';
import './Sidebar.css';
import { BulbOutline } from 'react-ionicons'
import { CodeOutline } from 'react-ionicons'
import { ImagesOutline } from 'react-ionicons'


class Sidebar extends React.Component {

    render() {
        return(
            <div id="sidebar">
                <ul id="list">
                <li onClick={() => this.props.handleClick(
            <div style={{padding: "10px", lineHeight: "1.7"}}>
                <h1 style={{textAlign: "center", fontSize: "35px"}}>Zajawka do Front-endu</h1>
                <p style={{ textAlign: "justify", fontSize: "17px" }}>Moja zajawka do Front-endu pojawiła się gdzieś w okolicach Października 2022, kiedy na praktykach zainteresowałem się bardziej Front-endem i ogólnie Web develomentem. Zacząłem pisać swoje pierwsze podstawowe strony ulepszając je o nowo poznane rzeczy, nie były one jakoś bardzo skomplikowane i czułem że czegoś mi brakuje. Dlatego po paru dniach kupiłem kurs który miał mnie rozwinąć w całym zakresie Web Developmentu począwszy od przypomnienia podstaw HTML, przez CSS, JS aż do poznania biblioteki JS jaką jest React, jeśli chcesz się dowiedzieć więcej na temat tej biblioteki kliknij w 4 od góry przycisk na bocznym panelu. Wracając po nauce podstaw Reacta, React Hooks oraz Redux przeszedłem do poznania podstaw Back-endu która opierała się na Node.js oraz Express.js. Poznałem również jak działają i jak korzystać z baz danych, API itp. dodatkowo poznałem jak działa GitHub jak z niego korzystać, jak wygląda dzień Web Developera i pare porad jak zacząc szukać pracy i jak dalej polepszać swoje umiejętności. Na sam koniec kursu czekał na mnie wielki projekt, zająć się musiałem Front-endem jak i Back-endem nie było to wszystko takie proste ale dodało dużo nowych umiejętności, informacji a przedewszystkim zwiększało doświadczenie, które jest bardzo ważne. Poniżej zamieszcze kilka moich prac, wraz z kodem.</p>
                <h2 style={{textAlign: "center"}}>Moje przykładowe prace</h2>
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "20px", textAlign: "center", marginTop: "50px"}}>
                    <div>
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/"><img src="https://picsum.photos/300/200?random=1" alt="" /></a>
                    </div>
                    <div class="item">
			        <a target="_blank" rel="noreferrer" href="https://www.yahoo.com/"><img src="https://picsum.photos/300/200?random=2" alt="" /></a>
		            </div>
		            <div class="item">
			        <a target="_blank" rel="noreferrer" href="https://www.bing.com/"><img src="https://picsum.photos/300/200?random=3" alt="" /></a>
		            </div>
                </div>
            </div>
            )}>
            <BulbOutline
            color={'#00000'}
            height="50px"
            width="50px"
            /></li>
            <li onClick={() => this.props.handleClick(
                <div style={{padding: "20px", lineHeight: "1.7"}}>
                    <h1 style={{textAlign: "center", fontSize: "35px"}}>Co to Front-end</h1>
                    <p style={{ textAlign: "justify", fontSize: "17px" }}>Front-end to pojęcie odnoszące się do interaktywnej części strony internetowej, z którą użytkownik ma bezpośredni kontakt. Jest to zbiór technologii, narzędzi i języków programowania używanych do tworzenia interfejsów użytkownika, które obejmują wygląd, styl i zachowanie strony internetowej. Front-end zazwyczaj składa się z trzech podstawowych języków programowania: HTML, CSS i JavaScript. HTML służy do definiowania struktury strony internetowej, CSS do jej stylizacji i formatowania, a JavaScript do dodawania interaktywności, animacji i efektów specjalnych. Front-end jest ważnym elementem procesu projektowania i tworzenia stron internetowych, ponieważ zapewnia użytkownikom intuicyjny i łatwy w użyciu interfejs użytkownika. Oprócz podstawowych technologii jak HTML, CSS i JavaScript, front-end rozwija się również dzięki narzędziom i bibliotekom, które ułatwiają i przyspieszają pracę nad interfejsem użytkownika.</p>
                    <h2 style={{textAlign: "center"}}>Popularne narzędzia front-endowe</h2>
                    <ul style={{lineHeight: "2.4"}}>
                    <li style={{ fontSize: "17px" }}>Frameworki, takie jak React, Angular i Vue, które ułatwiają tworzenie skomplikowanych interfejsów użytkownika i aplikacji webowych</li>
                    <li style={{ fontSize: "17px" }}>Biblioteki, takie jak jQuery, Bootstrap i Font Awesome, które udostępniają gotowe elementy i style, co przyspiesza proces tworzenia stron internetowych</li>
                    <li style={{ fontSize: "17px" }}>Edytory kodu, takie jak Visual Studio Code, Sublime Text czy Atom, które oferują przyjazne środowiska pracy dla programistów front-endowych</li>
                    </ul>
                    <p style={{ textAlign: "justify", fontSize: "17px" }}>Podsumowując w dzisiejszych czasach rola front-end developera staje się coraz ważniejsza, ponieważ wzrasta liczba urządzeń, na których korzystamy z internetu (np. smartfony, tablety, komputery) oraz coraz bardziej rozbudowane wymagania dotyczące interaktywności i estetyki stron internetowych.</p>
                </div>
            )}>
            <CodeOutline
    color={'#00000'} 
    height="50px"
    width="50px"
    />
            </li>
            <li onClick={() => this.props.handleClick(
                <div style={{padding: "20px", lineHeight: "1.7"}}>
                <h1 style={{textAlign: "center", fontSize: "35px"}}>AngularJS - podstawowe informacje</h1>
                <p style={{ fontSize: "16px" }}>AngularJS to popularny framework JavaScript, który umożliwia tworzenie dynamicznych aplikacji webowych. Został stworzony przez zespół programistów z Google i jest jednym z najpopularniejszych frameworków front-endowych obecnie dostępnych. AngularJS oferuje szereg narzędzi i funkcji, które ułatwiają tworzenie aplikacji internetowych, takich jak wstrzykiwanie zależności, wiązanie dwukierunkowe danych, dyrektywy, kontrolery, usługi i wiele innych. Framework ten również zapewnia prostą obsługę zdarzeń użytkownika, takich jak kliknięcia i wprowadzanie tekstu. Jedną z największych zalet AngularJS jest jego modułowa architektura, która ułatwia zarządzanie dużymi aplikacjami internetowymi. Framework ten również oferuje wiele gotowych rozwiązań, takich jak routing, walidacja formularzy, obsługa błędów i wiele innych, co pozwala na szybkie i efektywne tworzenie aplikacji internetowych. Warto też wspomnieć że w AngularJS zostały napisane takie strony jak Google, Microsoft, Apple, McDonald's, Adobe czy Cisco. Oprócz wymienionych przeze mnie zalet, warto również wspomnieć o kilku innych aspektach AngularJS: </p>
                <ul style={{lineHeight: "2.4"}}>
                    <li style={{ fontSize: "16px" }}>AngularJS używa języka TypeScript, który jest nadzbiorem JavaScriptu, co oznacza, że ​​dostarcza on dodatkowe funkcje i narzędzia programistyczne, takie jak statyczna kontrola typów, interfejsy i wiele innych.</li>
                    <li style={{ fontSize: "16px" }}>AngularJS ma silną społeczność użytkowników, co oznacza, że ​​istnieje wiele zasobów, takich jak dokumentacja, poradniki, kursy i fora, które mogą pomóc w nauce i rozwoju w tej technologii.</li>
                    <li style={{ fontSize: "16px" }}>AngularJS jest wysoce testowalnym frameworkiem. Dzięki wbudowanym narzędziom takim jak TestBed i Jasmine, programiści mogą łatwo pisać i uruchamiać testy jednostkowe i integracyjne, co pozwala na szybsze wykrycie i naprawienie błędów.</li>
                    <li style={{ fontSize: "16px" }}>AngularJS jest ciągle rozwijany i ulepszany przez Google i społeczność. Wersja Angular 2+ wprowadziła wiele usprawnień i zmian w porównaniu z AngularJS, co oznacza, że ​​dla niektórych projektów może być to lepszy wybór. Niemniej jednak, wiele aplikacji internetowych wciąż korzysta z AngularJS i jest to wciąż ważna technologia w branży programistycznej.</li>
                    </ul>
                </div>
            )}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32"><path d="M1 5.3L15.892 0l15.284 5.218-2.47 19.694L15.892 32 3.286 25.004 1 5.3z" fill="#00000"/><path d="M31.176 5.218L15.892 0v32l12.814-7.088 2.47-19.694z" fill="#00000"/><path d="M15.915 3.74l-9.28 20.64 3.463-.07 1.87-4.664h8.3l2.032 4.7 3.302.07L15.915 3.74zm.023 6.626l3.14 6.557H13.2l2.747-6.557z" fill="#ffffff"/></svg></li>
                <li onClick={() => this.props.handleClick(
                <div style={{padding: "20px", lineHeight: "2"}}>  
                <h1 style={{textAlign: "center", fontSize: "35px"}}>React - podstawowe informacje</h1>
                <p style={{ fontSize: "17px" }}>React to biblioteka JavaScript do tworzenia interaktywnych interfejsów użytkownika. React został stworzony przez Facebooka i jest powszechnie stosowany do tworzenia aplikacji internetowych. Główną cechą Reacta jest deklaratywny styl programowania, który umożliwia tworzenie skomplikowanych interfejsów użytkownika z mniejszą ilością kodu. React jest również bardzo elastyczny i łatwo go integrować z innymi bibliotekami lub frameworkami JavaScript. W React korzysta się z tzw. komponentów, które reprezentują fragmenty interfejsu użytkownika i pozwalają na ich ponowne użycie. React wprowadza również koncepcję jednokierunkowego przepływu danych (ang. "one-way data binding"), co oznacza, że zmiany w danych powodują automatyczną aktualizację widoku, ale zmiany w widoku nie wpływają bezpośrednio na dane. React wykorzystuje wirtualny DOM (ang. "virtual DOM"), czyli wirtualną reprezentację drzewa elementów interfejsu użytkownika, co umożliwia efektywną aktualizację tylko tych elementów, które uległy zmianie, a nie całego drzewa. React jest również często używany z innymi narzędziami, takimi jak Redux, React Router czy Axios, które ułatwiają zarządzanie stanem aplikacji, nawigację między widokami oraz komunikację z serwerem. W React zostały napisane między innymi takie Aplikacje jak Facebook, Tesla, Skype, Discord czy też Instagram. W internecie można znaleźć masę kursów zarówno dla początkujących jak i tych bardziej zaawansowanych, React jest bardzo przyszłościowym narzędziem który cały czas się rozwija i powiększa o nowe funkcje. React pozwala nam na zbudowanie wpełni od zera estetycznej oraz funkcjonalnej aplikacji, pozwala on nam na dodawane wielu róznych rozszerzeń oraz dodatków, które znacznie ułatwiają nam prace.</p>






                </div>
            )}><svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="50"
            width="50"
          >
            <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85-1.03 0-1.87-.85-1.87-1.85 0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68 0 1.69-1.83 2.93-4.37 3.68.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68 0-1.69 1.83-2.93 4.37-3.68-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9 2.26l-.3.51c.31-.05.61-.1.88-.16-.07-.28-.18-.57-.29-.86l-.29.51m-2.89 4.04c1.59 1.5 2.97 2.08 3.59 1.7.64-.35.83-1.82.32-3.96-.77.16-1.58.28-2.4.36-.48.67-.99 1.31-1.51 1.9M8.08 9.74l.3-.51c-.31.05-.61.1-.88.16.07.28.18.57.29.86l.29-.51m2.89-4.04C9.38 4.2 8 3.62 7.37 4c-.63.35-.82 1.82-.31 3.96a22.7 22.7 0 012.4-.36c.48-.67.99-1.31 1.51-1.9z" />
          </svg></li>
          <li onClick={() => this.props.handleClick("Tekst do przycisku 5")}>
            <ImagesOutline
    color={'#00000'} 
    height="50px"
     width="50px"
    />
            </li>
                </ul>
            </div>
        );
    }};

    export default Sidebar;