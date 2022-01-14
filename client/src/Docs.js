import React, { Component } from 'react';
import schema from './schema.png';
import func from './function.png';

export default () => {
    return (
        <div className="container">
            <hr></hr>
            <h3>Schemat budowy systemu</h3>
            <img src={schema} width="100%" alt="tu miał być schemat" />
            <p>Zadanie jest bazowane na laboratorium numer 9. Właściwie to tylko klient (aplikacja React) ma jakiekolwiek większe zmiany względem oryginału.</p>
            <p>Zmiany obejmują:</p>
            <p>-- App.js - teraz daje możliwość przełączania się między podstronami,</p>
            <p>-- Fib.js - teraz pobiera dane z baz i posiada odnośnik do historii wyliczeń,</p>
            <p>-- Default.js, History.js, Docs.js - nowe pliki, obsługują podstrony,</p>
            <p>-- Spectre.min.css - lekki szkielet css do utworzenia "layout-u" strony,</p>
            <p>-- logo.svg - zmiana na (obliczeniową) chmurkę.</p>
            <p>Oprócz tego jedna z funkcji w index.js serwera Express została ograniczona do wyliczania maksymalnie dwudziestego elementu ciągu Fibonacciego.</p>
            <img src={func} width="100%" alt="tu miało być zdjęcie funkcji" />
        </div>
    );
};
