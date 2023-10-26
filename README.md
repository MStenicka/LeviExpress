# LeviExpress - Webová stránka dopravní společnosti

## Úvod

(úkol ze stránek Kódím.cz.)
Webová stránká pro fiktivní dopravní společnost LeviExpress s možností rezervace jízdenky a zobrazením detailů spojů a rezervace.

### Základní rezervace jízdenky

Základní verze webové stránky, která umožní uživateli vybrat den a místo odkud a kam chce cestovat. Systém poté automaticky zarezervuje volné místo v autobuse.

### Volba místa v autobuse

Rozšíření možnosti uživatele, kdy má možnost si sám vybrat místo v autobuse.

## Struktura aplikace

Struktura aplikace zahrnuje následující komponenty:

- **Home**: Úvodní stránka, kde uživatel může vybrat den a místo odkud a kam chce cestovat.

- **JourneyPicker**: Komponenta na stránce Home, která umožní uživateli vybrat datum a trasu cesty.

- **JourneyDetail**: Zobrazí detaily vybrané cesty, včetně seznamu zastávek a informací o spoji.

- **SelectedSeat**: Komponenta na úvodní stránce, která zobrazí vybrané místo v autobuse.

- **SeatPicker**: Komponenta, která zobrazí plánek autobusu s výběrem sedadla. Umožní uživateli vybrat si místo v autobuse.

- **Reservation**: Stránka zobrazující detaily rezervované jízdenky. Uživatel zde uvidí informace o cestě, zvoleném sedadle a rezervačním čísle.

## Použité technologie

Projekt je vytvořen v Reactu s použitím React Routeru pro navigaci mezi jednotlivými stránkami. Data jsou získávána z fiktivního API, které poskytuje informace o dostupných spojích•.

•
(Dvě autobusové linky, které spojují východní a západní Evropu. Jedna linka vyjíždí z Budapešti o půlnoci a končí v Amsterdamu o půlnoci, zatímco druhá linka cestuje opačným směrem, tedy z Amsterdamu do Budapešti.)
