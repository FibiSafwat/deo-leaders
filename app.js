  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

  // tmp/react-shim.js
  var useState = React.useState;
  var useMemo = React.useMemo;
  var useRef = React.useRef;
  var useEffect = React.useEffect;
  var useCallback = React.useCallback;
  var react_shim_default = React;

  // ── Portal i18n (Admin CRM + Member Portal) ──────────────────────────────
  // Render-time translation: English UI text in host elements (text children,
  // placeholder/title/alt/aria-label) is swapped for German when the portal
  // language is "de". Values (option values, form data, DB rows) are never
  // touched, so switching language cannot change what gets saved.
  // Activated from App via __deoSetLang(); the TopNav DE/EN button drives it.
  var DEO_DE = {
    // ── Top nav / shell ──
    "Admin CRM": "Admin-CRM",
    "Member Portal": "Mitgliederportal",
    "Member Portal ↗": "Mitgliederportal ↗",
    "Admin View ↗": "Admin-Ansicht ↗",
    "Sign Out": "Abmelden",
    "Loading DEO Leaders…": "DEO Leaders wird geladen…",
    "Database connection error": "Fehler bei der Datenbankverbindung",
    "Management": "Verwaltung",
    "Dashboard": "Dashboard",
    "Newsfeed": "Newsfeed",
    "Deal Room": "Deal Room",
    "Members": "Mitglieder",
    "Applications": "Bewerbungen",
    "Careers": "Karriere",
    "Analytics": "Analysen",
    "Donations": "Spenden",
    "Events": "Veranstaltungen",
    "Perks": "Vorteile",
    "Blast Mail": "Rundmail",
    "Permissions": "Berechtigungen",
    "Welcome back": "Willkommen zurück",
    "📰 Feed": "📰 Feed",
    "💼 Deals": "💼 Deals",
    "💼 Careers": "💼 Karriere",
    "My Profile": "Mein Profil",
    "Network": "Netzwerk",
    "🎁 Perks": "🎁 Vorteile",
    "Donate": "Spenden",

    // ── Generic UI ──
    "Cancel": "Abbrechen",
    "Confirm": "Bestätigen",
    "Save": "Speichern",
    "Save Changes": "Änderungen speichern",
    "Saving…": "Wird gespeichert…",
    "Saving...": "Wird gespeichert…",
    "Sending…": "Wird gesendet…",
    "Posting…": "Wird veröffentlicht…",
    "Posting...": "Wird veröffentlicht…",
    "Sharing…": "Wird geteilt…",
    "Loading…": "Wird geladen…",
    "Remove": "Entfernen",
    "Edit": "Bearbeiten",
    "✏️ Edit": "✏️ Bearbeiten",
    "Delete": "Löschen",
    "🗑 Delete": "🗑 Löschen",
    "View": "Ansehen",
    "View Details": "Details anzeigen",
    "Close": "Schließen",
    "Open": "Offen",
    "Closed": "Geschlossen",
    "Reopen": "Wieder öffnen",
    "Reload": "Neu laden",
    "Refresh": "Aktualisieren",
    "Refreshing…": "Wird aktualisiert…",
    "🔄 Refresh": "🔄 Aktualisieren",
    "⟳ Refreshing…": "⟳ Wird aktualisiert…",
    "↻ Refresh": "↻ Aktualisieren",
    "↻ Refreshing…": "↻ Wird aktualisiert…",
    "Update": "Aktualisieren",
    "Submit": "Absenden",
    "Next →": "Weiter →",
    "← Back": "← Zurück",
    "+ Add": "+ Hinzufügen",
    "✕ Clear": "✕ Zurücksetzen",
    "✕ Clear filters": "✕ Filter zurücksetzen",
    "Select...": "Auswählen…",
    "— Select —": "— Auswählen —",
    "Search country…": "Land suchen…",
    "Type & Enter to add...": "Eingeben & Enter zum Hinzufügen…",
    "Today": "Heute",
    "Yesterday": "Gestern",
    "just now": "gerade eben",
    "Never": "Nie",
    "N/A": "k. A.",
    "Other": "Sonstiges",
    "All": "Alle",
    "Everyone": "Alle",
    "Active": "Aktiv",
    "Inactive": "Inaktiv",
    "Pending": "Ausstehend",
    "Approved": "Genehmigt",
    "Rejected": "Abgelehnt",
    "Accepted": "Angenommen",
    "Expired": "Abgelaufen",
    "On": "An",
    "Off": "Aus",
    "Free": "Kostenlos",
    "Full": "Ausgebucht",
    "Global": "Global",
    "Online": "Online",
    "active": "aktiv",
    "inactive": "inaktiv",
    "pending": "ausstehend",
    "approved": "genehmigt",
    "rejected": "abgelehnt",
    "open": "offen",
    "closed": "geschlossen",
    "Click to enlarge": "Zum Vergrößern klicken",
    "Name": "Name",
    "Email": "E-Mail",
    "Phone": "Telefon",
    "Status": "Status",
    "Action": "Aktion",
    "Actions": "Aktionen",
    "Date": "Datum",
    "Description": "Beschreibung",
    "Location": "Ort",
    "Format": "Format",
    "Type": "Typ",
    "Category": "Kategorie",
    "Company": "Unternehmen",
    "Role": "Rolle",
    "Industry": "Branche",
    "Country": "Land",
    "City": "Stadt",
    "Summary": "Zusammenfassung",
    "Activity": "Aktivität",
    "Message": "Nachricht",
    "Subject": "Betreff",
    "To": "An",
    "Reply": "Antworten",
    "💬 Reply": "💬 Antworten",
    "Show less": "Weniger anzeigen",
    "Read more": "Mehr lesen",
    "Unknown": "Unbekannt",
    "(no subject)": "(kein Betreff)",

    // ── Shared form components ──
    "Profile Photo": "Profilfoto",
    "Upload Photo": "Foto hochladen",
    "JPG, PNG. Max 2MB.": "JPG, PNG. Max. 2 MB.",
    "ID / Passport / Identification Document": "Ausweis / Reisepass / Identitätsnachweis",
    "ID Document": "Ausweisdokument",
    "🔄 Replace document": "🔄 Dokument ersetzen",
    "Document uploaded": "Dokument hochgeladen",
    "Upload ID, Passport or Government ID": "Ausweis, Reisepass oder amtlichen Ausweis hochladen",
    "JPG, PNG or PDF — max 5MB": "JPG, PNG oder PDF – max. 5 MB",
    "Please enter a university or institution name.": "Bitte geben Sie den Namen einer Universität oder Einrichtung ein.",
    "+ Add University": "+ Universität hinzufügen",
    "Add University": "Universität hinzufügen",
    "Education Level": "Bildungsabschluss",
    "Country of Study": "Studienland",
    "University / Institution": "Universität / Einrichtung",
    "Field of Study / Major": "Studienfach / Schwerpunkt",
    "Roles / Titles": "Rollen / Titel",
    "(add all roles you hold)": "(alle Ihre Rollen hinzufügen)",
    "e.g. CEO, Board Member, Investor…": "z. B. CEO, Vorstandsmitglied, Investor…",
    "⭐ Click a role to set it as your primary role": "⭐ Klicken Sie auf eine Rolle, um sie als Hauptrolle festzulegen",
    "Bachelor / Undergraduate": "Bachelor / Grundstudium",
    "Master's Degree": "Master-Abschluss",
    "PhD / Doctorate": "Promotion / Doktorat",
    "Other University Degree": "Anderer Hochschulabschluss",
    "N/A — Did not attend university": "k. A. – Keine Universität besucht",
    "Bachelor": "Bachelor",
    "Master's": "Master",
    "PhD": "Promotion",
    "male": "männlich",
    "female": "weiblich",

    // ── Permissions ──
    "Member": "Mitglied",
    "Admin": "Admin",
    "Super Admin": "Super-Admin",
    "Error: ": "Fehler: ",
    "As a Super Admin, you can promote members to Admin or Super Admin, and demote admins.": "Als Super-Admin können Sie Mitglieder zu Admins oder Super-Admins ernennen und Admins zurückstufen.",
    "Only Super Admins can change member roles.": "Nur Super-Admins können Mitgliederrollen ändern.",
    "🔒 You do not have permission to change roles.": "🔒 Sie haben keine Berechtigung, Rollen zu ändern.",
    "Search members": "Mitglieder suchen",
    "Name or email…": "Name oder E-Mail…",
    "Current Role": "Aktuelle Rolle",
    "↓ Demote": "↓ Zurückstufen",
    "⭐ Super": "⭐ Super",
    "↑ Admin": "↑ Admin",
    "Confirm Role Change": "Rollenänderung bestätigen",
    "Change ": "",
    "'s role from ": ": Rolle ändern von ",
    " to ": " zu ",
    "s": "",
    " job": " Stelle(n)",
    " available": " verfügbar",

    // ── Member detail / edit ──
    " · Class of ": " · Jahrgang ",
    "Class of ": "Jahrgang ",
    "Deactivated": "Deaktiviert",
    "Mentor": "Mentor",
    "Hiring": "Stellt ein",
    "First Name": "Vorname",
    "Last Name": "Nachname",
    "LinkedIn": "LinkedIn",
    "Website": "Website",
    "Gender": "Geschlecht",
    "Date of Birth": "Geburtsdatum",
    "Graduation Year": "Abschlussjahr",
    "Companies": "Unternehmen",
    "Industries": "Branchen",
    "Regions": "Regionen",
    "Expertise": "Fachgebiete",
    "Bio": "Kurzbiografie",
    "University Education": "Hochschulbildung",
    "Highest Level of Education": "Höchster Bildungsabschluss",
    "Universities Attended": "Besuchte Universitäten",
    "Willing to Mentor": "Bereit, Mentor zu sein",
    "Open to Fundraising": "Offen für Fundraising",
    "Open to Hiring": "Offen für Einstellungen",
    "🔒 Hidden": "🔒 Verborgen",
    "Education": "Bildung",
    "Universities": "Universitäten",
    "✓ Willing to Mentor": "✓ Bereit, Mentor zu sein",
    "✓ Willing to Donate": "✓ Bereit zu spenden",
    "✓ Willing to Invest": "✓ Bereit zu investieren",
    "✓ Open to Hiring": "✓ Offen für Einstellungen",
    "🔒 ID Document": "🔒 Ausweisdokument",
    "(Only visible to you)": "(Nur für Sie sichtbar)",
    "📄 View Document": "📄 Dokument ansehen",
    "✏️ Edit Profile": "✏️ Profil bearbeiten",
    "total lifetime": "insgesamt",
    "No donations recorded yet.": "Noch keine Spenden erfasst.",
    "General Donation": "Allgemeine Spende",
    "Events Attended (": "Besuchte Veranstaltungen (",
    "No events attended yet.": "Noch keine Veranstaltungen besucht.",
    "Internal Admin Notes (not visible to member)": "Interne Admin-Notizen (für das Mitglied nicht sichtbar)",
    "Add internal notes about this member...": "Interne Notizen zu diesem Mitglied hinzufügen…",
    "Save Notes": "Notizen speichern",
    "First name and email are required.": "Vorname und E-Mail sind erforderlich.",
    "Edit Member": "Mitglied bearbeiten",
    "Add New Member": "Neues Mitglied hinzufügen",
    "Add Member": "Mitglied hinzufügen",

    // ── Donations ──
    "General": "Allgemein",
    "Scholarship Fund": "Stipendienfonds",
    "School Renovation": "Schulrenovierung",
    "Lab Equipment": "Laborausstattung",
    "Sports Fund": "Sportfonds",
    "Cultural Program": "Kulturprogramm",
    "Please enter a valid amount.": "Bitte geben Sie einen gültigen Betrag ein.",
    "Current total: EGP ": "Aktuelle Summe: EGP ",
    "Donation Amount (EGP)": "Spendenbetrag (EGP)",
    "Donation Project": "Spendenprojekt",
    "Note (optional)": "Notiz (optional)",
    "Any additional context...": "Weitere Informationen…",
    "Record Donation": "Spende erfassen",
    "Error recording donation: ": "Fehler beim Erfassen der Spende: ",
    "Project name is required.": "Projektname ist erforderlich.",
    "Edit Donation Project": "Spendenprojekt bearbeiten",
    "New Donation Project": "Neues Spendenprojekt",
    "Project Name *": "Projektname *",
    "e.g. Scholarship Fund 2026": "z. B. Stipendienfonds 2026",
    "What does this project fund?": "Was finanziert dieses Projekt?",
    "Fundraising Goal (EGP)": "Spendenziel (EGP)",
    "Create Project": "Projekt erstellen",
    "Error saving project: ": "Fehler beim Speichern des Projekts: ",
    "💰 Record Donations": "💰 Spenden erfassen",
    "📂 Donation Projects": "📂 Spendenprojekte",
    "Search member to record donation...": "Mitglied suchen, um eine Spende zu erfassen…",
    "Last Donation": "Letzte Spende",
    "+ Record": "+ Erfassen",
    " active projects": " aktive Projekte",
    "+ New Project": "+ Neues Projekt",
    "No donation projects yet. Create your first one!": "Noch keine Spendenprojekte. Erstellen Sie das erste!",
    "Raised: ": "Gesammelt: ",
    "Goal: EGP ": "Ziel: EGP ",
    "Total raised: ": "Insgesamt gesammelt: ",
    "Archive": "Archivieren",
    "Archive this project?": "Dieses Projekt archivieren?",
    "It won't appear in the donation dropdown anymore.": "Es erscheint dann nicht mehr in der Spendenauswahl.",
    "Restore": "Wiederherstellen",
    "Donation Project ": "Spendenprojekt ",

    // ── Admin: Members ──
    "Error saving member: ": "Fehler beim Speichern des Mitglieds: ",
    "Error updating member: ": "Fehler beim Aktualisieren des Mitglieds: ",
    "Error adding member: ": "Fehler beim Hinzufügen des Mitglieds: ",
    "Search by name, company, expertise, region...": "Nach Name, Unternehmen, Fachgebiet, Region suchen…",
    "All Industries": "Alle Branchen",
    "All Education Levels": "Alle Bildungsabschlüsse",
    "All Study Countries": "Alle Studienländer",
    "Reload members from database": "Mitglieder aus der Datenbank neu laden",
    "+ Add Member": "+ Mitglied hinzufügen",
    "Exporting…": "Wird exportiert…",
    "⬆ Import Excel": "⬆ Excel importieren",
    "Import members from an Excel or CSV file": "Mitglieder aus einer Excel- oder CSV-Datei importieren",
    "Import Members from Excel": "Mitglieder aus Excel importieren",
    "Download template": "Vorlage herunterladen",
    "New members": "Neue Mitglieder",
    "Already exist (by email)": "Bereits vorhanden (per E-Mail)",
    "Rows with errors": "Fehlerhafte Zeilen",
    "These rows will be skipped:": "Diese Zeilen werden übersprungen:",
    "These rows will be imported with missing data:": "Diese Zeilen werden mit fehlenden Daten importiert:",
    "With missing data": "Mit fehlenden Daten",
    "Skipped": "Übersprungen",
    "Importing…": "Wird importiert…",
    "Added": "Hinzugefügt",
    "Updated": "Aktualisiert",
    "Failed": "Fehlgeschlagen",
    "Clear": "Auswahl aufheben",
    "Clear selection": "Auswahl aufheben",
    "Select all in current view": "Alle in der aktuellen Ansicht auswählen",
    "Export the checked members to an Excel file": "Ausgewählte Mitglieder als Excel-Datei exportieren",
    "Export all members in the current view to an Excel file": "Alle Mitglieder der aktuellen Ansicht als Excel-Datei exportieren",
    "Company / Role": "Unternehmen / Rolle",
    "Donated": "Gespendet",
    "Loading members…": "Mitglieder werden geladen…",
    "No members loaded yet. Click Reload to fetch.": "Noch keine Mitglieder geladen. Klicken Sie auf „Neu laden“.",
    "No members match your search.": "Keine Mitglieder entsprechen Ihrer Suche.",
    "✉️ Mail": "✉️ Mail",
    "Reactivate": "Reaktivieren",
    "Deactivate": "Deaktivieren",
    " account?": "?",
    "Member will regain access.": "Das Mitglied erhält wieder Zugang.",
    "Member will lose portal access.": "Das Mitglied verliert den Portalzugang.",

    // ── Events ──
    "Event name and start date are required.": "Veranstaltungsname und Startdatum sind erforderlich.",
    "Error saving event: ": "Fehler beim Speichern der Veranstaltung: ",
    "Error deleting event: ": "Fehler beim Löschen der Veranstaltung: ",
    "Edit Event": "Veranstaltung bearbeiten",
    "Create New Event": "Neue Veranstaltung erstellen",
    "Event Name": "Name der Veranstaltung",
    "e.g. DEO Gründerforum 2026": "z. B. DEO Gründerforum 2026",
    "What is this event about?": "Worum geht es bei dieser Veranstaltung?",
    "Start Date": "Startdatum",
    "Start Time": "Startzeit",
    "End Date": "Enddatum",
    "End Time": "Endzeit",
    "📍 In-Person": "📍 Vor Ort",
    "💻 Online": "💻 Online",
    "e.g. Cairo, Egypt or Hotel Name": "z. B. Kairo, Ägypten oder Hotelname",
    "Ticket": "Ticket",
    "🎟️ Free": "🎟️ Kostenlos",
    "💰 Ticketed": "💰 Kostenpflichtig",
    "Ticket Price (€)": "Ticketpreis (€)",
    "Max Attendees (optional)": "Max. Teilnehmer (optional)",
    "Leave blank for unlimited": "Leer lassen für unbegrenzt",
    "Require admin approval for registrations": "Anmeldungen erfordern Admin-Freigabe",
    "Quick Links": "Schnelllinks",
    "Link label (e.g. Zoom)": "Link-Bezeichnung (z. B. Zoom)",
    "Event Images (max 5)": "Veranstaltungsbilder (max. 5)",
    "Images are compressed automatically before saving.": "Bilder werden vor dem Speichern automatisch komprimiert.",
    "Create Event": "Veranstaltung erstellen",
    "+ Create Event": "+ Veranstaltung erstellen",
    "Event Full": "Ausgebucht",
    "Register →": "Anmelden →",
    "⏳ Pending Approval": "⏳ Freigabe ausstehend",
    "⏳ Pending": "⏳ Ausstehend",
    "✅ Registered": "✅ Angemeldet",
    "❌ Not Approved": "❌ Nicht genehmigt",
    "✋ Approval Required": "✋ Freigabe erforderlich",
    "Approval Required": "Freigabe erforderlich",
    "Registrations (": "Anmeldungen (",
    "✓ Approve": "✓ Genehmigen",
    "✕ Reject": "✕ Ablehnen",
    "✅ Approved": "✅ Genehmigt",
    "❌ Rejected": "❌ Abgelehnt",
    " Event": " Veranstaltung(en)",
    "No events yet. Create your first one!": "Noch keine Veranstaltungen. Erstellen Sie die erste!",
    " quick link": " Schnelllink",
    "Upcoming Events (": "Kommende Veranstaltungen (",
    "No upcoming events yet. Check back soon!": "Noch keine kommenden Veranstaltungen. Schauen Sie bald wieder vorbei!",
    "Past Events": "Vergangene Veranstaltungen",
    "New event created": "Neue Veranstaltung erstellt",
    "New event created: ": "Neue Veranstaltung erstellt: ",

    // ── Applications ──
    "Error approving: ": "Fehler beim Genehmigen: ",
    "Error rejecting: ": "Fehler beim Ablehnen: ",
    "Refresh applications": "Bewerbungen aktualisieren",
    "Applied: ": "Beworben: ",
    "View Full Profile": "Vollständiges Profil ansehen",
    "Motivation": "Motivation",
    "Full Application": "Vollständige Bewerbung",
    "✓ Approve & Add to Network": "✓ Genehmigen & zum Netzwerk hinzufügen",
    "Error saving: ": "Fehler beim Speichern: ",
    " joined DEO Leaders": " ist DEO Leaders beigetreten",

    // ── Analytics / Dashboard ──
    "Total Members": "Mitglieder gesamt",
    "Active Members": "Aktive Mitglieder",
    "Total Donated": "Gesamtspenden",
    "Avg. Engagement": "Ø Engagement",
    "Top Donors": "Top-Spender",
    "By Industry": "Nach Branche",
    "By Region": "Nach Region",
    "Join Date": "Beitrittsdatum",
    "Last Login At": "Letzte Anmeldung",
    "Operations Overview": "Betriebsübersicht",
    "Admin Dashboard": "Admin-Dashboard",
    "Export Members CSV": "Mitglieder als CSV exportieren",
    "Member Funnel": "Mitglieder-Funnel",
    "Applied → Accepted → Account created → Signed in → Active": "Beworben → Angenommen → Konto erstellt → Angemeldet → Aktiv",
    "Total Applications": "Bewerbungen gesamt",
    "Password Created": "Passwort erstellt",
    "Signed In (ever)": "Je angemeldet",
    "Active Last 30d": "Aktiv (letzte 30 T.)",
    "% of prev": "% vom Vorherigen",
    "* Sign-in tracking active from April 2025. Members added before then show 0 until next login.": "* Anmelde-Tracking aktiv seit April 2025. Zuvor hinzugefügte Mitglieder zeigen 0 bis zur nächsten Anmeldung.",
    "Pending Applications": "Offene Bewerbungen",
    "Platform Activity": "Plattformaktivität",
    "Last 7 days": "Letzte 7 Tage",
    "Last 30 days": "Letzte 30 Tage",
    "Last 90 days": "Letzte 90 Tage",
    " total posts": " Beiträge gesamt",
    " total messages": " Nachrichten gesamt",
    "Top Contributors": "Aktivste Autoren",
    "Most active post authors": "Aktivste Verfasser von Beiträgen",
    "No post data yet.": "Noch keine Beitragsdaten.",
    "Top Message Senders": "Aktivste Absender",
    "No message data yet.": "Noch keine Nachrichtendaten.",
    "Members by Country": "Mitglieder nach Land",
    "Top Industries": "Top-Branchen",
    "No industry data yet.": "Noch keine Branchendaten.",
    "Members by Role": "Mitglieder nach Rolle",
    "Study Countries": "Studienländer",
    "From education entries": "Aus den Bildungsangaben",

    // ── Careers ──
    "Department": "Abteilung",
    "Salary": "Gehalt",
    "Deadline": "Bewerbungsfrist",
    "Key Responsibilities": "Hauptaufgaben",
    "Requirements & Qualifications": "Anforderungen & Qualifikationen",
    "Preferred Experience": "Wünschenswerte Erfahrung",
    "Skills & Tags": "Fähigkeiten & Tags",
    "Posted by": "Veröffentlicht von",
    "Posted By": "Veröffentlicht von",
    "✨ Suggested Candidates": "✨ Vorgeschlagene Kandidaten",
    "DEO members whose profiles match this role": "DEO-Mitglieder, deren Profil zu dieser Stelle passt",
    "Scanning profiles…": "Profile werden durchsucht…",
    "No matching candidate profiles found yet.": "Noch keine passenden Kandidatenprofile gefunden.",
    "Open to Work": "Offen für neue Stelle",
    "✅ Open to Work": "✅ Offen für neue Stelle",
    "✨ Strong Match": "✨ Sehr gute Übereinstimmung",
    "✉ Contact": "✉ Kontakt",
    "Apply for this role": "Auf diese Stelle bewerben",
    "Your DEO Leaders profile will be shared with the poster. Add an optional note below.": "Ihr DEO-Leaders-Profil wird mit dem Inserenten geteilt. Fügen Sie unten optional eine Nachricht hinzu.",
    "Cover Note (optional)": "Anschreiben (optional)",
    "Introduce yourself or explain why you're a great fit…": "Stellen Sie sich vor oder erklären Sie, warum Sie gut passen…",
    "Submit Application": "Bewerbung absenden",
    "Application submitted": "Bewerbung abgeschickt",
    "The poster has been notified via DEO Mail.": "Der Inserent wurde per DEO Mail benachrichtigt.",
    "💼 Apply Now": "💼 Jetzt bewerben",
    "Close Job": "Stelle schließen",
    "Reopen Job": "Stelle wieder öffnen",
    "Apply by email ↗": "Per E-Mail bewerben ↗",
    "Error applying: ": "Fehler bei der Bewerbung: ",
    "DEO Leaders Network": "DEO Leaders Netzwerk",
    "Careers Board": "Stellenbörse",
    "📄 My CV Profile": "📄 Mein Lebenslauf-Profil",
    "📄 Set Up CV Profile": "📄 Lebenslauf-Profil anlegen",
    "💼 Post a Job": "💼 Stelle ausschreiben",
    "Search jobs by title, company, skills…": "Stellen nach Titel, Unternehmen, Fähigkeiten suchen…",
    "Work Mode": "Arbeitsmodell",
    "Job Type": "Anstellungsart",
    "Seniority": "Karrierestufe",
    "Open only": "Nur offene",
    "Newest first": "Neueste zuerst",
    "Newest First": "Neueste zuerst",
    "A–Z": "A–Z",
    " matching filters": " passend zu den Filtern",
    "No jobs match your filters": "Keine Stellen entsprechen Ihren Filtern",
    "No jobs posted yet": "Noch keine Stellen ausgeschrieben",
    "Be the first to post an opportunity for the network.": "Schreiben Sie als Erste/r eine Stelle für das Netzwerk aus.",
    "✨ Matches your profile": "✨ Passt zu Ihrem Profil",
    "CV must be under 10 MB.": "Der Lebenslauf muss kleiner als 10 MB sein.",
    "Current title is required.": "Aktuelle Position ist erforderlich.",
    "Edit CV Profile": "Lebenslauf-Profil bearbeiten",
    "Create CV Profile": "Lebenslauf-Profil erstellen",
    "Your CV profile is visible to all DEO Leaders members and helps you get matched with relevant job opportunities.": "Ihr Lebenslauf-Profil ist für alle DEO-Leaders-Mitglieder sichtbar und hilft, passende Stellenangebote für Sie zu finden.",
    "Current Title *": "Aktuelle Position *",
    "e.g. Product Manager": "z. B. Product Manager",
    "Desired Title": "Gewünschte Position",
    "e.g. VP of Product": "z. B. VP of Product",
    "Work Preference": "Arbeitspräferenz",
    "Years of Experience": "Jahre Berufserfahrung",
    "Professional Summary": "Berufliches Profil",
    "A short intro about your background, goals, and what you're looking for…": "Eine kurze Vorstellung Ihres Werdegangs, Ihrer Ziele und wonach Sie suchen…",
    "Functions / Departments": "Funktionen / Abteilungen",
    "Skills & Expertise": "Fähigkeiten & Fachgebiete",
    "Upload CV / Resume (PDF, max 10 MB)": "Lebenslauf hochladen (PDF, max. 10 MB)",
    "Replace CV": "Lebenslauf ersetzen",
    "Upload CV": "Lebenslauf hochladen",
    "CV uploaded": "Lebenslauf hochgeladen",
    "I am actively open to work": "Ich suche aktiv eine neue Stelle",
    "Create Profile": "Profil erstellen",
    "Total Jobs": "Stellen gesamt",
    "💼 All Jobs": "💼 Alle Stellen",
    "📋 Applications": "📋 Bewerbungen",
    "👤 Candidate Profiles": "👤 Kandidatenprofile",
    "Search jobs…": "Stellen suchen…",
    "No jobs yet.": "Noch keine Stellen.",
    "No applications yet.": "Noch keine Bewerbungen.",
    "Applied to: ": "Beworben auf: ",
    "No candidate profiles yet.": "Noch keine Kandidatenprofile.",
    "📄 CV": "📄 Lebenslauf",
    "your organisation": "Ihre Organisation",
    "Job Application: ": "Bewerbung: ",
    "On-site": "Vor Ort",
    "Hybrid": "Hybrid",
    "Remote": "Remote",
    "Open to All": "Offen für alles",
    "On-site Only": "Nur vor Ort",
    "Remote Only": "Nur remote",
    "Full-time": "Vollzeit",
    "Part-time": "Teilzeit",
    "Contract": "Befristet / Vertrag",
    "Freelance": "Freiberuflich",
    "Internship": "Praktikum",
    "Intern": "Praktikant/in",
    "Mid-level": "Mittlere Ebene",
    "Lead": "Leitung",
    "Director": "Direktor/in",
    "C-level": "C-Level",

    // ── Job post modal ──
    "Image must be under 5 MB.": "Das Bild muss kleiner als 5 MB sein.",
    "PDF must be under 10 MB.": "Die PDF muss kleiner als 10 MB sein.",
    "Job title is required.": "Stellentitel ist erforderlich.",
    "Company name is required.": "Unternehmensname ist erforderlich.",
    "Details": "Details",
    "Requirements": "Anforderungen",
    "Application": "Bewerbung",
    "Edit Job Posting": "Stellenanzeige bearbeiten",
    "Post a Job": "Stelle ausschreiben",
    "Visible to all DEO Leaders members": "Für alle DEO-Leaders-Mitglieder sichtbar",
    "Job Title *": "Stellentitel *",
    "e.g. Head of Product, Software Engineer": "z. B. Head of Product, Software Engineer",
    "Hiring Company *": "Einstellendes Unternehmen *",
    "Company or organisation": "Unternehmen oder Organisation",
    "Hiring Contact Name": "Ansprechpartner",
    "e.g. Sarah Hassan (optional)": "z. B. Sarah Hassan (optional)",
    "Employment Type": "Anstellungsart",
    "Seniority Level": "Karrierestufe",
    "Department / Function": "Abteilung / Funktion",
    "Short Summary": "Kurzbeschreibung",
    "One or two sentences summarising the opportunity…": "Ein oder zwei Sätze zur Stelle…",
    "City / Location": "Stadt / Ort",
    "Salary Range (optional)": "Gehaltsspanne (optional)",
    "e.g. $80k–$120k / EGP 30k–50k /mo": "z. B. 80–120 Tsd. $ / 30–50 Tsd. EGP pro Monat",
    "Full Job Description": "Vollständige Stellenbeschreibung",
    "Describe the role, the team, and what makes this opportunity exciting…": "Beschreiben Sie die Rolle, das Team und was diese Stelle spannend macht…",
    "• Lead product roadmap\n• Manage cross-functional teams\n• Drive go-to-market execution…": "• Produkt-Roadmap verantworten\n• Funktionsübergreifende Teams führen\n• Markteinführung vorantreiben…",
    "• 5+ years in a similar role\n• Strong analytical skills\n• Fluent English required…": "• 5+ Jahre in einer ähnlichen Rolle\n• Ausgeprägte analytische Fähigkeiten\n• Fließendes Englisch erforderlich…",
    "Preferred Experience (optional)": "Wünschenswerte Erfahrung (optional)",
    "Nice-to-have skills or background…": "Wünschenswerte Fähigkeiten oder Hintergrund…",
    "Application / Contact Email": "Bewerbungs- / Kontakt-E-Mail",
    "Where should applicants send their CVs?": "Wohin sollen Bewerber ihren Lebenslauf schicken?",
    "Application Deadline (optional)": "Bewerbungsfrist (optional)",
    "💡 How applications work": "💡 So funktionieren Bewerbungen",
    "Post Job": "Stelle veröffentlichen",
    "DEO members can apply directly through the platform. When someone applies, you'll receive a DEO Mail message with their full profile and a note. You can also receive applications via the email above.": "DEO-Mitglieder können sich direkt über die Plattform bewerben. Bei jeder Bewerbung erhalten Sie eine DEO-Mail-Nachricht mit dem vollständigen Profil und einer Notiz. Bewerbungen können Sie außerdem über die oben angegebene E-Mail-Adresse erhalten.",

    // ── Investment opportunity modal ──
    "Opportunity title is required.": "Titel der Gelegenheit ist erforderlich.",
    "Share an Investment Opportunity": "Investitionsmöglichkeit teilen",
    "Opportunity Title *": "Titel der Gelegenheit *",
    "e.g. Series A in CleanTech startup": "z. B. Series A in einem CleanTech-Startup",
    "Company / Entity": "Unternehmen / Organisation",
    "Company name": "Unternehmensname",
    "Stage": "Phase",
    "Growth": "Wachstum",
    "e.g. Cairo / DACH / Remote": "z. B. Kairo / DACH / Remote",
    "Describe the opportunity, key metrics, and what you are looking for…": "Beschreiben Sie die Gelegenheit, wichtige Kennzahlen und wonach Sie suchen…",
    "Share Opportunity": "Gelegenheit teilen",

    // ── Perks ──
    "Active Regions": "Aktive Regionen",
    "d left": " T. übrig",
    " days left (": " Tage übrig (",
    "View Perk": "Vorteil ansehen",
    "Error saving perk: ": "Fehler beim Speichern des Vorteils: ",
    "Error removing perk: ": "Fehler beim Entfernen des Vorteils: ",
    "How to Redeem": "So lösen Sie ein",
    "🏷 Reveal Promo Code": "🏷 Promo-Code anzeigen",
    "Your promo code:": "Ihr Promo-Code:",
    "Copy Code": "Code kopieren",
    "✓ Application submitted successfully": "✓ Antrag erfolgreich eingereicht",
    "📋 Apply for Access": "📋 Zugang beantragen",
    "Complete your application": "Antrag vervollständigen",
    "Your Name": "Ihr Name",
    "Your Email": "Ihre E-Mail",
    "Why are you interested in this benefit?": "Warum interessieren Sie sich für diesen Vorteil?",
    "🌐 Visit Partner Website": "🌐 Partner-Website besuchen",
    "✓ Claimed": "✓ Eingelöst",
    "Contact the partner directly to redeem this benefit.": "Wenden Sie sich direkt an den Partner, um diesen Vorteil einzulösen.",
    "🔖 Save for Later": "🔖 Für später merken",
    "✓ Saved to My Perks": "✓ In „Meine Vorteile“ gespeichert",
    "Terms & Conditions": "Bedingungen",
    "Member Perks & Benefits": "Mitgliedervorteile",
    "Exclusive benefits from our partner community.": "Exklusive Vorteile aus unserer Partner-Community.",
    "Search perks...": "Vorteile suchen…",
    "All Categories": "Alle Kategorien",
    "All Locations": "Alle Orte",
    "All Types": "Alle Arten",
    "Ending Soon": "Endet bald",
    "No perks match your filters": "Keine Vorteile entsprechen Ihren Filtern",
    "My Perks": "Meine Vorteile",
    "No saved perks yet. Browse the marketplace to discover benefits!": "Noch keine gespeicherten Vorteile. Entdecken Sie Angebote im Marktplatz!",
    "No claimed perks yet.": "Noch keine eingelösten Vorteile.",
    "No used perks yet.": "Noch keine genutzten Vorteile.",
    "Title and Partner Name are required.": "Titel und Partnername sind erforderlich.",
    "Edit Perk": "Vorteil bearbeiten",
    "Create New Perk": "Neuen Vorteil erstellen",
    "Perk Title *": "Titel des Vorteils *",
    "Partner Name *": "Partnername *",
    "Category (e.g. Finance, Tech)": "Kategorie (z. B. Finanzen, Tech)",
    "Location (e.g. Cairo, Global)": "Ort (z. B. Kairo, Global)",
    "Expiration Date": "Ablaufdatum",
    "Perk Type": "Art des Vorteils",
    "Redemption Type": "Einlöseart",
    "Promo Code": "Promo-Code",
    "External Link (URL)": "Externer Link (URL)",
    "Short Description (shown on card)": "Kurzbeschreibung (auf der Karte angezeigt)",
    "Full Description / Benefit Details": "Vollständige Beschreibung / Details",
    "Partner Logo": "Partnerlogo",
    "Active (visible in marketplace)": "Aktiv (im Marktplatz sichtbar)",
    "Create Perk": "Vorteil erstellen",
    "Active Perks": "Aktive Vorteile",
    "Total Views": "Aufrufe gesamt",
    "Total Saves": "Gespeichert gesamt",
    "Total Claims": "Einlösungen gesamt",
    "Most Viewed Perks": "Meistgesehene Vorteile",
    "+ Add Perk": "+ Vorteil hinzufügen",
    "Perk": "Vorteil",
    "Partner": "Partner",
    "Views": "Aufrufe",
    "No perks found.": "Keine Vorteile gefunden.",
    "Expires ": "Läuft ab am ",
    "No expiry": "Kein Ablaufdatum",
    "discount": "Rabatt",
    "exclusive_access": "Exklusiver Zugang",
    "exclusive access": "exklusiver Zugang",
    "event": "Veranstaltung",
    "service": "Dienstleistung",
    "promo_code": "Promo-Code",
    "apply": "Antrag",
    "external_link": "Externer Link",
    "🛍 Marketplace": "🛍 Marktplatz",
    "🔖 My Perks": "🔖 Meine Vorteile",

    // ── DEO Mail / Blast ──
    "Please select a recipient and write a message.": "Bitte wählen Sie einen Empfänger und schreiben Sie eine Nachricht.",
    "✉️ DEO Mail": "✉️ DEO Mail",
    "✏️ Compose": "✏️ Verfassen",
    "Your DEO Mail inbox is empty. Hit Compose to send your first message.": "Ihr DEO-Mail-Posteingang ist leer. Klicken Sie auf „Verfassen“, um Ihre erste Nachricht zu senden.",
    "Write a reply… (Enter to send, Shift+Enter for new line)": "Antwort schreiben… (Enter zum Senden, Umschalt+Enter für neue Zeile)",
    "Send ↑": "Senden ↑",
    "New Message": "Neue Nachricht",
    "Type a name to search…": "Namen eingeben, um zu suchen…",
    "No members found": "Keine Mitglieder gefunden",
    "Write your message…": "Ihre Nachricht…",
    "Send DEO Mail ✉️": "DEO Mail senden ✉️",
    "Subject and body are required.": "Betreff und Nachricht sind erforderlich.",
    "Error sending blast: ": "Fehler beim Senden der Rundmail: ",
    "📢 Blast DEO Mail": "📢 DEO-Rundmail",
    "Send a message to all or a filtered segment of active members. Each recipient receives it in their DEO Mail inbox.": "Senden Sie eine Nachricht an alle oder an eine gefilterte Gruppe aktiver Mitglieder. Jeder Empfänger erhält sie in seinem DEO-Mail-Posteingang.",
    "Filter Recipients": "Empfänger filtern",
    "All Countries": "Alle Länder",
    "All Expertise": "Alle Fachgebiete",
    "All Classes": "Alle Jahrgänge",
    "Matching your filters": "Passend zu Ihren Filtern",
    "All active members": "Alle aktiven Mitglieder",
    "Compose Message": "Nachricht verfassen",
    "Subject line…": "Betreffzeile…",
    "Write your message here…\n\nNote: messages will be sent from your name. Each recipient sees it as a personal DEO Mail.": "Schreiben Sie hier Ihre Nachricht…\n\nHinweis: Nachrichten werden in Ihrem Namen gesendet. Jeder Empfänger sieht sie als persönliche DEO Mail.",
    "✅ Blast sent successfully to ": "✅ Rundmail erfolgreich gesendet an ",
    "⚠️ This will send a DEO Mail to ": "⚠️ Damit wird eine DEO Mail gesendet an ",
    ". This cannot be undone.": ". Dies kann nicht rückgängig gemacht werden.",
    "Confirm & Send": "Bestätigen & senden",

    // ── Member portal ──
    "Save Profile": "Profil speichern",
    "Edit Profile": "Profil bearbeiten",
    "Personal Bio": "Persönliche Biografie",
    "Donation History": "Spendenhistorie",
    "No donations yet.": "Noch keine Spenden.",
    "Suggested Connections": "Vorgeschlagene Kontakte",
    "Based on your industry and expertise": "Basierend auf Ihrer Branche und Ihren Fachgebieten",
    "No suggestions available yet.": "Noch keine Vorschläge verfügbar.",
    "Member Directory": "Mitgliederverzeichnis",
    "Search by name, role, company, expertise…": "Nach Name, Rolle, Unternehmen, Fachgebiet suchen…",
    "🎓 Mentor": "🎓 Mentor",
    "💼 Hiring": "💼 Stellt ein",
    "🤝 Fundraising": "🤝 Fundraising",
    "No members match your filters.": "Keine Mitglieder entsprechen Ihren Filtern.",
    "Support DEO": "DEO unterstützen",
    "Support students with financial need through DEO's scholarship program.": "Unterstützen Sie bedürftige Schülerinnen und Schüler über das Stipendienprogramm der DEO.",
    "Upgrade facilities and infrastructure at DEO schools.": "Modernisierung von Einrichtungen und Infrastruktur an DEO-Schulen.",
    "Fund modern equipment for science and technology labs.": "Finanzierung moderner Ausstattung für naturwissenschaftliche und technische Labore.",
    "Support DEO's core programs and operations.": "Unterstützung der Kernprogramme und des Betriebs der DEO.",
    "Your donation supports scholarships, school infrastructure, and the next generation of DEO students.": "Ihre Spende unterstützt Stipendien, die Schulinfrastruktur und die nächste Generation von DEO-Schülerinnen und -Schülern.",
    "Your Lifetime Contribution": "Ihr Gesamtbeitrag",
    "Choose a Project": "Projekt auswählen",
    "% of EGP ": "% von EGP ",
    "Pay via InstaPay": "Über InstaPay bezahlen",
    "Project: ": "Projekt: ",
    "InstaPay handle: ": "InstaPay-Kennung: ",
    "Account number: ": "Kontonummer: ",
    "Copy Handle": "Kennung kopieren",
    "💳 Online payment gateway — ": "💳 Online-Zahlung – ",
    "coming soon": "demnächst verfügbar",
    "Fundraising": "Fundraising",
    "View LinkedIn Profile": "LinkedIn-Profil ansehen",
    "No LinkedIn profile": "Kein LinkedIn-Profil",

    // ── Newsfeed ──
    "Post": "Beitrag",
    "Job": "Stelle",
    "Investment Opp.": "Investitionsmöglichkeit",
    "New Member": "Neues Mitglied",
    "New Event": "Neue Veranstaltung",
    "New Company": "Neues Unternehmen",
    "New Deal": "Neuer Deal",
    "Add some content before posting.": "Bitte fügen Sie vor dem Veröffentlichen Inhalt hinzu.",
    "Create a Post": "Beitrag erstellen",
    "Share an update, insight, or announcement with the DEO Leaders community…": "Teilen Sie ein Update, eine Erkenntnis oder eine Ankündigung mit der DEO-Leaders-Community…",
    "Image attached": "Bild angehängt",
    "Add Image": "Bild hinzufügen",
    "Attach PDF": "PDF anhängen",
    "✕ Remove image": "✕ Bild entfernen",
    "✕ Remove PDF": "✕ PDF entfernen",
    "Delete this post from the feed?": "Diesen Beitrag aus dem Feed löschen?",
    "Delete this from the feed?": "Dies aus dem Feed löschen?",
    "View & Apply →": "Ansehen & bewerben →",
    "Raising:": "Kapitalbedarf:",
    "A new member joined DEO Leaders": "Ein neues Mitglied ist DEO Leaders beigetreten",
    "New donation project created": "Neues Spendenprojekt erstellt",
    "New donation project: ": "Neues Spendenprojekt: ",
    "Error posting reply: ": "Fehler beim Senden der Antwort: ",
    "Error deleting: ": "Fehler beim Löschen: ",
    "Write a reply…": "Antwort schreiben…",
    "Posts": "Beiträge",
    "Jobs": "Stellen",
    "Deals": "Deals",
    "New Members": "Neue Mitglieder",
    "Share something with DEO Leaders…": "Teilen Sie etwas mit DEO Leaders…",
    "✍️ Write a Post": "✍️ Beitrag schreiben",
    "💼 Post a Deal": "💼 Deal veröffentlichen",
    "The feed is empty": "Der Feed ist leer",
    "Be the first to post something for the community.": "Veröffentlichen Sie als Erste/r etwas für die Community.",

    // ── Deal room ──
    "Startup Investment": "Startup-Investment",
    "Company Acquisition": "Unternehmensübernahme",
    "Real Estate Investment": "Immobilieninvestment",
    "Project Financing": "Projektfinanzierung",
    "Venture Funding": "Venture-Finanzierung",
    "Private Equity": "Private Equity",
    "Strategic Partnership": "Strategische Partnerschaft",
    "Idea": "Idee",
    "Acquisition": "Übernahme",
    "RE Development": "Immobilienentwicklung",
    "Project Finance": "Projektfinanzierung",
    "Equity": "Eigenkapital",
    "Revenue Share": "Umsatzbeteiligung",
    "Debt": "Fremdkapital",
    "Conv. Note": "Wandeldarlehen",
    "Profit Share": "Gewinnbeteiligung",
    "Cover Image": "Titelbild",
    "Click to upload cover image": "Klicken, um ein Titelbild hochzuladen",
    "Remove image": "Bild entfernen",
    "Pitch Deck (PDF)": "Pitch Deck (PDF)",
    "PDF uploaded": "PDF hochgeladen",
    "Click to upload PDF": "Klicken, um eine PDF hochzuladen",
    "✎ My Deal": "✎ Mein Deal",
    "Capital Needed": "Kapitalbedarf",
    "Interested": "Interessiert",
    "Please enter an investment amount.": "Bitte geben Sie einen Investitionsbetrag ein.",
    "Update Your Engagement": "Ihr Engagement aktualisieren",
    "Express Investment Interest": "Investitionsinteresse bekunden",
    "Deal: ": "Deal: ",
    "Engagement Type": "Art des Engagements",
    "Show Interest": "Interesse zeigen",
    "Express interest without disclosing an amount": "Interesse bekunden, ohne einen Betrag zu nennen",
    "Bid with Amount": "Gebot mit Betrag",
    "Submit a specific investment amount": "Einen konkreten Investitionsbetrag angeben",
    "Investment Amount (USD) *": "Investitionsbetrag (USD) *",
    "Visibility": "Sichtbarkeit",
    "Private": "Privat",
    "Only the poster and admins see your identity": "Nur der Inserent und Admins sehen Ihre Identität",
    " and amount": " und Ihren Betrag",
    "Public": "Öffentlich",
    "All members see your identity": "Alle Mitglieder sehen Ihre Identität",
    "Message to Poster (Optional)": "Nachricht an den Inserenten (optional)",
    "Introduce yourself or ask a question...": "Stellen Sie sich vor oder stellen Sie eine Frage…",
    "Deal Insights — Full View": "Deal-Einblicke – Vollansicht",
    "🔒 Full view — visible only to you and admins": "🔒 Vollansicht – nur für Sie und Admins sichtbar",
    "Total Engaged": "Engagements gesamt",
    "Interests": "Interessenbekundungen",
    "Bids w/ Amount": "Gebote mit Betrag",
    "Total Capital": "Gesamtkapital",
    "No investor expressions yet.": "Noch keine Investoren-Rückmeldungen.",
    "All Engagements": "Alle Engagements",
    "Interest": "Interesse",
    "🌐 Public": "🌐 Öffentlich",
    "🔒 Private": "🔒 Privat",
    "💼 Express Interest": "💼 Interesse bekunden",
    "✏️ Update Engagement": "✏️ Engagement aktualisieren",
    "📊 View Insights": "📊 Einblicke ansehen",
    "✏️ Edit Deal": "✏️ Deal bearbeiten",
    "Delete this deal?": "Diesen Deal löschen?",
    "Bid submitted": "Gebot abgegeben",
    "Interest expressed": "Interesse bekundet",
    "Overview": "Überblick",
    "Investment Details": "Investitionsdetails",
    "Min. Ticket": "Min. Ticket",
    "Max. Ticket": "Max. Ticket",
    "Valuation": "Bewertung",
    "Return Type": "Renditeart",
    "Expected Return": "Erwartete Rendite",
    "Horizon": "Anlagehorizont",
    "Media & Presentation": "Medien & Präsentation",
    "📄 Download Pitch Deck": "📄 Pitch Deck herunterladen",
    "▶️ Watch Video": "▶️ Video ansehen",
    "🌐 Website": "🌐 Website",
    "Investor Interest": "Investoreninteresse",
    "Public Capital": "Öffentliches Kapital",
    "🔒 You see all engagements (public + private) as ": "🔒 Sie sehen alle Engagements (öffentlich + privat) als ",
    "the deal poster": "Inserent des Deals",
    "an admin": "Admin",
    "Interest Only": "Nur Interesse",
    " private engagement": " privates Engagement",
    " (not shown)": " (nicht angezeigt)",
    "No engagements yet.": "Noch keine Engagements.",
    "No public engagements yet.": "Noch keine öffentlichen Engagements.",
    "Deal title is required.": "Deal-Titel ist erforderlich.",
    "Deal type is required.": "Deal-Art ist erforderlich.",
    "Edit Deal": "Deal bearbeiten",
    "Post a Deal": "Deal veröffentlichen",
    "Deal Title *": "Deal-Titel *",
    "e.g. AI Healthcare Platform Series A": "z. B. KI-Gesundheitsplattform Series A",
    "Company / Project Name": "Unternehmens- / Projektname",
    "Deal Type *": "Deal-Art *",
    "One-line pitch for the opportunity...": "Einzeiliger Pitch für die Gelegenheit…",
    "Full Description": "Vollständige Beschreibung",
    "Business model, traction, team, opportunity details...": "Geschäftsmodell, Traktion, Team, Details zur Gelegenheit…",
    "Min. Ticket Size": "Min. Ticketgröße",
    "Max. Ticket Size": "Max. Ticketgröße",
    "Expected Return Range": "Erwartete Renditespanne",
    "Horizon (Years)": "Anlagehorizont (Jahre)",
    "Video Link (YouTube / Vimeo)": "Videolink (YouTube / Vimeo)",
    "Website URL": "Website-URL",
    "Post Deal": "Deal veröffentlichen",
    "Private investment opportunities from the DEO Leaders network": "Private Investitionsmöglichkeiten aus dem DEO-Leaders-Netzwerk",
    "+ Post a Deal": "+ Deal veröffentlichen",
    "All Deals": "Alle Deals",
    "No deals posted yet": "Noch keine Deals veröffentlicht",
    "Be the first to share an investment opportunity with the DEO Leaders network.": "Teilen Sie als Erste/r eine Investitionsmöglichkeit mit dem DEO-Leaders-Netzwerk.",
    "Post the First Deal": "Ersten Deal veröffentlichen",
    " deals yet.": " Deals bisher.",

    // ── Auth alerts shown after login ──
    "Your account has been deactivated. Please contact the DEO Leaders team.": "Ihr Konto wurde deaktiviert. Bitte wenden Sie sich an das DEO-Leaders-Team.",
    "Login error: ": "Anmeldefehler: ",

    // ── Option lists (labels only; values stay English) ──
    "Technology": "Technologie",
    "Venture Capital": "Risikokapital",
    "Finance": "Finanzen",
    "Automotive": "Automobil",
    "Engineering": "Ingenieurwesen",
    "Legal": "Recht",
    "Consulting": "Beratung",
    "International Development": "Internationale Entwicklung",
    "Real Estate": "Immobilien",
    "Healthcare": "Gesundheitswesen",
    "Media & Communications": "Medien & Kommunikation",
    "Hospitality & Tourism": "Gastgewerbe & Tourismus",
    "Energy": "Energie",
    "Manufacturing": "Produktion",
    "Retail": "Einzelhandel",
    "Government & Public Sector": "Regierung & öffentlicher Sektor",
    "NGO / Non-Profit": "NGO / Gemeinnützig",
    "Cairo & Greater Cairo": "Kairo & Großraum Kairo",
    "Alexandria": "Alexandria",
    "Upper Egypt": "Oberägypten",
    "Red Sea & Sinai": "Rotes Meer & Sinai",
    "Germany - Berlin": "Deutschland – Berlin",
    "Germany - Munich": "Deutschland – München",
    "Germany - Other": "Deutschland – Sonstige",
    "Austria": "Österreich",
    "Switzerland": "Schweiz",
    "UAE": "VAE",
    "Saudi Arabia": "Saudi-Arabien",
    "UK": "Großbritannien",
    "France": "Frankreich",
    "Other Europe": "Sonstiges Europa",
    "Other MENA": "Sonstige MENA",
    "Egypt": "Ägypten",
    "Germany": "Deutschland",
    "United Arab Emirates": "Vereinigte Arabische Emirate",
    "United Kingdom": "Vereinigtes Königreich",
    "United States": "Vereinigte Staaten",
    "Netherlands": "Niederlande",
    "Canada": "Kanada",
    "Australia": "Australien",
    "Strategy": "Strategie",
    "Investment": "Investment",
    "Product Management": "Produktmanagement",
    "Mobility": "Mobilität",
    "Sustainability": "Nachhaltigkeit",
    "Corporate Law": "Gesellschaftsrecht",
    "International Trade": "Internationaler Handel",
    "Development": "Entwicklung",
    "Policy": "Politik",
    "Operations": "Betrieb",
    "Sales": "Vertrieb",
    "Data Science": "Data Science",
    "Product": "Produkt",
    "Customer Success": "Kundenerfolg",
    "Data & Analytics": "Daten & Analyse",
    "Research": "Forschung",
    "General Management": "Geschäftsführung",
    "HR": "Personal",
    "Leadership": "Führung",
    "Entrepreneurship": "Unternehmertum",
    "Data Analysis": "Datenanalyse",
    "Project Management": "Projektmanagement",
    "Business Development": "Geschäftsentwicklung",
    "Supply Chain": "Lieferkette",
    "Logistics": "Logistik",
    "Media": "Medien"
  };

  // Templated / concatenated strings: [regex, replacement]
  var DEO_DE_PATTERNS = [
    [/^(\d+)m ago$/, "vor $1 Min."],
    [/^(\d+)h ago$/, "vor $1 Std."],
    [/^(\d+)d ago$/, "vor $1 T."],
    [/^(\d+) pending$/, "$1 ausstehend"],
    [/^(\d+)pts$/, "$1 Pkt."],
    [/^Record Donation — (.*)$/, "Spende erfassen – $1"],
    [/^Delete "(.*)"\? This cannot be undone\.$/, "„$1“ löschen? Dies kann nicht rückgängig gemacht werden."],
    [/^Send to (\d+) Members? →$/, "An $1 Mitglied(er) senden →"],
    [/^ and (\d+) more$/, " und $1 weitere"],
    [/^Deadline: (.*)$/, "Bewerbungsfrist: $1"],
    [/^ · by (.*)$/, " · von $1"],
    [/^ at (.*)$/, " bei $1"],
    [/^(.*): (\d+) posts, (\d+) msgs$/, "$1: $2 Beiträge, $3 Nachr."],
    [/^(.*): (\d+) members$/, "$1: $2 Mitglieder"],
    [/^(-?\d+)d left$/, "$1 T. übrig"],
    [/^(.*) · (-?\d+)d left$/, "$1 · $2 T. übrig"],
    [/^(.*) · Expired$/, "$1 · Abgelaufen"],
    [/^⏱ (-?\d+) days left \((.*)\)$/, "⏱ $1 Tage übrig ($2)"],
    [/^⏱ Expired$/, "⏱ Abgelaufen"],
    [/^(\d+)% of prev$/, "$1 % vom Vorherigen"],
    [/^(\d+) perks? available$/, "$1 Vorteil(e) verfügbar"],
    [/^No (.+) deals yet\.$/, (_m, a) => "Noch keine Deals vom Typ „" + deoTr(a) + "“."],
    [/^No (.+) yet$/, "Noch keine Einträge in dieser Kategorie"]
  ];
  // Only these fragment keys may match as a prefix/suffix of a longer string
  // (e.g. "Error saving: " + e.message, "Class of " + year).
  var __deoIsPrefixKey = (k) => k.length >= 5 && (/: $/.test(k) || /\($/.test(k) || ["Class of ", "Expires ", "Goal: EGP ", "% of EGP "].includes(k));
  var __deoIsSuffixKey = (k) => k.length >= 5 && /^ \S+ \S/.test(k);

  var __deoLang = "en";
  var __deoPrefixKeys = null, __deoSuffixKeys = null;
  var __deoBuildFragments = () => {
    var keys = Object.keys(DEO_DE);
    __deoPrefixKeys = keys.filter(__deoIsPrefixKey).sort((a, b) => b.length - a.length);
    __deoSuffixKeys = keys.filter(__deoIsSuffixKey).sort((a, b) => b.length - a.length);
  };
  var deoTr = (s) => {
    if (__deoLang !== "de" || typeof s !== "string" || !s) return s;
    var hit = DEO_DE[s];
    if (hit !== void 0) return hit;
    var m = /^(\s*)([\s\S]*?)(\s*)$/.exec(s);
    if (m && m[2] && m[2] !== s && DEO_DE[m[2]] !== void 0) return m[1] + DEO_DE[m[2]] + m[3];
    for (var i = 0; i < DEO_DE_PATTERNS.length; i++) {
      var p = DEO_DE_PATTERNS[i];
      if (p[0].test(s)) return s.replace(p[0], p[1]);
    }
    if (!__deoPrefixKeys) __deoBuildFragments();
    for (var j = 0; j < __deoPrefixKeys.length; j++) {
      var k = __deoPrefixKeys[j];
      if (s.length > k.length && s.startsWith(k)) return DEO_DE[k] + s.slice(k.length);
    }
    for (var n = 0; n < __deoSuffixKeys.length; n++) {
      var k2 = __deoSuffixKeys[n];
      if (s.length > k2.length && s.endsWith(k2)) return s.slice(0, s.length - k2.length) + DEO_DE[k2];
    }
    return s;
  };
  var __deoSetLang = (l) => {
    __deoLang = l === "de" ? "de" : "en";
    try { document.documentElement.lang = __deoLang; } catch (e) {}
  };
  // Hook React.createElement for host elements only (div, span, option, …).
  (function () {
    var origCE = React.createElement;
    var TR_PROPS = ["placeholder", "title", "alt", "aria-label"];
    var trChild = (c) => typeof c === "string" ? deoTr(c) : (Array.isArray(c) && c.some((x) => typeof x === "string") ? c.map(trChild) : c);
    React.createElement = function (type, props) {
      if (__deoLang !== "de" || typeof type !== "string") return origCE.apply(React, arguments);
      var args = Array.prototype.slice.call(arguments);
      if (props) {
        var np = null;
        for (var i = 0; i < TR_PROPS.length; i++) {
          var v = props[TR_PROPS[i]];
          if (typeof v === "string") { var t = deoTr(v); if (t !== v) { np = np || Object.assign({}, props); np[TR_PROPS[i]] = t; } }
        }
        if (np) args[1] = np;
      }
      // <option> without explicit value: keep the English text as its value
      if (type === "option" && typeof args[2] === "string" && (!props || props.value === void 0)) {
        args[1] = Object.assign({}, args[1] || {}, { value: args[2] });
      }
      for (var c = 2; c < args.length; c++) args[c] = trChild(args[c]);
      return origCE.apply(React, args);
    };
    // Browser dialogs raised from the portals
    ["alert", "confirm", "prompt"].forEach((fn) => {
      var orig = window[fn];
      if (typeof orig !== "function") return;
      window[fn] = function (msg) {
        var rest = Array.prototype.slice.call(arguments, 1);
        return orig.apply(window, [deoTr(msg)].concat(rest));
      };
    });
    // Date display: English locales → German while the portal is in DE
    ["toLocaleDateString", "toLocaleTimeString"].forEach((fn) => {
      var orig = Date.prototype[fn];
      Date.prototype[fn] = function (loc, opts) {
        if (__deoLang === "de" && (loc === void 0 || (Array.isArray(loc) && loc.length === 0) || (typeof loc === "string" && /^en/.test(loc)))) loc = "de-DE";
        return orig.call(this, loc, opts);
      };
    });
  })();

  // tmp/v2.jsx
  var INDUSTRY_OPTIONS = ["Technology", "Venture Capital", "Finance", "Automotive", "Engineering", "Legal", "Consulting", "International Development", "CleanTech", "Real Estate", "Healthcare", "Education", "Media & Communications", "Hospitality & Tourism", "Energy", "Manufacturing", "Retail", "Government & Public Sector", "NGO / Non-Profit", "Other"];
  var REGION_OPTIONS = ["Cairo & Greater Cairo", "Alexandria", "Upper Egypt", "Red Sea & Sinai", "Germany - Berlin", "Germany - Munich", "Germany - Other", "Austria", "Switzerland", "UAE", "Saudi Arabia", "UK", "USA", "France", "Other Europe", "Other MENA", "Other"];
  var COUNTRY_OPTIONS = ["Egypt", "Germany", "Austria", "Switzerland", "United Arab Emirates", "Saudi Arabia", "United Kingdom", "United States", "France", "Netherlands", "Canada", "Australia", "Other"];
  var ALL_COUNTRY_OPTIONS = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","São Tomé and Príncipe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe","Other"];
  var GENDER_OPTIONS = ["male", "female"];
  var EDUCATION_LEVEL_OPTIONS = ["bachelor", "master", "phd", "other", "na"];
  var EDUCATION_LEVEL_LABELS = {
    bachelor: "Bachelor / Undergraduate",
    master: "Master's Degree",
    phd: "PhD / Doctorate",
    other: "Other University Degree",
    na: "N/A — Did not attend university"
  };
  var EXPERTISE_OPTIONS = ["Strategy", "Startups", "Investment", "Fintech", "AI", "Cloud", "Product Management", "Mobility", "Sustainability", "Corporate Law", "M&A", "International Trade", "Private Equity", "Real Estate", "Development", "Education", "Policy", "Fundraising", "Hardware", "Marketing", "Operations", "Sales", "Data Science", "Design"];
  var GOLD = "#f7911d";
  var GOLD_TEXT = "#a85200"; // brand orange darkened for text on light surfaces (5.4:1 on white)
  var DARK = "#1b1a19";
  var CREAM = "#f6f5f3";
  var BORDER = "#e7e4e0";
  var DEO_LEADERS_LOGO = "brand/inline/c5bcd1dbf2ca.png";
  var DEO_LEADERS_LOGO_T = "brand/inline/cb6e65fc8d4a.png";
  var DEO_LEADERS_LOGO_HB = "brand/inline/c5bcd1dbf2ca.png";
  var DEO_LEADERS_LOGO_VW = "brand/inline/cb6e65fc8d4a.png";
  var DEO_SCHOOL_LOGO = "brand/inline/b681ed53a5cc.png";
  // Backend API address: set in config.js (window.DEO_API_URL). Falls back to the local dev server.
  var API_URL = (window.DEO_API_URL || "http://localhost:8000/api").replace(/\/$/, "");
  // ── Careers / Jobs constants ──────────────────────────────────────────────
  var WORK_MODE_OPTIONS = ["on-site", "hybrid", "remote"];
  var WORK_MODE_LABELS = { "on-site": "On-site", "hybrid": "Hybrid", "remote": "Remote" };
  var EMPLOYMENT_TYPE_OPTIONS = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];
  var SENIORITY_OPTIONS = ["Intern", "Junior", "Mid-level", "Senior", "Lead", "Manager", "Director", "VP", "C-level"];
  var JOB_FUNCTION_OPTIONS = ["Engineering", "Product", "Design", "Marketing", "Sales", "Operations", "Finance", "Legal", "HR", "Customer Success", "Data & Analytics", "Research", "Consulting", "General Management", "Other"];
  var SKILLS_OPTIONS = ["Strategy", "Leadership", "Finance", "Investment", "Real Estate", "Entrepreneurship", "Marketing", "Sales", "Operations", "Data Analysis", "Python", "JavaScript", "React", "SQL", "Excel", "Project Management", "Business Development", "Fundraising", "M&A", "Private Equity", "Venture Capital", "Supply Chain", "Logistics", "Healthcare", "Education", "Technology", "Media", "Consulting", "Legal", "HR", "Product Management", "UX Design", "Engineering", "Research", "E-commerce", "AI/ML", "Blockchain", "SaaS"];
  var WORK_PREF_OPTIONS = ["open", "on-site", "hybrid", "remote"];
  var WORK_PREF_LABELS = { "open": "Open to All", "on-site": "On-site Only", "hybrid": "Hybrid", "remote": "Remote Only" };

  var rowToMember = (row, donations = []) => ({
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone || "",
    linkedin: row.linkedin || "",
    website: row.website || "",
    graduationYear: row.graduation_year,
    gender: row.gender || "",
    dateOfBirth: row.date_of_birth || "",
    country: row.country || "",
    regions: row.regions || [],
    companies: row.companies || [],
    role: row.role || "",
    roles: row.roles || [],
    primaryRole: row.primary_role || row.role || "",
    industries: row.industries || [],
    expertise: row.expertise || [],
    status: row.status,
    donationTotal: Number(row.donation_total) || 0,
    donationHistory: donations.map((d) => ({ year: d.year, amount: Number(d.amount), project: d.project })),
    eventsAttended: row.events_attended || [],
    joinDate: row.join_date || "",
    bio: row.bio || "",
    location: row.location || "",
    photo: row.photo_url || null,
    engagementScore: row.engagement_score || 0,
    willingToMentor: row.willing_to_mentor || false,
    openToFundraising: row.open_to_fundraising || false,
    willingToDonate: row.willing_to_donate || row.open_to_fundraising || false,
    openToHiring: row.open_to_hiring || false,
    willingToInvest: row.willing_to_invest || false,
    investmentBudget: row.investment_budget || "",
    willingToPayMembership: row.willing_to_pay_membership || false,
    membershipFeeAmount: row.membership_fee_amount || "",
    phoneVisible: row.phone_visible !== false,
    emailVisible: row.email_visible !== false,
    motivation: row.motivation || "",
    notes: row.notes || "",
    deactivated: row.deactivated || false,
    userRole: row.user_role || "member",
    highestEducationLevel: row.highest_education_level || "na",
    universityName: row.university_name || "",
    fieldOfStudy: row.field_of_study || "",
    studyCountry: row.study_country || "",
    educationEntries: (() => { const e = row.education_entries; const arr = Array.isArray(e) ? e : (e ? [] : []); if (arr.length > 0) return arr; if (row.university_name) return [{ level: row.highest_education_level || "", university: row.university_name, field: row.field_of_study || "", country: row.study_country || "" }]; return []; })(),
    lastLoginAt: row.last_login_at || null,
    userId: row.user_id || null
  });
  var memberToRow = (m) => ({
    first_name: m.firstName,
    last_name: m.lastName,
    email: m.email,
    phone: m.phone || null,
    linkedin: m.linkedin || null,
    website: m.website || null,
    graduation_year: m.graduationYear,
    gender: m.gender || null,
    date_of_birth: m.dateOfBirth || null,
    country: m.country || null,
    regions: m.regions || [],
    companies: m.companies || [],
    role: m.role || null,
    roles: m.roles || [],
    primary_role: m.primaryRole || m.role || null,
    industries: m.industries || [],
    expertise: m.expertise || [],
    status: m.status,
    donation_total: m.donationTotal || 0,
    events_attended: m.eventsAttended || [],
    join_date: m.joinDate || null,
    bio: m.bio || null,
    location: m.location || null,
    photo_url: m.photo || null,
    engagement_score: m.engagementScore || 0,
    willing_to_mentor: m.willingToMentor || false,
    open_to_fundraising: m.openToFundraising || false,
    willing_to_donate: m.willingToDonate || false,
    open_to_hiring: m.openToHiring || false,
    willing_to_invest: m.willingToInvest || false,
    investment_budget: m.investmentBudget || null,
    willing_to_pay_membership: m.willingToPayMembership || false,
    membership_fee_amount: m.membershipFeeAmount || null,
    phone_visible: m.phoneVisible !== false,
    email_visible: m.emailVisible !== false,
    motivation: m.motivation || null,
    notes: m.notes || null,
    deactivated: m.deactivated || false,
    highest_education_level: m.highestEducationLevel || "na",
    education_entries: m.educationEntries || [],
    university_name: (m.educationEntries && m.educationEntries[0]) ? m.educationEntries[0].university || null : m.universityName || null,
    field_of_study: (m.educationEntries && m.educationEntries[0]) ? m.educationEntries[0].field || null : m.fieldOfStudy || null,
    study_country: (m.educationEntries && m.educationEntries[0]) ? m.educationEntries[0].country || null : m.studyCountry || null
  });
  var rowToApplication = (row) => ({
    id: row.id,
    firstName: row.first_name,
    lastName: row.last_name,
    email: row.email,
    phone: row.phone || "",
    linkedin: row.linkedin || "",
    website: row.website || "",
    graduationYear: row.graduation_year,
    gender: row.gender || "",
    dateOfBirth: row.date_of_birth || "",
    country: row.country || "",
    regions: row.regions || [],
    companies: row.companies || [],
    role: row.role || "",
    roles: row.roles || [],
    primaryRole: row.primary_role || row.role || "",
    industries: row.industries || [],
    expertise: row.expertise || [],
    bio: row.bio || "",
    motivation: row.motivation || "",
    willingToMentor: row.willing_to_mentor || false,
    openToFundraising: row.open_to_fundraising || false,
    willingToDonate: row.willing_to_donate || row.open_to_fundraising || false,
    openToHiring: row.open_to_hiring || false,
    willingToInvest: row.willing_to_invest || false,
    investmentBudget: row.investment_budget || "",
    willingToPayMembership: row.willing_to_pay_membership || false,
    membershipFeeAmount: row.membership_fee_amount || "",
    phoneVisible: row.phone_visible !== false,
    emailVisible: row.email_visible !== false,
    photo: row.photo_url || null,
    idDocumentUrl: row.id_document_url || null,
    idDocument: row.id_document_url || null,
    // alias used by MemberForm
    status: row.status,
    appliedDate: row.applied_date || "",
    highestEducationLevel: row.highest_education_level || "",
    universityName: row.university_name || "",
    fieldOfStudy: row.field_of_study || "",
    studyCountry: row.study_country || "",
    educationEntries: (() => { const e = row.education_entries; const arr = Array.isArray(e) ? e : []; if (arr.length > 0) return arr; if (row.university_name) return [{ level: row.highest_education_level || "", university: row.university_name, field: row.field_of_study || "", country: row.study_country || "" }]; return []; })()
  });
  // ── Jobs / Careers mappers ────────────────────────────────────────────────────
  var rowToJob = (row) => ({
    id: row.id,
    title: row.title || "",
    company: row.company || "",
    contactName: row.contact_name || "",
    location: row.location || "",
    locationCountry: row.location_country || "",
    workMode: row.work_mode || "on-site",
    employmentType: row.employment_type || "Full-time",
    seniorityLevel: row.seniority_level || "",
    department: row.department || "",
    industry: row.industry || "",
    summary: row.summary || "",
    description: row.description || "",
    responsibilities: row.responsibilities || "",
    requirements: row.requirements || "",
    preferredExperience: row.preferred_experience || "",
    skills: Array.isArray(row.skills) ? row.skills : (row.skills ? [] : []),
    salaryRange: row.salary_range || "",
    applicationDeadline: row.application_deadline || "",
    applicationEmail: row.application_email || "",
    status: row.status || "open",
    createdBy: row.created_by || "",
    createdAt: row.created_at || ""
  });
  var jobToRow = (j) => ({
    title: j.title || null,
    company: j.company || null,
    contact_name: j.contactName || null,
    location: j.location || null,
    location_country: j.locationCountry || null,
    work_mode: j.workMode || "on-site",
    employment_type: j.employmentType || "Full-time",
    seniority_level: j.seniorityLevel || null,
    department: j.department || null,
    industry: j.industry || null,
    summary: j.summary || null,
    description: j.description || null,
    responsibilities: j.responsibilities || null,
    requirements: j.requirements || null,
    preferred_experience: j.preferredExperience || null,
    skills: j.skills || [],
    salary_range: j.salaryRange || null,
    application_deadline: j.applicationDeadline || null,
    application_email: j.applicationEmail || null,
    status: j.status || "open"
  });
  var rowToCandidateProfile = (row) => ({
    id: row.id,
    memberId: row.member_id,
    currentTitle: row.current_title || "",
    desiredTitle: row.desired_title || "",
    location: row.location || "",
    locationCountry: row.location_country || "",
    workPreference: row.work_preference || "open",
    yearsExperience: row.years_experience || "",
    industries: Array.isArray(row.industries) ? row.industries : [],
    functions: Array.isArray(row.functions) ? row.functions : [],
    skills: Array.isArray(row.skills) ? row.skills : [],
    summary: row.summary || "",
    cvData: row.cv_data || null,
    cvName: row.cv_name || "",
    openToWork: row.open_to_work !== false,
    createdAt: row.created_at || "",
    updatedAt: row.updated_at || ""
  });
  var candidateProfileToRow = (p) => ({
    current_title: p.currentTitle || null,
    desired_title: p.desiredTitle || null,
    location: p.location || null,
    location_country: p.locationCountry || null,
    work_preference: p.workPreference || "open",
    years_experience: p.yearsExperience ? parseInt(p.yearsExperience) : null,
    industries: p.industries || [],
    functions: p.functions || [],
    skills: p.skills || [],
    summary: p.summary || null,
    cv_data: p.cvData || null,
    cv_name: p.cvName || null,
    open_to_work: p.openToWork !== false,
    updated_at: new Date().toISOString()
  });

  // ── API client (DEO Leaders Laravel backend) ─────────────────────────────────
  // The backend address comes from config.js (window.DEO_API_URL); see index.html.
  // Sign-in tokens are kept in localStorage so a page reload stays signed in.
  var _TOKEN_KEY = "deo_auth_token";
  var _authToken = (function () { try { return localStorage.getItem(_TOKEN_KEY); } catch (e) { return null; } })();
  var _loginInProgress = false;
  var _privateDataLoaded = false; // prevents double-load race between authChecked effect and handleLogin
  var _authListeners = [];
  var _pendingReset = null; // { token, email } from a password-reset email link

  var _emitAuth = (event, user) => _authListeners.forEach((fn) => { try { fn(event, user); } catch (e) {} });
  var _setToken = (token) => {
    _authToken = token || null;
    try { token ? localStorage.setItem(_TOKEN_KEY, token) : localStorage.removeItem(_TOKEN_KEY); } catch (e) {}
  };

  // One place for every request: adds the token, parses JSON, turns errors into Error(message).
  var apiFetch = async (path, { method = "GET", body, headers = {} } = {}) => {
    const h = { "Accept": "application/json", ...headers };
    if (_authToken) h["Authorization"] = `Bearer ${_authToken}`;
    if (body !== undefined) h["Content-Type"] = "application/json";
    const r = await fetch(API_URL + path, { method, headers: h, body: body !== undefined ? JSON.stringify(body) : undefined });
    if (r.status === 204) return null;
    const text = await r.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch (e) { data = text; }
    if (!r.ok) {
      // Token expired or revoked: sign out locally.
      if (r.status === 401 && _authToken && !path.startsWith("/auth/")) { _setToken(null); _emitAuth("SIGNED_OUT", null); }
      const err = new Error((data && data.message) || (typeof data === "string" && data) || `Request failed (${r.status})`);
      err.status = r.status;
      throw err;
    }
    return data;
  };

  // Sign-in, sign-up and password links. Methods return { data, error } so screens can show error.message.
  var deoAuth = {
    async signIn(email, password) {
      try {
        const res = await apiFetch("/auth/login", { method: "POST", body: { email, password } });
        _setToken(res.token);
        _emitAuth("SESSION", res.user);
        return { data: { user: res.user }, error: null };
      } catch (error) { return { data: null, error }; }
    },
    // Creates the account and emails a confirmation link (only approved members can sign up).
    async signUp(email, password) {
      try {
        const res = await apiFetch("/auth/register", { method: "POST", body: { email, password } });
        return { data: { needsVerification: !res || res.needs_verification !== false }, error: null };
      } catch (error) { return { data: null, error }; }
    },
    async sendPasswordLink(email) {
      try { await apiFetch("/auth/forgot", { method: "POST", body: { email } }); return { error: null }; }
      catch (error) { return { error }; }
    },
    async resetPassword(password) {
      if (!_pendingReset) return { error: new Error("This password link is invalid or has expired. Please request a new one.") };
      try {
        await apiFetch("/auth/reset", { method: "POST", body: { ..._pendingReset, password } });
        _pendingReset = null;
        return { error: null };
      } catch (error) { return { error }; }
    },
    async signOut() {
      if (_authToken) { try { await apiFetch("/auth/logout", { method: "POST" }); } catch (e) {} }
      _setToken(null);
      _emitAuth("SIGNED_OUT", null);
    },
    onChange(fn) {
      _authListeners.push(fn);
      return () => { _authListeners = _authListeners.filter((f) => f !== fn); };
    },
    // On page load: handle links from emails (?verify=... / ?reset_token=...), then restore the saved session.
    async init() {
      const params = new URLSearchParams(window.location.search);
      const verifyToken = params.get("verify");
      const resetToken = params.get("reset_token");
      if (verifyToken || resetToken) {
        window.history.replaceState({}, "", window.location.pathname + window.location.hash);
      }
      if (resetToken) {
        _pendingReset = { token: resetToken, email: params.get("email") || "" };
        setTimeout(() => _emitAuth("PASSWORD_RECOVERY", null), 0);
      }
      if (verifyToken) {
        try {
          const res = await apiFetch("/auth/verify", { method: "POST", body: { token: verifyToken } });
          if (res && res.pending_approval) {
            alert("Thank you — your email is confirmed. You'll be able to sign in with your password once your application has been approved.");
            return null;
          }
          _setToken(res.token);
          setTimeout(() => _emitAuth("SIGNED_IN", res.user), 0);
          return res.user;
        } catch (e) {
          alert(e.message);
        }
      }
      if (!_authToken) return null;
      try {
        const res = await apiFetch("/auth/me");
        return res.user;
      } catch (e) {
        if (e.status === 401) _setToken(null);
        return null;
      }
    }
  };

  // Table access: db.select("members", "?order=created_at.asc&limit=500"), db.insert, db.update, db.delete, db.rpc.
  var db = {
    select(table, query = "") {
      return apiFetch(`/db/${table}${query}`);
    },
    async insert(table, data, { minimal = false } = {}) {
      const res = await apiFetch(`/db/${table}`, { method: "POST", body: data, headers: minimal ? { "Prefer": "return=minimal" } : {} });
      return minimal ? [] : res;
    },
    update(table, id, data) {
      return apiFetch(`/db/${table}/${id}`, { method: "PATCH", body: data });
    },
    rpc(fn, params = {}) {
      return apiFetch(`/rpc/${fn}`, { method: "POST", body: params });
    },
    async delete(table, id) {
      await apiFetch(`/db/${table}/${id}`, { method: "DELETE" });
      return true;
    }
  };
  var statusColor = (s) => ({ active: "#22c55e", pending: "#f59e0b", applicant: "#3b82f6", inactive: "#6b7280", deactivated: "#ef4444" })[s] || "#6b7280";
  var fmt = (n) => (n || 0).toLocaleString("de-DE");
  var initials = (m) => `${(m.firstName || "?")[0]}${(m.lastName || "?")[0]}`;
  var avatarBg = (id) => { var n = typeof id === "string" ? id.split("").reduce(function(a,c){return a+c.charCodeAt(0);},0) : (id||0); return ["#3d3839","#9a4a00","#1557a0","#176747","#6b4f8a"][n%5]; };
  var _MALE_AVATAR = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="36" r="20" fill="#ffffff"/><path d="M10 105 C12 62 28 56 50 56 C72 56 88 62 90 105Z" fill="#ffffff"/></svg>');
  var _FEMALE_AVATAR = "data:image/svg+xml," + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><ellipse cx="50" cy="22" rx="14" ry="9" fill="#ffffff"/><circle cx="50" cy="36" r="18" fill="#ffffff"/><path d="M6 105 C10 62 26 56 50 56 C74 56 90 62 94 105Z" fill="#ffffff"/></svg>');
  var Avatar = ({ member, size = 40 }) => {
    const gender = (member.gender || "").toLowerCase();
    const hasSilhouette = !member.photo && (gender === "male" || gender === "female");
    const bg = member.photo ? "transparent" : hasSilhouette ? (gender === "male" ? "#1e3a5f" : "#5f1a3a") : avatarBg(member.id || 0);
    const silhouette = hasSilhouette ? (gender === "male" ? _MALE_AVATAR : _FEMALE_AVATAR) : null;
    return /* @__PURE__ */ React.createElement("div", { style: { width: size, height: size, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: size * 0.36, flexShrink: 0, overflow: "hidden", fontFamily: "var(--font-sans)" } },
      member.photo
        ? /* @__PURE__ */ React.createElement("img", { src: member.photo, style: { width: "100%", height: "100%", objectFit: "cover" }, alt: "" })
        : silhouette
          ? /* @__PURE__ */ React.createElement("img", { src: silhouette, style: { width: "85%", height: "85%", marginTop: "15%", display: "block" }, alt: gender })
          : initials(member)
    );
  };
  var Badge = ({ label, color, bg }) => React.createElement("span", { style: { display: "inline-flex", alignItems: "center", background: bg || (color || "#6b7280") + "18", color: color || "#6b7280", border: `1px solid ${color || "#6b7280"}33`, borderRadius: 6, padding: "2px 8px", fontSize: 11, fontWeight: 600, letterSpacing: "0.3px", lineHeight: 1.5, textTransform: "uppercase", whiteSpace: "nowrap" } }, label);
  var Tag = ({ label }) => React.createElement("span", { className: "ui-tag" }, label);
  var Input = ({ label, value, onChange, type = "text", placeholder = "", required = false, style = {} }) => React.createElement("label", { className: "ui-field", style }, label && React.createElement("span", { className: "ui-label" }, label, required && React.createElement("span", { className: "ui-req", "aria-hidden": "true" }, " *")), React.createElement("input", { type, value: value || "", onChange: (e) => onChange(e.target.value), placeholder, "aria-required": required || undefined, className: "ui-input" }));
  var Select = ({ label, value, onChange, options, required = false, style = {} }) => React.createElement("label", { className: "ui-field", style }, label && React.createElement("span", { className: "ui-label" }, label, required && React.createElement("span", { className: "ui-req", "aria-hidden": "true" }, " *")), React.createElement("select", { value: value || "", onChange: (e) => onChange(e.target.value), "aria-required": required || undefined, className: "ui-input" }, options.map((o) => React.createElement("option", { key: o, value: o }, o))));
  var Textarea = ({ label, value, onChange, rows = 3, placeholder = "", required = false }) => React.createElement("label", { className: "ui-field" }, label && React.createElement("span", { className: "ui-label" }, label, required && React.createElement("span", { className: "ui-req", "aria-hidden": "true" }, " *")), React.createElement("textarea", { value: value || "", onChange: (e) => onChange(e.target.value), rows, placeholder, "aria-required": required || undefined, className: "ui-input" }));
  var Toggle = ({ label, value, onChange, desc = "" }) => React.createElement("div", { className: "ui-toggle-row" }, React.createElement("div", null, React.createElement("div", { className: "ui-toggle-label" }, label), desc && React.createElement("div", { className: "ui-hint" }, desc)), React.createElement("button", { type: "button", role: "switch", "aria-checked": !!value, "aria-label": typeof label === "string" ? label : undefined, onClick: () => onChange(!value), className: "ui-switch" + (value ? " is-on" : "") }, React.createElement("span", { className: "ui-switch-knob" })));
  var MultiSelect = ({ label, value = [], onChange, options, required = false, hint = "" }) => {
    const [input, setInput] = useState("");
    const toggle = (opt) => onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);
    const addValue = (val) => {
      const trimmed = val.trim();
      if (trimmed && !value.includes(trimmed)) {
        onChange([...value, trimmed]);
      }
      setInput("");
    };
    const addCustom = () => addValue(input);
    const handleChange = (e) => {
      const val = e.target.value;
      // Android soft keyboards fire Enter as a newline character in onChange
      if (val.includes("\n")) {
        addValue(val.replace(/\n/g, ""));
      } else {
        setInput(val);
      }
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, label && /* @__PURE__ */ React.createElement("label", { className: "ui-label" }, label, required && /* @__PURE__ */ React.createElement("span", { className: "ui-req" }, " *")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, padding: "8px", border: "1px solid #e5e7eb", borderRadius: 9, minHeight: 44, background: "#fff" } }, value.map((v) => /* @__PURE__ */ React.createElement("span", { key: v, style: { background: "#fdf0e1", color: "#9a4a00", borderRadius: 20, padding: "3px 10px", fontSize: 12, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 } }, v, " ", /* @__PURE__ */ React.createElement("span", { onClick: () => toggle(v), style: { cursor: "pointer", opacity: 0.6, fontWeight: 700 } }, "×"))), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: input,
        onChange: handleChange,
        onKeyDown: (e) => e.key === "Enter" && addCustom(),
        placeholder: "Type & Enter to add...",
        style: { border: "none", outline: "none", fontSize: 13, minWidth: 120, flex: 1, background: "transparent" }
      }
    )), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, options.filter((o) => !value.includes(o)).slice(0, 12).map((o) => /* @__PURE__ */ React.createElement("span", { key: o, onClick: () => toggle(o), style: { background: "#f6f5f3", border: "1px solid #e5e7eb", color: "#6b7280", borderRadius: 20, padding: "2px 10px", fontSize: 11, cursor: "pointer" } }, o))), hint && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 5, fontStyle: "italic" } }, hint));
  };
  var PhotoUpload = ({ value, onChange }) => {
    const ref = useRef();
    const handle = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => onChange(ev.target.result);
      reader.readAsDataURL(file);
    };
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, /* @__PURE__ */ React.createElement("label", { className: "ui-label" }, "Profile Photo"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 72, height: 72, borderRadius: "50%", background: value ? "transparent" : "#fdf0e1", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "2px dashed #cfcac4" } }, value ? /* @__PURE__ */ React.createElement("img", { src: value, style: { width: "100%", height: "100%", objectFit: "cover" }, alt: "" }) : /* @__PURE__ */ React.createElement("span", { style: { fontSize: 24 } }, "📷")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => ref.current.click(), style: { padding: "8px 16px", background: "#fdf0e1", border: "none", borderRadius: 8, fontSize: 13, color: "#9a4a00", cursor: "pointer", fontWeight: 500 } }, "Upload Photo"), value && /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => onChange(null), style: { marginLeft: 8, padding: "8px 12px", background: "transparent", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 13, color: "#9ca3af", cursor: "pointer" } }, "Remove"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 4 } }, "JPG, PNG. Max 2MB.")), /* @__PURE__ */ React.createElement("input", { ref, type: "file", accept: "image/*", onChange: handle, style: { display: "none" } })));
  };
  var ICON_PATHS = {
    dashboard: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
    feed: "M4 4h16v16H4zM8 8h8M8 12h8M8 16h5",
    deals: "M2 12l4-4 4 2 4-4 4 3 4-3M4 20h16M7 16v4M12 13v7M17 15v5",
    members: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
    applications: "M9 3h6v3H9zM15 4.5h3v16.5H6V4.5h3M9 11h6M9 15h4",
    careers: "M3 7h18v13H3zM8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18",
    analytics: "M3 3v18h18M7 15l4-4 3 3 6-7",
    donations: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z",
    events: "M3 5h18v16H3zM16 3v4M8 3v4M3 10h18",
    perks: "M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7z",
    blast: "M3 11v2a1 1 0 0 0 1 1h3l6 5V5L7 10H4a1 1 0 0 0-1 1zM17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12",
    permissions: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
    close: "M18 6L6 18M6 6l12 12"
  };
  var Icon = ({ name, size = 18, style }) => React.createElement("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false", style }, React.createElement("path", { d: ICON_PATHS[name] || "" }));
  var Btn = ({ children, onClick, variant = "primary", small = false, disabled = false, style = {}, type, title }) => React.createElement("button", { type, title, onClick, disabled, className: "ui-btn ui-btn--" + variant + (small ? " ui-btn--sm" : ""), style }, children);
  var __modalStack = [];
  var Modal = ({ children, onClose, title, maxWidth = 640 }) => {
    const dialogRef = useRef(null);
    const closeRef = useRef(onClose);
    closeRef.current = onClose;
    useEffect(() => {
      const token = {};
      __modalStack.push(token);
      const prevFocus = document.activeElement;
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      if (dialogRef.current) dialogRef.current.focus();
      const onKey = (e) => {
        if (e.key === "Escape" && __modalStack[__modalStack.length - 1] === token && closeRef.current) closeRef.current();
      };
      document.addEventListener("keydown", onKey);
      return () => {
        document.removeEventListener("keydown", onKey);
        const i = __modalStack.indexOf(token);
        if (i >= 0) __modalStack.splice(i, 1);
        if (__modalStack.length === 0) document.body.style.overflow = prevOverflow;
        if (prevFocus && prevFocus.focus && document.contains(prevFocus)) prevFocus.focus();
      };
    }, []);
    return React.createElement("div", { className: "ui-overlay", onMouseDown: (e) => { if (e.target === e.currentTarget && onClose) onClose(); } },
      React.createElement("div", { ref: dialogRef, role: "dialog", "aria-modal": "true", "aria-label": typeof title === "string" ? title : undefined, tabIndex: -1, className: "ui-modal", style: { maxWidth } },
        React.createElement("div", { className: "ui-modal-head" },
          React.createElement("h2", { className: "ui-modal-title" }, title),
          React.createElement("button", { type: "button", className: "ui-icon-btn", onClick: onClose, "aria-label": "Close" }, React.createElement(Icon, { name: "close", size: 18 }))),
        React.createElement("div", { className: "ui-modal-body" }, children)));
  };
  var StatCard = ({ label, value, accent }) => React.createElement("div", { className: "ui-stat" }, React.createElement("div", { className: "ui-stat-label" }, React.createElement("span", { className: "ui-stat-dot", style: accent ? { background: accent } : undefined }), label), React.createElement("div", { className: "ui-stat-value" }, value));
  var emptyMember = () => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    linkedin: "",
    website: "",
    graduationYear: "",
    gender: "",
    dateOfBirth: "",
    country: "",
    regions: [],
    companies: [],
    role: "",
    roles: [],
    primaryRole: "",
    industries: [],
    expertise: [],
    bio: "",
    photo: null,
    idDocument: null,
    willingToMentor: false,
    willingToDonate: false,
    openToHiring: false,
    willingToInvest: false,
    investmentBudget: "",
    willingToPayMembership: false,
    membershipFeeAmount: "",
    phoneVisible: true,
    emailVisible: true,
    motivation: "",
    highestEducationLevel: "",
    universityName: "",
    fieldOfStudy: "",
    studyCountry: "",
    educationEntries: []
  });
  var IDUpload = ({ value, onChange, readOnly = false, hint = "" }) => {
    const ref = React.useRef();
    const [name, setName] = React.useState(null);
    const handle = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      setName(file.name);
      const reader = new FileReader();
      reader.onload = (ev) => onChange(ev.target.result);
      reader.readAsDataURL(file);
    };
    if (value && value.startsWith("data:image")) {
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, "ID / Passport / Identification Document"), /* @__PURE__ */ React.createElement("div", { style: { borderRadius: 10, overflow: "hidden", border: `1px solid ${BORDER}`, background: "#f9f9f9" } }, /* @__PURE__ */ React.createElement("img", { src: value, alt: "ID Document", style: { maxWidth: "100%", maxHeight: 280, display: "block", objectFit: "contain", margin: "0 auto" } }), !readOnly && /* @__PURE__ */ React.createElement("div", { onClick: () => ref.current.click(), style: { padding: "8px 16px", fontSize: 12, color: GOLD, fontWeight: 600, cursor: "pointer", borderTop: `1px solid ${BORDER}`, textAlign: "center", background: "#fff" } }, "🔄 Replace document", /* @__PURE__ */ React.createElement("input", { ref, type: "file", accept: "image/*,.pdf", style: { display: "none" }, onChange: handle }))));
    }
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, "ID / Passport / Identification Document ", /* @__PURE__ */ React.createElement("span", { style: { color: "#ef4444" } }, "*")), /* @__PURE__ */ React.createElement("div", { onClick: () => !readOnly && ref.current.click(), style: { border: `2px dashed ${BORDER}`, borderRadius: 10, padding: "18px 20px", cursor: readOnly ? "default" : "pointer", display: "flex", alignItems: "center", gap: 12, background: value ? "#f0fdf4" : "#fafafa", transition: "border-color 0.2s" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 22 } }, value ? "✅" : "📄"), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: value ? "#16a34a" : DARK } }, value ? name || "Document uploaded" : "Upload ID, Passport or Government ID"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 2 } }, "JPG, PNG or PDF — max 5MB")), /* @__PURE__ */ React.createElement("input", { ref, type: "file", accept: "image/*,.pdf", style: { display: "none" }, onChange: handle })), hint && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 8, fontStyle: "italic" } }, hint));
  };
  var SearchableCountrySelect = ({ value, onChange, label = "", required = false, placeholder = "Search country…" }) => {
    const [query, setQuery] = React.useState(value || "");
    const [open, setOpen] = React.useState(false);
    const containerRef = React.useRef();
    React.useEffect(() => { setQuery(value || ""); }, [value]);
    const filtered = React.useMemo(() => {
      const q = (query || "").toLowerCase().trim();
      if (!q) return ALL_COUNTRY_OPTIONS.slice(0, 12);
      const starts = ALL_COUNTRY_OPTIONS.filter((c) => c.toLowerCase().startsWith(q));
      const contains = ALL_COUNTRY_OPTIONS.filter((c) => !c.toLowerCase().startsWith(q) && c.toLowerCase().includes(q));
      return [...starts, ...contains].slice(0, 20);
    }, [query]);
    React.useEffect(() => {
      const h = (e) => { if (containerRef.current && !containerRef.current.contains(e.target)) setOpen(false); };
      document.addEventListener("mousedown", h);
      return () => document.removeEventListener("mousedown", h);
    }, []);
    const select = (country) => { onChange(country); setQuery(country); setOpen(false); };
    return /* @__PURE__ */ React.createElement("div", { ref: containerRef, style: { position: "relative" } },
      label && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, label, required && /* @__PURE__ */ React.createElement("span", { className: "ui-req" }, " *")),
      /* @__PURE__ */ React.createElement("input", { value: query, onChange: (e) => { setQuery(e.target.value); setOpen(true); if (!ALL_COUNTRY_OPTIONS.includes(e.target.value)) onChange(""); }, onFocus: () => setOpen(true), placeholder, style: { width: "100%", padding: "9px 12px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none", boxSizing: "border-box" } }),
      open && filtered.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: "calc(100% + 2px)", left: 0, right: 0, background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 8, maxHeight: 200, overflowY: "auto", zIndex: 999, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" } },
        filtered.map((c) => /* @__PURE__ */ React.createElement("div", { key: c, onMouseDown: (e) => { e.preventDefault(); select(c); }, style: { padding: "8px 12px", fontSize: 13, cursor: "pointer", color: DARK, borderBottom: `1px solid #f6f5f3` }, onMouseEnter: (e) => e.currentTarget.style.background = "#fafaf8", onMouseLeave: (e) => e.currentTarget.style.background = "#fff" }, c))
      )
    );
  };
  var EducationEntriesInput = ({ entries, onChange }) => {
    const [adding, setAdding] = React.useState(false);
    const emptyEntry = { level: "", university: "", field: "", country: "" };
    const [form, setForm] = React.useState(emptyEntry);
    const setF = (k) => (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const add = () => {
      if (!form.university.trim()) { alert("Please enter a university or institution name."); return; }
      onChange([...(entries || []), __spreadValues({}, form)]);
      setForm(emptyEntry);
      setAdding(false);
    };
    const remove = (i) => onChange((entries || []).filter((_, idx) => idx !== i));
    return /* @__PURE__ */ React.createElement("div", null,
      (entries || []).length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 } },
        (entries || []).map((e, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "#fafaf8", borderRadius: 10, border: `1px solid ${BORDER}` } },
          /* @__PURE__ */ React.createElement("div", { style: { background: `${GOLD}22`, color: "#9a4a00", fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 6, whiteSpace: "nowrap", flexShrink: 0 } }, EDUCATION_LEVEL_LABELS[e.level] || e.level || "—"),
          /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } },
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, e.university || "—"),
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 1 } }, [e.field, e.country].filter(Boolean).join(" · "))
          ),
          /* @__PURE__ */ React.createElement("span", { onClick: () => remove(i), style: { color: "#9ca3af", cursor: "pointer", fontSize: 20, lineHeight: 1, flexShrink: 0 } }, "×")
        ))
      ),
      !adding
        ? /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setAdding(true), style: { width: "100%", padding: "9px 14px", border: `1.5px dashed ${GOLD}66`, borderRadius: 8, background: "transparent", color: GOLD, fontSize: 13, fontWeight: 600, cursor: "pointer" } }, "+ Add University")
        : /* @__PURE__ */ React.createElement("div", { style: { background: "#fef9ec", borderRadius: 10, border: `1px solid ${GOLD}33`, padding: "16px" } },
            /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 } },
              /* @__PURE__ */ React.createElement("div", null,
                /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, "Education Level"),
                /* @__PURE__ */ React.createElement("select", { value: form.level, onChange: (e) => setF("level")(e.target.value), style: { width: "100%", padding: "9px 12px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontFamily: "inherit", background: "#fff", outline: "none" } },
                  /* @__PURE__ */ React.createElement("option", { value: "" }, "— Select —"),
                  EDUCATION_LEVEL_OPTIONS.map((v) => /* @__PURE__ */ React.createElement("option", { key: v, value: v }, EDUCATION_LEVEL_LABELS[v]))
                )
              ),
              /* @__PURE__ */ React.createElement(SearchableCountrySelect, { label: "Country of Study", value: form.country, onChange: setF("country") })
            ),
            /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 } },
              /* @__PURE__ */ React.createElement(Input, { label: "University / Institution", value: form.university, onChange: setF("university") }),
              /* @__PURE__ */ React.createElement(Input, { label: "Field of Study / Major", value: form.field, onChange: setF("field") })
            ),
            /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, justifyContent: "flex-end" } },
              /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: () => setAdding(false) }, "Cancel"),
              /* @__PURE__ */ React.createElement(Btn, { onClick: add }, "Add University")
            )
          )
    );
  };
  var RolesInput = ({ roles, primaryRole, onChange, hint = "" }) => {
    const [input, setInput] = React.useState("");
    const add = () => {
      const v = input.trim();
      if (!v || roles.includes(v)) return;
      onChange({ roles: [...roles, v], primaryRole: primaryRole || v });
      setInput("");
    };
    const remove = (r) => {
      const newRoles = roles.filter((x) => x !== r);
      onChange({ roles: newRoles, primaryRole: primaryRole === r ? newRoles[0] || "" : primaryRole });
    };
    const setPrimary = (r) => onChange({ roles, primaryRole: r });
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, "Roles / Titles ", /* @__PURE__ */ React.createElement("span", { style: { color: "#9ca3af", fontWeight: 400 } }, "(add all roles you hold)"), " ", /* @__PURE__ */ React.createElement("span", { style: { color: "#ef4444" } }, "*")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 10 } }, /* @__PURE__ */ React.createElement(
      "input",
      {
        value: input,
        onChange: (e) => setInput(e.target.value),
        onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), add()),
        placeholder: "e.g. CEO, Board Member, Investor…",
        style: { flex: 1, padding: "9px 12px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontFamily: "inherit", outline: "none" }
      }
    ), /* @__PURE__ */ React.createElement("button", { onClick: add, style: { padding: "9px 16px", background: GOLD, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 13 } }, "+ Add")), roles.length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 8 } }, roles.map((r) => /* @__PURE__ */ React.createElement("div", { key: r, onClick: () => setPrimary(r), style: { display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", borderRadius: 20, cursor: "pointer", fontSize: 12, fontWeight: 600, border: `1.5px solid ${r === primaryRole ? GOLD : BORDER}`, background: r === primaryRole ? "#fef9ec" : "#f9f9f9", color: r === primaryRole ? GOLD : DARK, transition: "all 0.15s" } }, r === primaryRole && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10 } }, "⭐"), r, /* @__PURE__ */ React.createElement("span", { onClick: (e) => {
      e.stopPropagation();
      remove(r);
    }, style: { marginLeft: 4, color: "#9ca3af", fontSize: 14, lineHeight: 1, cursor: "pointer" } }, "×")))), roles.length > 1 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 6 } }, "⭐ Click a role to set it as your primary role"), hint && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 6, fontStyle: "italic" } }, hint));
  };
  var FORM_TRANSLATIONS = {
    en: {
      langBtn: "🇩🇪 Deutsch",
      toggleHint: "Switch to German",
      sectionBasic: "Basic Information",
      sectionVisibility: "Contact Visibility",
      sectionDeo: "DEO & Professional",
      sectionAbout: "About You",
      sectionId: "Identification",
      sectionCommunity: "Community Preferences",
      sectionMembership: "Membership",
      firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone",
      linkedin: "LinkedIn URL", website: "Website", gender: "Gender", dob: "Date of Birth",
      phoneVisible: "Phone visible to members", phoneVisibleDesc: "Other members can see your phone number",
      emailVisible: "Email visible to members", emailVisibleDesc: "Other members can see your email address",
      gradYear: "Graduation Year", country: "Primary Country of Residence",
      rolesLabel: "Roles / Titles",
      companies: "Company (write all companies you worked at)", industries: "Linked Industries",
      regions: "Linked Regions (Where you operate / have connections)",
      expertise: "Areas of Expertise",
      multiHint: "If suggestions are not relevant, type your entry and press Enter to register it.",
      rolesHint: "If your role isn't listed, type it and press Enter. Click a role to set it as primary.",
      bio: "Personal Bio", bioPlaceholder: "Tell the DEO community about yourself...",
      motivation: "Why do you want to join DEO Leaders?", motivationPlaceholder: "Share your motivation...",
      idHint: "We need to verify your identity to ensure you're not an impersonator — any document that proves who you are works (ID card, passport, driver's licence, etc.).",
      sectionEducation: "University Education",
      educationLevel: "Highest Level of Education",
      educationLevelHint: "Select your highest completed university degree. If you did not attend university, select N/A.",
      universityName: "University / Institution",
      universityNameHint: "e.g. TU Munich, Cairo University, LSE",
      fieldOfStudy: "Field of Study / Major",
      studyCountry: "Country of Study",
      educationNaNote: "You can update your education details at any time from your profile.",
      mentorLabel: "Willing to Mentor", mentorDesc: "I'm open to mentoring other DEO alumni",
      hiringLabel: "Open to Hiring", hiringDesc: "I'm open to hiring from the DEO network",
      donateLabel: "Willing to Donate to DEO?", donateDesc: "I'm open to supporting DEO school and initiatives financially",
      investLabel: "Willing to Invest in DEO Companies?", investDesc: "I'm open to investing in companies founded by DEO alumni",
      investBudget: "Investment Budget Range",
      membershipQ: "Would you pay for a DEO Leaders membership?",
      membershipDesc: "Help us build a sustainable community",
      membershipFee: "How much would you pay annually?",
      yes: "نعم / Yes", no: "لا / No"
    },
    de: {
      langBtn: "🇬🇧 English",
      toggleHint: "Switch to English",
      sectionBasic: "Grundinformationen",
      sectionVisibility: "Kontaktsichtbarkeit",
      sectionDeo: "DEO & Berufliches",
      sectionAbout: "Über Sie",
      sectionId: "Identifikation",
      sectionCommunity: "Community-Präferenzen",
      sectionMembership: "Mitgliedschaft",
      firstName: "Vorname", lastName: "Nachname", email: "E-Mail", phone: "Telefon",
      linkedin: "LinkedIn-URL", website: "Webseite", gender: "Geschlecht", dob: "Geburtsdatum",
      phoneVisible: "Telefon für Mitglieder sichtbar", phoneVisibleDesc: "Andere Mitglieder können Ihre Telefonnummer sehen",
      emailVisible: "E-Mail für Mitglieder sichtbar", emailVisibleDesc: "Andere Mitglieder können Ihre E-Mail-Adresse sehen",
      gradYear: "Abschlussjahr", country: "Hauptwohnsitzland",
      rolesLabel: "Rollen / Titel",
      companies: "Unternehmen (alle Unternehmen angeben, bei denen Sie gearbeitet haben)", industries: "Verbundene Branchen",
      regions: "Verbundene Regionen (Wo Sie tätig sind / Verbindungen haben)",
      expertise: "Fachgebiete",
      multiHint: "Falls Vorschläge nicht relevant sind, tippen Sie Ihren Eintrag und drücken Sie Enter, um ihn zu registrieren.",
      rolesHint: "Falls Ihre Rolle nicht aufgeführt ist, tippen Sie sie und drücken Sie Enter. Klicken Sie auf eine Rolle, um sie als Hauptrolle festzulegen.",
      bio: "Persönliche Biografie", bioPlaceholder: "Erzählen Sie der DEO-Community etwas über sich...",
      motivation: "Warum möchten Sie DEO Leaders beitreten?", motivationPlaceholder: "Teilen Sie Ihre Motivation...",
      idHint: "Wir müssen Ihre Identität verifizieren, um sicherzustellen, dass Sie kein Imitator sind — jedes Dokument, das beweist, wer Sie sind, ist geeignet (Personalausweis, Reisepass, Führerschein usw.).",
      sectionEducation: "Universitätsausbildung",
      educationLevel: "Höchster Bildungsabschluss",
      educationLevelHint: "Wählen Sie Ihren höchsten abgeschlossenen Hochschulabschluss. Falls Sie keine Universität besucht haben, wählen Sie N/A.",
      universityName: "Universität / Institution",
      universityNameHint: "z.B. TU München, Kairo Universität, LSE",
      fieldOfStudy: "Studiengang / Hauptfach",
      studyCountry: "Studienland",
      educationNaNote: "Sie können Ihre Ausbildungsdaten jederzeit in Ihrem Profil aktualisieren.",
      mentorLabel: "Bereit zu Mentoring", mentorDesc: "Ich bin offen dafür, andere DEO-Alumni zu mentoren",
      hiringLabel: "Offen für Einstellungen", hiringDesc: "Ich bin offen dafür, aus dem DEO-Netzwerk einzustellen",
      donateLabel: "Bereit, an DEO zu spenden?", donateDesc: "Ich bin bereit, die DEO-Schule und Initiativen finanziell zu unterstützen",
      investLabel: "Bereit, in DEO-Unternehmen zu investieren?", investDesc: "Ich bin bereit, in Unternehmen von DEO-Alumni zu investieren",
      investBudget: "Investitionsbudget-Bereich",
      membershipQ: "Würden Sie für eine DEO Leaders-Mitgliedschaft bezahlen?",
      membershipDesc: "Helfen Sie uns, eine nachhaltige Community aufzubauen",
      membershipFee: "Wie viel würden Sie jährlich zahlen?",
      yes: "نعم / Yes", no: "لا / No"
    }
  };
  var MemberForm = ({ initial, onSubmit, submitLabel, isSignup = false }) => {
    const [form, setForm] = useState(initial || emptyMember());
    const [lang, setLang] = useState("en");
    const t = FORM_TRANSLATIONS[lang];
    const set = (k) => (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const years = Array.from({ length: 60 }, (_, i) => String(2024 - i));
    const SectionHead = ({ children }) => /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 14, paddingBottom: 8, borderBottom: `1px solid ${BORDER}` } }, children);
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: () => setLang(lang === "en" ? "de" : "en"), style: { padding: "7px 16px", background: "#fdf0e1", border: "1px solid #cfcac4", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "#9a4a00", cursor: "pointer" } }, t.langBtn)), /* @__PURE__ */ React.createElement(PhotoUpload, { value: form.photo, onChange: set("photo") }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionBasic), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement(Input, { label: t.firstName, value: form.firstName, onChange: set("firstName"), required: true }), /* @__PURE__ */ React.createElement(Input, { label: t.lastName, value: form.lastName, onChange: set("lastName"), required: true }), /* @__PURE__ */ React.createElement(Input, { label: t.email, type: "email", value: form.email, onChange: set("email"), required: true }), /* @__PURE__ */ React.createElement(Input, { label: t.phone, value: form.phone, onChange: set("phone") }), /* @__PURE__ */ React.createElement(Input, { label: t.linkedin, value: form.linkedin, onChange: set("linkedin"), required: isSignup }), /* @__PURE__ */ React.createElement(Input, { label: t.website, value: form.website, onChange: set("website") }), /* @__PURE__ */ React.createElement(Select, { label: t.gender, value: form.gender, onChange: set("gender"), options: ["", ...GENDER_OPTIONS], required: true }), /* @__PURE__ */ React.createElement(Input, { label: t.dob, type: "date", value: form.dateOfBirth, onChange: set("dateOfBirth"), required: true }))), isSignup && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionVisibility), /* @__PURE__ */ React.createElement("div", { className: "form-grid-2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement(Toggle, { label: t.phoneVisible, desc: t.phoneVisibleDesc, value: form.phoneVisible, onChange: set("phoneVisible") }), /* @__PURE__ */ React.createElement(Toggle, { label: t.emailVisible, desc: t.emailVisibleDesc, value: form.emailVisible, onChange: set("emailVisible") }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionDeo), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Select, { label: t.gradYear, value: form.graduationYear, onChange: set("graduationYear"), options: ["", ...years], required: true }), /* @__PURE__ */ React.createElement(Select, { label: t.country, value: form.country, onChange: set("country"), options: ["", ...COUNTRY_OPTIONS], required: true })), /* @__PURE__ */ React.createElement(
      RolesInput,
      {
        roles: form.roles || [],
        primaryRole: form.primaryRole || "",
        onChange: ({ roles, primaryRole }) => setForm((f) => __spreadProps(__spreadValues({}, f), { roles, primaryRole, role: primaryRole })),
        hint: t.rolesHint
      }
    ), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, display: "flex", flexDirection: "column", gap: 14 } }, /* @__PURE__ */ React.createElement(MultiSelect, { label: t.companies, value: form.companies, onChange: set("companies"), options: [], required: isSignup, hint: t.multiHint }), /* @__PURE__ */ React.createElement(MultiSelect, { label: t.industries, value: form.industries, onChange: set("industries"), options: INDUSTRY_OPTIONS, required: isSignup, hint: t.multiHint }), /* @__PURE__ */ React.createElement(MultiSelect, { label: t.regions, value: form.regions, onChange: set("regions"), options: REGION_OPTIONS, required: isSignup, hint: t.multiHint }), /* @__PURE__ */ React.createElement(MultiSelect, { label: t.expertise, value: form.expertise, onChange: set("expertise"), options: EXPERTISE_OPTIONS, required: isSignup, hint: t.multiHint }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionEducation), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginBottom: 14, lineHeight: 1.5 } }, t.educationLevelHint), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16, maxWidth: 320 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, t.educationLevel, " ", /* @__PURE__ */ React.createElement("span", { style: { color: "#ef4444" } }, "*")), /* @__PURE__ */ React.createElement("select", { value: form.highestEducationLevel || "", onChange: (e) => set("highestEducationLevel")(e.target.value), style: { width: "100%", padding: "9px 12px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontFamily: "inherit", background: "#fff", outline: "none" } }, /* @__PURE__ */ React.createElement("option", { value: "" }, "— Select —"), EDUCATION_LEVEL_OPTIONS.map((v) => /* @__PURE__ */ React.createElement("option", { key: v, value: v }, EDUCATION_LEVEL_LABELS[v])))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 8 } }, "Universities Attended"), /* @__PURE__ */ React.createElement(EducationEntriesInput, { entries: form.educationEntries || [], onChange: set("educationEntries") })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionAbout), /* @__PURE__ */ React.createElement(Textarea, { label: t.bio, value: form.bio, onChange: set("bio"), rows: 4, placeholder: t.bioPlaceholder, required: isSignup }), isSignup && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14 } }, /* @__PURE__ */ React.createElement(Textarea, { label: t.motivation, value: form.motivation, onChange: set("motivation"), rows: 3, placeholder: t.motivationPlaceholder, required: true }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionCommunity), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4 } }, /* @__PURE__ */ React.createElement(Toggle, { label: t.mentorLabel, desc: t.mentorDesc, value: form.willingToMentor, onChange: set("willingToMentor") }), /* @__PURE__ */ React.createElement(Toggle, { label: t.hiringLabel, desc: t.hiringDesc, value: form.openToHiring, onChange: set("openToHiring") }), /* @__PURE__ */ React.createElement(Toggle, { label: t.donateLabel, desc: t.donateDesc, value: form.willingToDonate, onChange: set("willingToDonate") }), /* @__PURE__ */ React.createElement(Toggle, { label: t.investLabel, desc: t.investDesc, value: form.willingToInvest, onChange: set("willingToInvest") }), form.willingToInvest && /* @__PURE__ */ React.createElement("div", { style: { marginLeft: 0, marginTop: 4 } }, /* @__PURE__ */ React.createElement(
      Select,
      {
        label: t.investBudget,
        value: form.investmentBudget,
        onChange: set("investmentBudget"),
        options: ["", "< 500K EGP", "500K – 2.5M EGP", "2.5M – 5M EGP", "5M – 25M EGP", "25M – 50M EGP", "> 50M EGP"]
      }
    )))), isSignup && /* @__PURE__ */ React.createElement("div", { style: { background: "#fef9ec", border: `1.5px solid ${GOLD}44`, borderRadius: 12, padding: "20px 22px" } }, /* @__PURE__ */ React.createElement(SectionHead, null, t.sectionMembership), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 10 } }, t.membershipQ), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginBottom: 12 } }, t.membershipDesc), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, marginBottom: 16 } }, [["yes", "نعم / Yes"], ["no", "لا / No"]].map(([val, label]) => /* @__PURE__ */ React.createElement("label", { key: val, onClick: () => setForm((f) => __spreadProps(__spreadValues({}, f), { willingToPayMembership: val === "yes" })), style: { display: "flex", alignItems: "center", gap: 8, cursor: "pointer", padding: "8px 20px", borderRadius: 8, border: `1.5px solid ${form.willingToPayMembership === (val === "yes") ? GOLD : BORDER}`, background: form.willingToPayMembership === (val === "yes") ? "#fef9ec" : "#fff", fontWeight: 600, fontSize: 14, color: form.willingToPayMembership === (val === "yes") ? GOLD : "#6b7280", transition: "all 0.15s" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", border: `2px solid ${form.willingToPayMembership === (val === "yes") ? GOLD : BORDER}`, display: "flex", alignItems: "center", justifyContent: "center" } }, form.willingToPayMembership === (val === "yes") && /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: "50%", background: GOLD } })), label))), form.willingToPayMembership && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 4 } }, /* @__PURE__ */ React.createElement(
      Select,
      {
        label: t.membershipFee,
        value: form.membershipFeeAmount,
        onChange: set("membershipFeeAmount"),
        options: ["", "أقل من 2,500 جنيه / سنة", "2,500 – 5,000 جنيه / سنة", "5,000 – 10,000 جنيه / سنة", "10,000 – 25,000 جنيه / سنة", "أكثر من 25,000 جنيه / سنة"]
      }
    ))), isSignup && React.createElement("div", null,
      React.createElement(SectionHead, null, lang === "de" ? "Ihr Konto" : "Your Account"),
      React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginBottom: 12 } }, lang === "de"
        ? "Legen Sie ein Passwort fest. Sie können sich damit anmelden, sobald Ihre Bewerbung genehmigt wurde."
        : "Choose a password. You'll use it to sign in once your application has been approved."),
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },
        React.createElement(Input, { label: lang === "de" ? "Passwort (mind. 8 Zeichen)" : "Password (min. 8 characters)", type: "password", value: form.password || "", onChange: set("password"), required: true }),
        React.createElement(Input, { label: lang === "de" ? "Passwort bestätigen" : "Confirm Password", type: "password", value: form.passwordConfirm || "", onChange: set("passwordConfirm"), required: true }))
    ), /* @__PURE__ */ React.createElement(Btn, { onClick: () => onSubmit(form), style: { alignSelf: "flex-end", padding: "12px 32px" } }, submitLabel));
  };
  var SignupPage = ({ onBack, onSubmitted }) => {
    const [step, setStep] = useState(1);
    const [accountError, setAccountError] = useState(null);
    const [needsVerification, setNeedsVerification] = useState(false);
    const handleSubmit = async (form) => {
      const missing = [];
      if (!form.firstName)                                           missing.push("First Name");
      if (!form.lastName)                                            missing.push("Last Name");
      if (!form.email)                                               missing.push("Email");
      if (!form.graduationYear)                                      missing.push("Graduation Year");
      if (!form.gender)                                              missing.push("Gender");
      if (!form.dateOfBirth)                                         missing.push("Date of Birth");
      if (!form.country)                                             missing.push("Country");
      if (!form.linkedin)                                            missing.push("LinkedIn URL");
      if (!form.roles || form.roles.length === 0)                    missing.push("At least one Role / Title");
      if (!form.industries || form.industries.length === 0)          missing.push("Industry (at least one)");
      if (!form.expertise || form.expertise.length === 0)            missing.push("Expertise (at least one)");
      if (!form.companies || form.companies.length === 0)            missing.push("Company (at least one)");
      if (!form.regions || form.regions.length === 0)                missing.push("Region (at least one)");
      if (!form.bio || !form.bio.trim())                             missing.push("Personal Bio");
      if (!form.motivation || !form.motivation.trim())               missing.push("Motivation (why you want to join)");
      if (!form.highestEducationLevel)                               missing.push("University Education level");
      if (form.highestEducationLevel && form.highestEducationLevel !== "na" && (!form.educationEntries || form.educationEntries.length === 0)) missing.push("At least one university entry (click '+ Add University')");
      if (!form.password)                                            missing.push("Password");
      else if (form.password.length < 8)                             missing.push("Password must be at least 8 characters");
      else if (form.password !== form.passwordConfirm)               missing.push("Passwords do not match");
      if (missing.length > 0) {
        alert("Please complete the following required fields:\n\n• " + missing.join("\n• "));
        return;
      }
      setStep(2);
      try {
        const result = await onSubmitted(form);
        setAccountError(result && result.accountError ? result.accountError : null);
        setNeedsVerification(!!(result && result.needsVerification));
        setStep(3);
      } catch (e) {
        setStep(1);
        const msg = e.message || String(e);
        console.error("Submit error:", msg);
        alert("Error submitting application:\n\n" + msg + "\n\nPlease check your internet connection and try again.");
      }
    };
    if (step === 2) return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: `linear-gradient(135deg, ${CREAM} 0%, #e8e0d0 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } }, /* @__PURE__ */ React.createElement("div", { style: { width: 40, height: 40, border: `3px solid ${GOLD}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 16px" } }), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 14 } }, "Submitting your application…")));
    if (step === 3) return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: `linear-gradient(135deg, ${CREAM} 0%, #e8e0d0 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: "56px 48px", maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 52, marginBottom: 16 } }, "✅"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 10 } }, "Application Submitted"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, color: "#6b7280", lineHeight: 1.6, marginBottom: 28 } }, "Thank you for applying to DEO Leaders. Our team will carefully review your application and notify you by email within ", /* @__PURE__ */ React.createElement("strong", null, "15 working days"), "."),
      accountError
        ? React.createElement("div", { style: { fontSize: 13, color: "#b45309", background: "#fef3c7", borderRadius: 10, padding: "12px 16px", lineHeight: 1.5, marginBottom: 24 } }, "Your password could not be saved: ", accountError, " Once you are approved, use \"Forgot password\" on the login page to set one.")
        : React.createElement("div", { style: { fontSize: 13, color: "#374151", background: "#f6f5f3", borderRadius: 10, padding: "12px 16px", lineHeight: 1.5, marginBottom: 24 } }, needsVerification
          ? "We've sent you an email to confirm your address — please click the link in it. Once your application is approved, sign in with your email and the password you just chose."
          : "Your password is saved. Once your application is approved, sign in with your email and the password you just chose."), /* @__PURE__ */ React.createElement(Btn, { onClick: onBack }, "Go to Login")));
    return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: `linear-gradient(135deg, ${CREAM} 0%, #e8e0d0 100%)` } }, /* @__PURE__ */ React.createElement("div", { style: { background: DARK, padding: "16px 32px", display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("img", { src: DEO_LEADERS_LOGO_VW, alt: "DEO Leaders", style: { height: 40, cursor: "pointer", objectFit: "contain", filter: "brightness(0) invert(1)" }, onClick: () => window.dispatchEvent(new CustomEvent("deo-nav-landing")) }), /* @__PURE__ */ React.createElement("span", { style: { color: GOLD, fontWeight: 700, fontSize: 16, fontFamily: "var(--font-sans)" } }, "DEO Leaders")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("button", { onClick: () => window.dispatchEvent(new CustomEvent("deo-nav-landing")), style: { background: "transparent", border: "1px solid #444", color: "#9ca3af", borderRadius: 8, padding: "6px 16px", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 } },
          React.createElement("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" }, React.createElement("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), React.createElement("polyline", { points: "9 22 9 12 15 12 15 22" })),
          "Home"
        ),
        React.createElement("button", { onClick: onBack, style: { background: "transparent", border: "1px solid #444", color: "#9ca3af", borderRadius: 8, padding: "6px 16px", fontSize: 12, cursor: "pointer" } }, "Go to Login")), /* @__PURE__ */ React.createElement("div", { style: { maxWidth: 760, margin: "0 auto", padding: "40px 20px" } }, /* @__PURE__ */ React.createElement("div", { style: { background: DARK, borderRadius: 12, padding: "36px 40px", marginBottom: 32, color: "#fff" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: GOLD, fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 8 } }, "Apply for Membership"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 30, fontWeight: 700, fontFamily: "var(--font-sans)", marginBottom: 10 } }, "Join the DEO Leaders Network"), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 14, lineHeight: 1.7, maxWidth: 560 } }, "DEO Leaders is the exclusive alumni network of the Deutsche Evangelische Oberschule — connecting graduates across generations, industries, and continents. Membership is by application and approval only."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 24, marginTop: 20 } }, [["🤝", "Curated Network"], ["🏛️", "Exclusive Events"], ["🌍", "Global Reach"]].map(([icon, label]) => /* @__PURE__ */ React.createElement("div", { key: label, style: { display: "flex", alignItems: "center", gap: 8, color: "#f7911d", fontSize: 13 } }, /* @__PURE__ */ React.createElement("span", null, icon), label)))), /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 16, padding: "32px", border: `1px solid ${BORDER}` } }, /* @__PURE__ */ React.createElement(MemberForm, { onSubmit: handleSubmit, submitLabel: "Submit Application →", isSignup: true }))));
  };
  var ForgotPassword = ({ onBack }) => null; // handled inline in LoginPage
  var TRANSLATIONS = {
    de: {
      nav_apply: "Bewerben",
      nav_login: "Mitglieder-Login",
      hero_tag: "seit 1873 · Alumni-Netzwerk",
      hero_h1_1: "Wo",
      hero_h1_gold: "DEO Leaders",
      hero_h1_3: "die Zukunft formen",
      hero_sub: "DEO Leaders ist das exklusive Alumni-Netzwerk der Deutschen Evangelischen Oberschule — ein Netzwerk aus Gründern, Führungskräften und Diplomaten in Ägypten, Deutschland und weltweit.",
      hero_cta_apply: "Mitgliedschaft beantragen →",
      hero_cta_login: "Mitglieder-Login",
      stat_alumni: "Alumni-Mitglieder",
      stat_assets: "Verwaltetes Vermögen",
      stat_founded: "Gründungsjahr",
      pillars_tag: "Wer wir sind",
      pillars_h2: "Drei Säulen der Exzellenz",
      p1_title: "Deutsche Evangelische Oberschule Kairo",
      p1_sub: "Gegründet 1873",
      p1_desc: "Eine der renommiertesten Schulen Ägyptens — seit über 150 Jahren prägt sie Ägyptens einflussreichste Führungskräfte, Unternehmer und Persönlichkeiten des öffentlichen Lebens mit deutschem Bildungsstandard.",
      p2_title: "DEO Leaders",
      p2_sub: "Alumni-Netzwerk",
      p2_desc: "Ein exklusives professionelles Netzwerk aus DEO-Absolventen und Führungskräften weltweit. Es verbindet Ägyptens deutschsprachige Geschäftswelt mit internationalen Möglichkeiten und fördert Beziehungen, Investitionen und unser gemeinsames Erbe.",
      p3_title: "Unsere Partner",
      p3_sub: "Institutionelle Partner",
      p3_desc: "DEO Leaders arbeitet mit führenden deutschen und internationalen Institutionen in Ägypten zusammen — darunter die Deutsche Botschaft Kairo, die AHK, die GIZ und viele mehr.",
      community_tag: "Unsere Community",
      community_h2: "Von DEO-Alumni aufgebaut",
      community_sub: "Unsere Alumni haben einige der bekanntesten Unternehmen und Institutionen Ägyptens geprägt und mitgegründet.",
      perks_tag: "Mitgliedschaft",
      perks_h2: "Für Führungspersönlichkeiten",
      perks: [
        { emoji: "🏛️", title: "Exklusive Veranstaltungen", desc: "Früher Zugang zu DEO Leaders Veranstaltungen, Alumni-Treffen und privaten Networking-Dinners." },
        { emoji: "🔗", title: "Gezieltes Networking", desc: "Vernetze dich mit über 2.000 verifizierten Alumni-Führungskräften über alle Branchen und Kontinente hinweg." },
        { emoji: "💎", title: "Mitgliedervorteile", desc: "Stellenmarkt, Investitionsmöglichkeiten, Mentoring und Co-Founder-Matching." },
        { emoji: "📣", title: "Sichtbarkeit & Reichweite", desc: "Werde in unserer Medienberichterstattung, Interviews und Alumni-Spotlights vorgestellt." }
      ],
      cta_h2: "Bereit beizutreten?",
      cta_sub: "Bewerbungen werden vom DEO Leaders Team geprüft. Werde Teil einer exklusiven Gemeinschaft von Alumni, die gemeinsam die Zukunft gestalten.",
      cta_apply: "Mitgliedschaft beantragen →",
      cta_login: "Mitglieder-Login",
      footer_copy: "© 2026 DEO Leaders · Deutsche Evangelische Oberschule Kairo"
    },
    en: {
      nav_apply: "Apply",
      nav_login: "Member Login",
      hero_tag: "since 1873 · Alumni Network",
      hero_h1_1: "Where",
      hero_h1_gold: "DEO Leaders",
      hero_h1_3: "shape the future",
      hero_sub: "DEO Leaders is the exclusive alumni network of Deutsche Evangelische Oberschule — connecting founders, executives and diplomats across Egypt, Germany and the world.",
      hero_cta_apply: "Apply for Membership →",
      hero_cta_login: "Member Login",
      stat_alumni: "Alumni Members",
      stat_assets: "Assets Under Management",
      stat_founded: "Year Founded",
      pillars_tag: "Who We Are",
      pillars_h2: "Three Pillars of Excellence",
      p1_title: "Deutsche Evangelische Oberschule Cairo",
      p1_sub: "Founded 1873",
      p1_desc: "One of Egypt's most prestigious schools — over 150 years of shaping Egypt's most influential leaders, entrepreneurs and public figures through German-accredited excellence.",
      p2_title: "DEO Leaders",
      p2_sub: "Alumni Network",
      p2_desc: "An exclusive professional network of DEO founders and executives worldwide, bridging Egypt's German-speaking business world with international opportunity, building relationships, driving investment and honouring legacy.",
      p3_title: "Our Partners",
      p3_sub: "Institutional Partners",
      p3_desc: "DEO Leaders collaborates with Germany's most prominent institutions in Egypt — including the German Embassy Cairo, AHK, GIZ and more.",
      community_tag: "Our Community",
      community_h2: "Built by DEO Alumni",
      community_sub: "Our alumni have shaped and co-founded some of Egypt's most recognised companies and institutions.",
      perks_tag: "Membership",
      perks_h2: "Built for Leaders",
      perks: [
        { emoji: "🏛️", title: "Exclusive Events", desc: "Early access to DEO Leaders events, alumni gatherings and private networking dinners." },
        { emoji: "🔗", title: "Curated Networking", desc: "Connect with 2,000+ verified alumni leaders across industries and continents." },
        { emoji: "💎", title: "Member Perks", desc: "Job board, investment opportunities, mentorship and co-founder matching." },
        { emoji: "📣", title: "Brand & Visibility", desc: "Get featured in our media coverage, interviews and alumni spotlights." }
      ],
      cta_h2: "Ready to Join?",
      cta_sub: "Applications are reviewed by the DEO Leaders team. Join an exclusive community of alumni building the future together.",
      cta_apply: "Apply for Membership →",
      cta_login: "Member Login",
      footer_copy: "© 2026 DEO Leaders · Deutsche Evangelische Oberschule Kairo"
    }
  };
  // ── Landing page styles — DEO Leaders brand system (tokens: /brand/tokens.css) ──
  var LANDING_CSS = `
.lp { font-family: var(--font-sans); color: var(--text); background: var(--surface); line-height: 1.6;
  -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; }
.lp *, .lp *::before, .lp *::after { box-sizing: border-box; }
:where(.lp) :where(h1, h2, h3, p, ul, dl, dd) { margin: 0; padding: 0; }
:where(.lp) :where(ul) { list-style: none; }
.lp img { max-width: 100%; }
.lp-wrap { width: 100%; max-width: 1200px; margin: 0 auto; padding-left: clamp(16px, 4vw, 48px); padding-right: clamp(16px, 4vw, 48px); }
.lp-on-dark :focus-visible { outline-color: var(--deo-yellow); }
.lp-skip { position: absolute; left: 16px; top: -100px; z-index: 400; background: var(--deo-ink); color: #fff;
  padding: 12px 16px; border-radius: var(--radius-control); font-weight: 600; text-decoration: none; }
.lp-skip:focus { top: 12px; }
#lp-main:focus { outline: none; }

/* Type — restrained weights, generous leading */
.lp-h1 { font-size: clamp(38px, 5vw, 60px); font-weight: 600; line-height: 1.08; letter-spacing: -0.02em; text-wrap: balance; }
.lp-h1, .lp-h2, .lp-h3 { overflow-wrap: break-word; hyphens: auto; -webkit-hyphens: auto; }
.lp-h2 { font-size: clamp(28px, 3.4vw, 40px); font-weight: 600; line-height: 1.15; letter-spacing: -0.015em; text-wrap: balance; }
.lp-h3 { font-size: 19px; font-weight: 600; line-height: 1.3; }
.lp-accent { color: #a85200; }
.lp-eyebrow { display: inline-flex; align-items: center; gap: 14px; margin-bottom: 20px; font-size: 12px; font-weight: 600;
  letter-spacing: 0.18em; text-transform: uppercase; color: var(--text-muted); }
.lp-eyebrow::before { content: ""; width: 32px; height: 1px; background: var(--deo-orange); flex: none; }
.lp-eyebrow-dark { color: #c9c4bf; }
.lp-lead { color: var(--text-muted); font-size: 17px; line-height: 1.7; max-width: 52ch; }
.lp-meta { font-size: 12px; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: var(--text-muted); }

/* Buttons */
.lp-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 48px; padding: 0 26px;
  border: 1px solid transparent; border-radius: 4px; font: 600 15px/1.2 var(--font-sans); letter-spacing: 0.01em;
  cursor: pointer; text-decoration: none; white-space: nowrap;
  transition: background-color var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast); }
.lp-btn-sm { min-height: 44px; padding: 0 18px; font-size: 14px; }
.lp-btn-primary { background: var(--action); color: var(--action-text); }
.lp-btn-primary:hover { background: var(--action-hover); }
.lp-btn-ink { background: var(--deo-ink); color: #fff; }
.lp-btn-ink:hover { background: #000; }
.lp-btn-outline { background: transparent; border-color: #b9b4b0; color: var(--text); }
.lp-btn-outline:hover { border-color: var(--deo-ink); background: rgba(35, 31, 32, 0.04); }
.lp-on-dark .lp-btn-outline { color: #fff; border-color: rgba(255, 255, 255, 0.5); }
.lp-on-dark .lp-btn-outline:hover { background: rgba(255, 255, 255, 0.08); border-color: #fff; }
.lp-cta-row { display: flex; flex-wrap: wrap; gap: 12px; }

/* Header */
.lp-header { position: fixed; top: 0; left: 0; right: 0; z-index: 200; background: rgba(255,255,255,0.97);
  border-bottom: 1px solid var(--border); transition: box-shadow var(--motion-standard); }
.lp-header.is-scrolled { box-shadow: 0 1px 10px rgba(27, 26, 25, 0.06); }
.lp-header-inner { height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.lp-logo-link { display: flex; padding: 6px 0; border-radius: 4px; flex: none; }
.lp-logo-link img { height: 32px; width: auto; display: block; }
.lp-logo-link .lp-logo-icon { display: none; height: 32px; }
.lp-actions { display: flex; align-items: center; gap: 10px; }
.lp-lang { display: flex; gap: 2px; padding: 3px; border: 1px solid var(--border); border-radius: 4px; }
.lp-lang button { min-width: 40px; height: 36px; padding: 0 8px; border: 0; border-radius: 3px; background: transparent;
  color: var(--text-muted); font: 600 12px/1 var(--font-sans); letter-spacing: 0.08em; cursor: pointer; transition: background-color var(--motion-fast), color var(--motion-fast); }
.lp-lang button:hover { color: var(--text); background: var(--surface-subtle); }
.lp-lang button[aria-pressed="true"] { background: var(--deo-ink); color: #fff; }
.lp-profile { position: relative; }
.lp-profile-btn { display: flex; align-items: center; gap: 8px; min-height: 44px; padding: 3px 10px 3px 3px; background: #fff;
  border: 1px solid var(--border); border-radius: 999px; color: var(--text); font: 600 14px/1 var(--font-sans); cursor: pointer; }
.lp-profile-btn:hover { border-color: var(--control-border); }
.lp-menu { position: absolute; right: 0; top: calc(100% + 8px); min-width: 230px; background: #fff; border: 1px solid var(--border);
  border-radius: 6px; box-shadow: 0 12px 32px rgba(27, 26, 25, 0.12); overflow: hidden; z-index: 300; }
.lp-menu-head { display: grid; gap: 2px; padding: 14px 16px; border-bottom: 1px solid var(--border); }
.lp-menu-head strong { font-size: 14px; }
.lp-menu-head span { font-size: 13px; color: var(--text-muted); overflow-wrap: anywhere; }
.lp-menu button { display: block; width: 100%; min-height: 44px; padding: 0 16px; text-align: left; background: none; border: 0;
  font: 400 14px/1 var(--font-sans); color: var(--text); cursor: pointer; }
.lp-menu button:hover { background: var(--surface-subtle); }
.lp-menu button + button { border-top: 1px solid var(--border); }
.lp-menu .is-danger { color: var(--error); }

/* Hero — typographic, no photography */
.lp-hero { background: #faf9f7; border-bottom: 1px solid var(--border);
  padding: calc(76px + clamp(56px, 9vw, 120px)) 0 clamp(56px, 8vw, 112px); }
.lp-hero-grid { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 4fr); gap: clamp(40px, 6vw, 96px); align-items: center; }
.lp-hero-copy { max-width: 640px; }
.lp-hero-copy .lp-h1 { margin-bottom: 24px; }
.lp-hero-tagline { font-size: clamp(18px, 1.8vw, 21px); font-weight: 400; line-height: 1.5; color: var(--text); margin-bottom: 16px; }
.lp-hero-sub { font-size: 16px; line-height: 1.75; color: var(--text-muted); max-width: 56ch; margin-bottom: 40px; }
.lp-facts { position: relative; background: #fff; border: 1px solid var(--border); padding: 36px 40px 28px;
  box-shadow: 0 1px 2px rgba(27,26,25,0.04), 0 28px 56px -36px rgba(27,26,25,0.22); }
.lp-facts::before { content: ""; position: absolute; inset: 7px; border: 1px solid #f0ede9; pointer-events: none; }
.lp-facts::after { content: ""; position: absolute; top: -1px; left: -1px; right: -1px; height: 3px;
  background: linear-gradient(90deg, var(--deo-ink) 0 78%, var(--deo-orange) 78% 100%);
  transform: scaleX(0); transform-origin: left; transition: transform 1100ms cubic-bezier(.6,0,.2,1); }
.lp-facts.is-in::after { transform: none; }
.lp-facts-title { position: relative; display: flex; align-items: center; gap: 16px; margin-bottom: 6px;
  font-size: 11px; font-weight: 600; letter-spacing: 0.26em; text-transform: uppercase; color: var(--text-muted); }
.lp-facts-title::after { content: ""; flex: 1; height: 1px; background: var(--border); }
.lp-stats { position: relative; display: grid; }
.lp-stat { position: relative; display: flex; align-items: baseline; justify-content: space-between; gap: 20px; padding: 20px 0 18px;
  opacity: 0; transform: translateY(10px);
  transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1); transition-delay: calc(220ms + var(--i, 0) * 140ms); }
.lp-stat::after { content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 1px; background: var(--border);
  transform: scaleX(0); transform-origin: left; transition: transform 900ms cubic-bezier(.6,0,.2,1); transition-delay: calc(340ms + var(--i, 0) * 140ms); }
.lp-stat:last-child::after { display: none; }
.lp-facts.is-in .lp-stat { opacity: 1; transform: none; }
.lp-facts.is-in .lp-stat::after { transform: none; }
.lp-stat dd { order: -1; font-size: clamp(34px, 3.3vw, 44px); font-weight: 300; line-height: 1; letter-spacing: -0.03em; color: var(--text);
  font-variant-numeric: tabular-nums lining-nums; white-space: nowrap; }
.lp-stat-suffix { color: #a85200; font-weight: 400; margin-left: 2px; }
.lp-stat dt { font-size: 11px; font-weight: 600; letter-spacing: 0.16em; line-height: 1.5; text-transform: uppercase; color: var(--text-muted);
  text-align: right; transition: color var(--motion-standard); }
@media (hover: hover) { .lp-stat:hover dt { color: var(--text); } }
.lp-facts-foot { display: flex; justify-content: center; flex-wrap: wrap; gap: 6px 14px; margin-top: 10px; padding-top: 18px;
  border-top: 1px solid var(--border); font-size: 11px; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: var(--text-muted);
  opacity: 0; transition: opacity 800ms ease 950ms; }
.lp-facts.is-in .lp-facts-foot { opacity: 1; }
.lp-facts-foot span + span::before { content: ""; display: inline-block; width: 4px; height: 4px; margin-right: 14px; vertical-align: 2px;
  background: var(--deo-orange); transform: rotate(45deg); }
.lp-sr { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
@media (prefers-reduced-motion: reduce) {
  .lp-stat, .lp-facts-foot { opacity: 1 !important; transform: none !important; }
  .lp-stat::after, .lp-facts::after { transform: none !important; }
}

/* Quiet entrance only */
@keyframes lp-fade { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.lp-hero-copy, .lp-facts { animation: lp-fade 600ms ease-out both; }
.lp-facts { animation-delay: 120ms; }
@media (prefers-reduced-motion: reduce) {
  .lp *, .lp *::before, .lp *::after { animation: none !important; transition: none !important; }
}

/* Sections */
.lp-section { padding: clamp(72px, 9vw, 120px) 0; background: var(--surface); }
.lp-section-subtle { background: #faf9f7; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.lp-sec-head { display: grid; gap: 16px 64px; align-items: end; margin-bottom: clamp(40px, 5vw, 64px); padding-bottom: 32px; border-bottom: 1px solid var(--border); }
@media (min-width: 900px) { .lp-sec-head { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); } }

/* Pillars — three equal, quiet panels */
.lp-pillars { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.lp-pillar { display: flex; flex-direction: column; gap: 12px; padding: 0 0 8px; background: transparent; }
.lp-pillar-num { display: none; }
.lp-pillar-stage { height: 168px; margin-bottom: 16px; padding: 24px; display: flex; align-items: center; justify-content: center;
  background: #fff; border: 1px solid var(--border); }
.lp-pillar-stage img { display: block; width: auto; object-fit: contain; }
.lp-stage-school { height: 96px; }
.lp-stage-leaders { height: 40px; max-width: 100%; }
.lp-partner-logos { width: 100%; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 16px; align-items: center; justify-items: center; }
.lp-partner-logos li:first-child { grid-column: 1 / -1; }
.lp-partner-logos img { max-height: 42px; max-width: 100%; }
.lp-pillar p:last-child { font-size: 15px; line-height: 1.75; color: var(--text-muted); }

/* Community — slider */
.lp-swiper { position: relative; }
.lp-swiper-track { display: grid; grid-auto-flow: column; grid-auto-columns: calc((100% - 4 * 20px) / 5); gap: 20px;
  overflow-x: auto; overscroll-behavior-x: contain; scroll-snap-type: x mandatory; scrollbar-width: none;
  margin: 0; padding: 6px 0 24px; cursor: grab; }
.lp-swiper-track::-webkit-scrollbar { display: none; }
.lp-swiper-track { scroll-snap-type: none !important; }
.lp-swiper-progress span { transition: none !important; }
.lp-swiper-track.is-dragging { scroll-snap-type: none; cursor: grabbing; user-select: none; }
.lp-swiper-track:focus-visible { outline: 2px solid var(--focus); outline-offset: 4px; }
.lp-alumni-card { scroll-snap-align: start; background: #fff; border: 1px solid var(--border); padding: 32px 18px 26px; text-align: center;
  transition: border-color var(--motion-standard), box-shadow 400ms ease, transform 400ms cubic-bezier(.2,.7,.2,1); }
.lp-alumni-card:hover { border-color: #cfcac4; box-shadow: 0 18px 32px -24px rgba(27,26,25,0.35); transform: translateY(-3px); }
.lp-alumni-logo { height: 56px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; }
.lp-alumni-logo img { max-height: 52px; max-width: 110px; object-fit: contain; display: block; pointer-events: none; -webkit-user-drag: none;
  filter: grayscale(1); opacity: 0.85; transition: filter var(--motion-standard), opacity var(--motion-standard); }
.lp-alumni-card:hover .lp-alumni-logo img { filter: none; opacity: 1; }
.lp-alumni-initials { width: 64px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 4px;
  background: var(--surface-subtle); color: var(--text); font-weight: 700; font-size: 14px; }
.lp-alumni-name { font-size: 15px; font-weight: 600; line-height: 1.3; }
.lp-alumni-founder { font-size: 13px; color: var(--text-muted); margin-top: 4px; }
.lp-swiper-bar { display: flex; align-items: center; gap: 32px; margin-top: 16px; }
.lp-swiper-progress { position: relative; flex: 1; height: 1px; background: var(--border); }
.lp-swiper-progress span { position: absolute; top: -1px; height: 3px; background: var(--deo-ink); transition: left 450ms cubic-bezier(.2,.7,.2,1); }
.lp-swiper-count { font-size: 12px; font-weight: 600; letter-spacing: 0.16em; color: var(--text-muted); font-variant-numeric: tabular-nums; }
.lp-swiper-nav { display: flex; gap: 10px; }
.lp-swiper-btn { width: 48px; height: 48px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #b9b4b0;
  border-radius: 50%; background: #fff; color: var(--text); cursor: pointer;
  transition: background-color var(--motion-fast), border-color var(--motion-fast), color var(--motion-fast), opacity var(--motion-fast); }
.lp-swiper-btn:hover:not(:disabled) { background: var(--deo-ink); border-color: var(--deo-ink); color: #fff; }
.lp-swiper-btn:disabled { opacity: 0.35; cursor: default; }
.lp-swiper-btn-sm { width: 36px; height: 36px; align-self: center; border-color: transparent; color: var(--text-muted); }
.lp-swiper-btn-sm:hover:not(:disabled) { background: var(--surface-subtle); border-color: var(--border); color: var(--text); }

/* Membership */
.lp-perks { display: grid; gap: 40px 32px; grid-template-columns: repeat(4, minmax(0, 1fr)); }
.lp-perk { border-top: 1px solid var(--deo-ink); padding-top: 24px; display: flex; flex-direction: column; gap: 12px; }
.lp-perk-icon { width: 24px; height: 24px; color: #a85200; display: flex; margin-bottom: 4px; }
.lp-perk p { color: var(--text-muted); font-size: 15px; line-height: 1.75; }

/* Call to action — charcoal band */
.lp-cta { background: var(--deo-charcoal); color: #fff; padding: clamp(72px, 9vw, 112px) 0; }
.lp-cta-inner { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 32px 64px; align-items: end; }
.lp-cta .lp-h2 { margin-bottom: 16px; }
.lp-cta p { font-size: 17px; line-height: 1.7; color: #c9c4bf; max-width: 56ch; }

/* Footer */
.lp-footer { background: #fff; border-top: 1px solid var(--border); }
.lp-footer-inner { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 32px; padding-top: 40px; padding-bottom: 32px; }
.lp-cobrand { display: flex; align-items: center; gap: 32px; }
.lp-cobrand-lead { height: 34px; width: auto; display: block; }
.lp-cobrand-sep { width: 1px; height: 64px; background: var(--border); }
.lp-cobrand-school { height: 76px; width: auto; display: block; }
.lp-footer-links { display: flex; flex-wrap: wrap; gap: 8px 28px; }
.lp-footer-links a { display: inline-flex; align-items: center; min-height: 44px; color: var(--text); font-weight: 600; font-size: 14px;
  text-decoration: underline; text-decoration-color: #cfcac4; text-decoration-thickness: 1px; text-underline-offset: 5px; }
.lp-footer-links a:hover { text-decoration-color: currentColor; }
.lp-footer-copy { border-top: 1px solid var(--border); padding: 20px 0 28px; font-size: 13px; color: var(--text-muted); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px 24px; }

/* Brand colour washes — soft orange / yellow / coral fields behind white content */
.lp-hero, .lp-section, .lp-cta, .lp-footer { position: relative; isolation: isolate; overflow: hidden; }
.lp-hero::before, .lp-section::before, .lp-cta::before, .lp-footer::before {
  content: ""; position: absolute; inset: -15%; z-index: -1; pointer-events: none;
  animation: lp-aurora 36s ease-in-out infinite alternate; }
@keyframes lp-aurora {
  from { transform: translate3d(0, 0, 0) scale(1); }
  to   { transform: translate3d(-3%, 2%, 0) scale(1.06); } }

/* Hero: warm sunrise on the right, coral whisper top-left */
.lp-hero { background: #fcf8f3; }
.lp-hero::before { background:
  radial-gradient(34% 42% at 80% 28%, rgba(247,145,29,0.51), transparent 70%),
  radial-gradient(30% 38% at 96% 70%, rgba(247,195,23,0.55), transparent 70%),
  radial-gradient(34% 40% at 60% 92%, rgba(247,147,130,0.51), transparent 72%),
  radial-gradient(26% 32% at 12% 14%, rgba(247,147,130,0.35), transparent 70%),
  radial-gradient(24% 30% at 30% 88%, rgba(247,195,23,0.26), transparent 70%); }

/* Who we are: light yellow glow top-right, coral bottom-left */
main > section:nth-of-type(2) { background: #fffdfa; }
main > section:nth-of-type(2)::before { background:
  radial-gradient(30% 40% at 92% 8%, rgba(247,195,23,0.34), transparent 70%),
  radial-gradient(28% 36% at 4% 96%, rgba(247,147,130,0.35), transparent 70%); }

/* Community: coral + orange field so the white logo cards stand out */
.lp-section-subtle { background: #fbf4ee; }
.lp-section-subtle::before { background:
  radial-gradient(34% 46% at 8% 30%, rgba(247,147,130,0.51), transparent 70%),
  radial-gradient(30% 40% at 52% 100%, rgba(247,195,23,0.37), transparent 70%),
  radial-gradient(32% 42% at 96% 40%, rgba(247,145,29,0.37), transparent 70%); }

/* Membership: soft orange from the left */
main > section:nth-of-type(4) { background: #fffdfa; }
main > section:nth-of-type(4)::before { background:
  radial-gradient(30% 42% at 2% 20%, rgba(247,145,29,0.31), transparent 70%),
  radial-gradient(26% 36% at 98% 90%, rgba(247,147,130,0.35), transparent 70%); }
.lp-perk-icon { width: 44px; height: 44px; align-items: center; justify-content: center; border-radius: 50%;
  background: linear-gradient(135deg, rgba(247,195,23,0.55), rgba(247,145,29,0.51)); color: var(--deo-ink); }

/* Call to action: charcoal with orange + red glow */
.lp-cta::before { background:
  radial-gradient(34% 60% at 88% 20%, rgba(247,145,29,0.34), transparent 70%),
  radial-gradient(30% 55% at 100% 100%, rgba(220,26,51,0.26), transparent 70%),
  radial-gradient(26% 50% at 10% 110%, rgba(247,195,23,0.14), transparent 70%); }

/* Footer: pastel brand gradient */
.lp-footer { background: #fdf7f1; border-top: 0; }
.lp-footer::before { background:
  radial-gradient(30% 70% at 18% 20%, rgba(247,195,23,0.41), transparent 70%),
  radial-gradient(32% 80% at 62% 30%, rgba(247,147,130,0.44), transparent 70%),
  radial-gradient(30% 80% at 96% 90%, rgba(247,145,29,0.41), transparent 70%); }
.lp-footer-copy { border-top-color: rgba(35,31,32,0.12); }

@media (prefers-reduced-motion: reduce) {
  .lp-hero::before, .lp-section::before, .lp-cta::before, .lp-footer::before { animation: none !important; } }


/* ═══ Dark theme — brand charcoal / ink background ═══ */
.lp { --text: #f4f1ee; --text-muted: #b5afab; --border: rgba(255,255,255,0.12); --surface: #1b1a19; --surface-subtle: #262423;
  --control-border: rgba(255,255,255,0.35); background: var(--deo-charcoal); color: var(--text); }
.lp :focus-visible { outline-color: var(--deo-yellow); }
.lp-accent, .lp-stat-suffix { color: var(--deo-orange); }

/* Header */
.lp-header { background: rgba(27,26,25,0.94); border-bottom-color: rgba(255,255,255,0.08); -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }
.lp-header.is-scrolled { box-shadow: 0 1px 18px rgba(0,0,0,0.45); }
.lp-logo-link img.lp-logo-full { height: 44px; }
.lp-lang { border-color: rgba(255,255,255,0.16); }
.lp-lang button:hover { background: rgba(255,255,255,0.08); color: #fff; }
.lp-lang button[aria-pressed="true"] { background: #fff; color: var(--deo-ink); }
.lp-profile-btn { background: transparent; border-color: rgba(255,255,255,0.2); }
.lp-menu { background: #262423; border-color: rgba(255,255,255,0.12); }
.lp-menu button:hover { background: rgba(255,255,255,0.06); }
.lp-menu .is-danger { color: #ff8a98; }

/* Buttons */
.lp-btn-ink { background: var(--action); color: var(--action-text); }
.lp-btn-ink:hover { background: var(--action-hover); }
.lp-btn-outline { color: #fff; border-color: rgba(255,255,255,0.4); }
.lp-btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.06); }

/* Hero */
.lp-hero { background: var(--deo-charcoal); border-bottom-color: rgba(255,255,255,0.08); }
.lp-hero::before { background:
  radial-gradient(34% 44% at 82% 24%, rgba(247,145,29,0.24), transparent 70%),
  radial-gradient(28% 36% at 98% 78%, rgba(247,195,23,0.14), transparent 70%),
  radial-gradient(30% 38% at 8% 96%, rgba(247,145,29,0.10), transparent 70%); }
.lp-facts { background: #232120; border-color: rgba(255,255,255,0.1); box-shadow: 0 32px 64px -32px rgba(0,0,0,0.7); }
.lp-facts::before { border-color: rgba(255,255,255,0.06); }
.lp-facts::after { background: linear-gradient(90deg, #f4f1ee 0 78%, var(--deo-orange) 78% 100%); }

/* Sections */
main > section:nth-of-type(2), main > section:nth-of-type(4) { background: var(--deo-charcoal); }
main > section:nth-of-type(2)::before { background: radial-gradient(30% 40% at 94% 6%, rgba(247,145,29,0.10), transparent 70%); }
main > section:nth-of-type(4)::before { background: radial-gradient(30% 42% at 2% 24%, rgba(247,195,23,0.07), transparent 70%); }
.lp-section-subtle { background: #141312; border-color: rgba(255,255,255,0.08); }
.lp-section-subtle::before { background:
  radial-gradient(34% 46% at 6% 30%, rgba(247,145,29,0.14), transparent 70%),
  radial-gradient(30% 40% at 98% 70%, rgba(247,195,23,0.08), transparent 70%); }
.lp-pillar-stage { border-color: transparent; }

/* Community slider */
.lp-alumni-card { background: #232120; border-color: rgba(255,255,255,0.08); padding: 0 0 22px; overflow: hidden; }
.lp-alumni-card:hover { border-color: rgba(255,255,255,0.28); box-shadow: 0 20px 36px -24px rgba(0,0,0,0.8); }
.lp-alumni-logo { height: 96px; margin-bottom: 18px; background: #fff; }
.lp-swiper-progress { background: rgba(255,255,255,0.12); }
.lp-swiper-progress span { background: var(--deo-orange); }
.lp-swiper-btn { background: transparent; border-color: rgba(255,255,255,0.35); color: #fff; }
.lp-swiper-btn:hover:not(:disabled) { background: #fff; border-color: #fff; color: var(--deo-ink); }
.lp-swiper-btn-sm { border-color: transparent; color: var(--text-muted); }
.lp-swiper-btn-sm:hover:not(:disabled) { background: rgba(255,255,255,0.08); border-color: transparent; color: #fff; }

/* Membership */
.lp-perk { border-top-color: rgba(255,255,255,0.4); }
.lp-perk-icon { background: var(--deo-orange); color: var(--deo-ink); }

/* Call to action — orange field with a square grid (as on the sign-in page) and light travelling along the lines */
.lp-cta { background: linear-gradient(135deg, #f7911d 0%, #f68a1f 45%, #f4a41c 100%); color: var(--deo-ink); }
.lp-cta::before { background:
  radial-gradient(40% 70% at 92% 20%, rgba(255,214,90,0.55), transparent 70%),
  radial-gradient(36% 60% at 0% 100%, rgba(220,90,20,0.30), transparent 70%),
  radial-gradient(30% 50% at 45% 0%, rgba(255,255,255,0.12), transparent 70%); }
.lp-cta-grid { position: absolute; inset: 0; z-index: -1; pointer-events: none; overflow: hidden;
  background-image: linear-gradient(rgba(35,31,32,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(35,31,32,0.09) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(ellipse at 65% 40%, #000 15%, transparent 78%); mask-image: radial-gradient(ellipse at 65% 40%, #000 15%, transparent 78%); }
/* a soft glow that drifts across the grid and lights the lines it passes over */
.lp-cta-grid::before { content: ""; position: absolute; inset: 0;
  background-image: linear-gradient(rgba(255,255,255,0.85) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.85) 1px, transparent 1px);
  background-size: 56px 56px;
  -webkit-mask-image: radial-gradient(circle 240px at center, #000, transparent 70%); mask-image: radial-gradient(circle 240px at center, #000, transparent 70%);
  -webkit-mask-size: 480px 480px; mask-size: 480px 480px; -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;
  animation: lp-cta-glow 7s ease-in-out infinite alternate; }
@keyframes lp-cta-glow {
  0%   { -webkit-mask-position: 85% 10%; mask-position: 85% 10%; }
  50%  { -webkit-mask-position: 40% 90%; mask-position: 40% 90%; }
  100% { -webkit-mask-position: 5% 30%;  mask-position: 5% 30%; } }
/* light streaks running along one horizontal and one vertical grid line */
.lp-cta-grid::after { content: ""; position: absolute; left: 0; top: 168px; width: 180px; height: 1px;
  background: linear-gradient(90deg, transparent, #fff, transparent); box-shadow: 0 0 8px 1px rgba(255,255,255,0.7);
  animation: lp-cta-beam-x 3.5s linear infinite; }
@keyframes lp-cta-beam-x { from { transform: translateX(-200px); } to { transform: translateX(100vw); } }
.lp-cta-inner::before { content: ""; position: absolute; top: 0; left: calc(56px * 18); width: 1px; height: 140px; pointer-events: none; z-index: -1;
  background: linear-gradient(180deg, transparent, #fff, transparent); box-shadow: 0 0 8px 1px rgba(255,255,255,0.7);
  animation: lp-cta-beam-y 4.5s linear 1s infinite; }
@keyframes lp-cta-beam-y { from { transform: translateY(-160px); } to { transform: translateY(110vh); } }
.lp-cta p { color: var(--deo-ink); }
.lp-cta .lp-btn-primary { background: var(--deo-ink); color: #fff; }
.lp-cta .lp-btn-primary:hover { background: #000; }
.lp-cta.lp-on-dark .lp-btn-outline { color: var(--deo-ink); border-color: var(--deo-ink); background: rgba(255,255,255,0.12); }
.lp-cta.lp-on-dark .lp-btn-outline:hover { background: rgba(255,255,255,0.25); }
.lp-cta :focus-visible { outline-color: var(--deo-ink); }
@media (prefers-reduced-motion: reduce) {
  .lp-cta-grid::before, .lp-cta-grid::after, .lp-cta-inner::before { animation: none; }
  .lp-cta-grid::after, .lp-cta-inner::before { display: none; } }

/* Footer */
.lp-footer { background: #121110; }
.lp-footer::before { background:
  radial-gradient(30% 80% at 90% 10%, rgba(247,145,29,0.14), transparent 70%),
  radial-gradient(26% 70% at 10% 100%, rgba(247,195,23,0.07), transparent 70%); }
.lp-cobrand-lead { height: 56px; }
.lp-cobrand-sep { background: rgba(255,255,255,0.2); }
.lp-cobrand-school { background: #fff; padding: 8px 12px; border-radius: 4px; height: 84px; }
.lp-footer-links a { color: #fff; text-decoration-color: var(--deo-orange); }
.lp-footer-copy { border-top-color: rgba(255,255,255,0.1); }
@media (max-width: 640px) {
  .lp-logo-link img.lp-logo-full { height: 38px; }
  .lp-cobrand-lead { height: 44px; }
  .lp-cobrand-school { height: 66px; }
}


/* Responsive */
@media (max-width: 1080px) {
  .lp-perks { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .lp-swiper-track { grid-auto-columns: calc((100% - 2 * 20px) / 3); }
}
@media (max-width: 960px) {
  .lp-hero-grid { grid-template-columns: minmax(0, 1fr); }
  .lp-facts { max-width: 560px; }
  .lp-pillars { grid-template-columns: minmax(0, 1fr); gap: 40px; }
  .lp-cta-inner { grid-template-columns: minmax(0, 1fr); }
}
@media (max-width: 640px) {
  .lp-hide-sm { display: none !important; }
  .lp-header-inner { height: 64px; }
  .lp-logo-link img { height: 26px; }
  .lp-lang button { height: 44px; min-width: 44px; }
  .lp-hero { padding-top: calc(64px + 48px); }
  .lp-hero-copy .lp-btn, .lp-cta .lp-btn { width: 100%; }
  .lp-facts { padding: 28px 22px 20px; }
  .lp-facts::before { inset: 5px; }
  .lp-stat dd { font-size: 34px; }
  .lp-perks { grid-template-columns: minmax(0, 1fr); }
  .lp-swiper-track { grid-auto-columns: 72%; gap: 14px; }
  .lp-swiper-bar { gap: 16px; }
  .lp-swiper-count { display: none; }
  .lp-swiper-btn { width: 44px; height: 44px; }
  .lp-cobrand { gap: 20px; }
  .lp-cobrand-lead { height: 28px; }
  .lp-cobrand-school { height: 60px; }
  .lp-cobrand-sep { height: 52px; }
}
@media (max-width: 380px) {
  .lp-logo-link .lp-logo-full { display: none; }
  .lp-logo-link .lp-logo-icon { display: block; }
  .lp-actions { gap: 6px; }
  .lp-lang button { min-width: 36px; }
}
/* ── Stacked sections: each section pins in place and the next one slides up over it ── */
html.lp-stack, html.lp-stack body { overflow-x: clip; }
html.lp-stack .lp { --lp-head: 76px; }
html.lp-stack .lp-hero, html.lp-stack .lp-section, html.lp-stack .lp-cta {
  position: sticky; top: var(--lp-top, 0px);
  min-height: 100vh; min-height: 100svh; display: flex; flex-direction: column; justify-content: center; }
html.lp-stack .lp-section, html.lp-stack .lp-cta, html.lp-stack .lp-footer {
  box-shadow: 0 -18px 40px rgba(27, 26, 25, 0.10); }
html.lp-stack .lp-section, html.lp-stack .lp-cta {
  padding-top: calc(var(--lp-head) + clamp(32px, 5vw, 64px)); padding-bottom: clamp(32px, 5vw, 64px); }
/* the CTA and the footer share one screen: the CTA fills whatever height the footer leaves */
html.lp-stack .lp-cta { min-height: calc(100vh - var(--lp-foot, 0px)); min-height: calc(100svh - var(--lp-foot, 0px));
  padding-top: calc(var(--lp-head) + clamp(24px, 4vw, 48px)); padding-bottom: clamp(32px, 5vw, 64px); }
html.lp-stack .lp-footer { box-shadow: none; }
html.lp-stack .lp-cta::after { display: none; }
html.lp-stack .lp-hero > *, html.lp-stack .lp-section > *, html.lp-stack .lp-cta > * { width: 100%; }
/* the section being covered dims slightly as the next one slides over it */
html.lp-stack .lp-hero::after, html.lp-stack .lp-section::after, html.lp-stack .lp-cta::after {
  content: ""; position: absolute; inset: 0; z-index: 5; pointer-events: none;
  background: #000; opacity: calc(var(--lp-cover, 0) * 0.35); }
@media (max-width: 640px) { html.lp-stack .lp { --lp-head: 64px; } }
`;
  // Counts a number up (ease-out) once it scrolls into view; shows the final value at once under reduced motion.
  var LpCountUp = ({ to, format = String, duration = 1800, delay = 0, start = true, prefix = "", suffix = "" }) => {
    const reduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const [v, setV] = React.useState(reduce ? to : 0);
    React.useEffect(() => {
      if (reduce) { setV(to); return; }
      if (!start) return;
      let raf, t0;
      const step = (ts) => { if (!t0) t0 = ts; const p = Math.min(1, (ts - t0) / duration);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(step); };
      const timer = setTimeout(() => { raf = requestAnimationFrame(step); }, delay);
      return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
    }, [to, start]);
    return React.createElement(React.Fragment, null,
      React.createElement("span", { className: "lp-sr" }, prefix + format(to) + suffix),
      React.createElement("span", { "aria-hidden": "true" }, prefix, format(v),
        suffix && React.createElement("span", { className: "lp-stat-suffix" }, suffix)));
  };
  var LandingPage = ({ onLogin, onApply, member, onPortal, onLogout }) => {
    const [lang, setLang] = React.useState("de");
    const [scrollY, setScrollY] = React.useState(0);
    const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
    React.useEffect(() => {
      if (!profileMenuOpen) return;
      const close = () => setProfileMenuOpen(false);
      document.addEventListener("click", close);
      return () => document.removeEventListener("click", close);
    }, [profileMenuOpen]);
    // Signed-in members go straight to their portal instead of the login screen.
    const goLogin = member ? onPortal : onLogin;
    const loginLabel = member
      ? (lang === "de" ? "Zum Mitgliederportal" : "Go to Member Portal")
      : (lang === "de" ? "Mitglieder-Login" : "Member Login");
    React.useEffect(() => {
      const onScroll = () => setScrollY(window.scrollY > 8 ? 9 : 0);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    React.useEffect(() => { document.documentElement.lang = lang; }, [lang]);
    // Stacked sections: each section is position:sticky, so the next one slides up over it.
    // A section taller than the screen pins only once its bottom is reached (negative --lp-top),
    // so none of its content gets hidden. --lp-cover (0..1) dims the section being covered.
    React.useEffect(() => {
      const root = document.documentElement;
      root.classList.add("lp-stack");
      const secs = () => Array.from(document.querySelectorAll("#lp-main > section"));
      const layout = () => {
        const vh = window.innerHeight;
        const footer = document.querySelector(".lp-footer");
        root.style.setProperty("--lp-foot", (footer ? footer.offsetHeight : 0) + "px");
        secs().forEach((el) => el.style.setProperty("--lp-top", Math.min(0, vh - el.offsetHeight) + "px"));
        cover();
      };
      let raf = 0;
      const cover = () => {
        raf = 0;
        const vh = window.innerHeight;
        const list = secs();
        const footer = document.querySelector(".lp-footer");
        list.forEach((el, i) => {
          const next = list[i + 1] || footer;
          const top = next ? next.getBoundingClientRect().top : vh;
          const p = Math.max(0, Math.min(1, (vh - top) / vh));
          el.style.setProperty("--lp-cover", p.toFixed(3));
        });
      };
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(cover); };
      const ro = new ResizeObserver(layout);
      secs().forEach((el) => ro.observe(el));
      const footerEl = document.querySelector(".lp-footer");
      if (footerEl) ro.observe(footerEl);
      window.addEventListener("resize", layout);
      window.addEventListener("scroll", onScroll, { passive: true });
      layout();
      return () => {
        root.classList.remove("lp-stack");
        root.style.removeProperty("--lp-foot");
        ro.disconnect();
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener("resize", layout);
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
    const t = TRANSLATIONS[lang];

    /* ── Company / Alumni data ── */
    const alumni = [
      { name: "Matter Branding",      founder: "Dina Aly",          color: "#3A3A3A", initials: "M",  logo: "brand/inline/9f25ea2da2b0.png" },
      { name: "El Gouna",             founder: "Samih Sawiris",      color: "#E8B800", initials: "EG", logo: "brand/inline/ec7b8670a4a8.png" },
      { name: "Yodawy",               founder: "Karim Khashaba",     color: "#00B8A9", initials: "Y",  logo: "brand/inline/6f5667b72e08.png" },
      { name: "Orcas Tutoring",       founder: "Hossam Taher",       color: "#2563EB", initials: "OT", logo: "brand/inline/cc075f54fdd8.jpg" },
      { name: "Khazna",               founder: "Omar Salah",         color: "#1D4ED8", initials: "K",  logo: "brand/inline/5b3f3dc78858.png" },
      { name: "Partment",             founder: "Nadim Nagui",        color: "#374151", initials: "P",  logo: "brand/inline/efb4ca25e9cb.jpg" },
      { name: "Sekem",                founder: "Helmy Abouleish",    color: "#16A34A", initials: "S",  logo: "brand/inline/a64c7cee26e2.jpg" },
      { name: "El Sawy Culturewheel", founder: "Mohamed Elsawy",     color: "#0369A1", initials: "SC", logo: "brand/inline/f7c5da9c06d1.png" },
      { name: "TriFactory",           founder: "Ayman Hakki",        color: "#DC2626", initials: "TF", logo: "brand/inline/0aa59edcb38d.png" },
      { name: "FUFA",                 founder: "Farah El Ashiry",    color: "#7C3AED", initials: "F",  logo: "brand/inline/3894da6d4b87.jpg" },
    ];

    /* ── Membership benefits (icons: one outline family, 24px, 1.75 stroke) ── */
    const icon = (...children) => React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none",
      stroke: "currentColor", strokeWidth: 1.75, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" }, ...children);
    const perkCards = [
      { icon: icon(React.createElement("rect", { key: 1, x: 3, y: 4, width: 18, height: 17, rx: 2 }), React.createElement("path", { key: 2, d: "M16 2v4M8 2v4M3 10h18" })),
        title: lang === "de" ? "Exklusive Veranstaltungen" : "Exclusive events",
        desc:  lang === "de" ? "Früher Zugang zu DEO Leaders Veranstaltungen, Alumni-Treffen und privaten Networking-Dinners." : "Early access to DEO Leaders events, alumni gatherings and private networking dinners." },
      { icon: icon(React.createElement("path", { key: 1, d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }), React.createElement("circle", { key: 2, cx: 9, cy: 7, r: 4 }), React.createElement("path", { key: 3, d: "M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" })),
        title: lang === "de" ? "Gezieltes Networking" : "Curated networking",
        desc:  lang === "de" ? "Vernetze dich mit über 2.000 verifizierten Alumni-Führungskräften über alle Branchen und Kontinente hinweg." : "Connect with 2,000+ verified alumni leaders across industries and continents." },
      { icon: icon(React.createElement("rect", { key: 1, x: 2, y: 7, width: 20, height: 14, rx: 2 }), React.createElement("path", { key: 2, d: "M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" })),
        title: lang === "de" ? "Mitgliedervorteile" : "Member perks",
        desc:  lang === "de" ? "Stellenmarkt, Investitionsmöglichkeiten, Mentoring und Co-Founder-Matching." : "Job board, investment opportunities, mentorship and co-founder matching." },
      { icon: icon(React.createElement("polyline", { key: 1, points: "23 6 13.5 15.5 8.5 10.5 1 18" }), React.createElement("polyline", { key: 2, points: "17 6 23 6 23 12" })),
        title: lang === "de" ? "Sichtbarkeit & Reichweite" : "Brand & visibility",
        desc:  lang === "de" ? "Werde in unserer Medienberichterstattung, Interviews und Alumni-Spotlights vorgestellt." : "Get featured in our media coverage, interviews and alumni spotlights." },
    ];

    const partners = [
      { name: "Deutsche Botschaft Kairo", src: "brand/inline/5237e01ae9d1.png" },
      { name: "AHK Egypt", src: "brand/inline/9063742d8b37.png" },
      { name: "GIZ", src: "brand/inline/7d6c65641dd8.png" },
    ];

    const navScrolled = scrollY > 8;
    /* "At a glance" panel: reveal once when it scrolls into view */
    const factsRef = React.useRef(null);
    const [factsIn, setFactsIn] = React.useState(false);
    React.useEffect(() => {
      const el = factsRef.current;
      if (!el || typeof IntersectionObserver === "undefined") { setFactsIn(true); return; }
      const io = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { setFactsIn(true); io.disconnect(); }
      }, { threshold: 0.35 });
      io.observe(el);
      return () => io.disconnect();
    }, []);
    /* Community slider */
    const swRef = React.useRef(null);
    const swDrag = React.useRef(null);
    const [sw, setSw] = React.useState({ prev: false, next: true, w: 0.3, x: 0, first: 1, last: 5 });
    const [swPaused, setSwPaused] = React.useState(false);      // mouse is over the slider
    const [swStopped, setSwStopped] = React.useState(false);    // visitor pressed pause
    const swHold = React.useRef(0);                              // resume auto-play shortly after manual use
    const swTouch = () => { swHold.current = Date.now() + 6000; };
    const swReduce = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const swStep = () => {
      const el = swRef.current; const card = el && el.querySelector("li");
      if (!card) return el ? el.clientWidth : 0;
      return card.getBoundingClientRect().width + (parseFloat(getComputedStyle(el).columnGap) || 0);
    };
    // The list is rendered twice so it can scroll forever: one copy's width
    const swHalf = () => {
      const el = swRef.current; const dup = el && el.children[alumni.length];
      return dup ? dup.offsetLeft - el.children[0].offsetLeft : 0;
    };
    const swUpdate = () => {
      const el = swRef.current; if (!el) return;
      const step = swStep() || 1, half = swHalf() || el.scrollWidth;
      const left = el.scrollLeft % half;
      const first = (Math.round(left / step) % alumni.length) + 1;
      const perView = Math.max(1, Math.round(el.clientWidth / step));
      setSw({ prev: true, next: true, w: Math.min(1, el.clientWidth / half), x: left / half,
        first, last: ((first + perView - 2) % alumni.length) + 1 });
    };
    const swGo = (dir, loop) => {
      const el = swRef.current; if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      const left = loop && dir > 0 && el.scrollLeft >= max - 4 ? 0 : el.scrollLeft + dir * swStep();
      el.scrollTo({ left, behavior: swReduce ? "auto" : "smooth" });
    };
    React.useEffect(() => {
      swUpdate();
      window.addEventListener("resize", swUpdate);
      return () => window.removeEventListener("resize", swUpdate);
    }, []);
    // Continuous auto-scroll (~45px/s), looping seamlessly over the duplicated list.
    // Pauses on hover, while dragging, and for a few seconds after manual use.
    React.useEffect(() => {
      if (swPaused || swReduce) return;
      const el = swRef.current; if (!el) return;
      let raf, last = performance.now(), pos = el.scrollLeft;
      const tick = (now) => {
        const dt = Math.min(64, now - last); last = now;
        const half = swHalf();
        if (Date.now() < swHold.current || el.classList.contains("is-dragging") || document.visibilityState !== "visible") {
          pos = el.scrollLeft;
        } else {
          pos += dt * 0.045;
        }
        if (half && pos >= half) pos -= half;
        if (Math.abs(el.scrollLeft - pos) >= 0.5) el.scrollLeft = pos;
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [swPaused]);
    const swDragStart = (e) => {
      if (e.pointerType !== "mouse" || e.button !== 0) return;
      swTouch();
      const el = swRef.current;
      swDrag.current = { x: e.clientX, left: el.scrollLeft };
      el.classList.add("is-dragging");
      const move = (ev) => { el.scrollLeft = swDrag.current.left - (ev.clientX - swDrag.current.x); };
      const up = () => {
        window.removeEventListener("pointermove", move);
        window.removeEventListener("pointerup", up);
        const step = swStep() || 1, from = el.scrollLeft;
        el.classList.remove("is-dragging");
        el.scrollLeft = from;
        el.scrollTo({ left: Math.round(from / step) * step, behavior: swReduce ? "auto" : "smooth" });
      };
      window.addEventListener("pointermove", move);
      window.addEventListener("pointerup", up);
    };
    const swArrow = (d) => h("svg", { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.75,
      strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", focusable: "false" }, h("path", { d }));
    const fullName = member ? `${member.firstName || ""} ${member.lastName || ""}`.trim() : "";
    const h = React.createElement;

    /* Small building blocks */
    const SectionHead = ({ eyebrow, title, lead, onDark }) =>
      h("div", { className: "lp-sec-head" },
        h("div", null,
          h("p", { className: "lp-eyebrow" + (onDark ? " lp-eyebrow-dark" : "") }, eyebrow),
          h("h2", { className: "lp-h2" }, title)),
        lead && h("p", { className: "lp-lead" }, lead));
    const ApplyBtn = (variant) => !member && h("button", { type: "button", className: "lp-btn " + variant, onClick: onApply },
      lang === "de" ? "Mitgliedschaft beantragen" : "Apply for membership",
      h("span", { "aria-hidden": "true" }, "→"));
    const LoginBtn = (variant) => h("button", { type: "button", className: "lp-btn " + variant, onClick: goLogin }, loginLabel);

    return h("div", { className: "lp" },
      h("style", null, LANDING_CSS),
      h("a", { className: "lp-skip", href: "#lp-main" }, lang === "de" ? "Zum Inhalt springen" : "Skip to content"),

      /* ══ HEADER ══════════════════════════════════════════════ */
      h("header", { className: "lp-header" + (navScrolled ? " is-scrolled" : "") },
        h("div", { className: "lp-wrap lp-header-inner" },
          h("a", { className: "lp-logo-link", href: "#top", "aria-label": lang === "de" ? "DEO Leaders – zum Seitenanfang" : "DEO Leaders – back to top",
              onClick: (e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } },
            h("img", { className: "lp-logo-full", src: "brand/leaders-dark.png", alt: "DEO Leaders", width: 73, height: 44 }),
            h("img", { className: "lp-logo-icon", src: "brand/leaders-icon.png", alt: "DEO Leaders", width: 27, height: 32 })),
          h("div", { className: "lp-actions" },
            h("div", { className: "lp-lang", role: "group", "aria-label": lang === "de" ? "Sprache" : "Language" },
              ["de", "en"].map((l) => h("button", { key: l, type: "button", "aria-pressed": lang === l, lang: l,
                "aria-label": l === "de" ? "Deutsch" : "English", onClick: () => setLang(l) }, l.toUpperCase()))),
            !member && h("button", { type: "button", className: "lp-btn lp-btn-outline lp-btn-sm lp-hide-sm", onClick: onLogin },
              lang === "de" ? "Login" : "Log in"),
            !member
              ? h("button", { type: "button", className: "lp-btn lp-btn-primary lp-btn-sm", onClick: onApply },
                  lang === "de" ? "Bewerben" : "Apply")
              : h("div", { className: "lp-profile" },
                  h("button", { type: "button", className: "lp-profile-btn", "aria-haspopup": "menu", "aria-expanded": profileMenuOpen,
                      "aria-label": (lang === "de" ? "Kontomenü für " : "Account menu for ") + fullName,
                      onClick: (e) => { e.stopPropagation(); setProfileMenuOpen((o) => !o); } },
                    h(Avatar, { member, size: 36 }),
                    h("span", { className: "lp-hide-sm" }, member.firstName || ""),
                    h("svg", { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, "aria-hidden": "true" },
                      h("polyline", { points: "6 9 12 15 18 9" }))),
                  profileMenuOpen && h("div", { className: "lp-menu", role: "menu", onClick: (e) => e.stopPropagation(),
                      onKeyDown: (e) => { if (e.key === "Escape") setProfileMenuOpen(false); } },
                    h("div", { className: "lp-menu-head" },
                      h("strong", null, fullName),
                      member.email && h("span", null, member.email)),
                    h("button", { type: "button", role: "menuitem", autoFocus: true, onClick: () => { setProfileMenuOpen(false); onPortal(); } },
                      lang === "de" ? "Zum Mitgliederportal" : "Go to member portal"),
                    h("button", { type: "button", role: "menuitem", className: "is-danger", onClick: () => { setProfileMenuOpen(false); onLogout(); } },
                      lang === "de" ? "Abmelden" : "Sign out"))))
        )
      ),

      h("main", { id: "lp-main", tabIndex: -1 },
        /* ══ HERO — typographic, no photography ════════════════ */
        h("section", { className: "lp-hero", "aria-labelledby": "lp-hero-title" },
          h("div", { className: "lp-wrap lp-hero-grid" },
            h("div", { className: "lp-hero-copy" },
              h("p", { className: "lp-eyebrow" },
                lang === "de" ? "Alumni-Netzwerk der DEO Kairo" : "Alumni network of DEO Cairo"),
              h("h1", { id: "lp-hero-title", className: "lp-h1" },
                lang === "de" ? "Verbinden. Beeinflussen. " : "Connect. Influence. ",
                h("span", { className: "lp-accent" }, lang === "de" ? "Führen." : "Lead.")),
              h("p", { className: "lp-hero-tagline" },
                lang === "de" ? "Verbindungen stärken, um größere Wirkung zu entfalten." : "Powering connections to create bigger impact."),
              h("p", { className: "lp-hero-sub" }, t.hero_sub),
              h("div", { className: "lp-cta-row" },
                ApplyBtn("lp-btn-ink"),
                LoginBtn("lp-btn-outline"))),
            h("aside", { ref: factsRef, className: "lp-facts" + (factsIn ? " is-in" : ""), "aria-labelledby": "lp-facts-title" },
              h("p", { id: "lp-facts-title", className: "lp-facts-title" }, lang === "de" ? "Auf einen Blick" : "At a glance"),
              h("dl", { className: "lp-stats" },
                [
                  [h(LpCountUp, { to: 2000, start: factsIn, delay: 350, format: (n) => n.toLocaleString(lang === "de" ? "de-DE" : "en-US"), suffix: "+" }),
                    lang === "de" ? "Alumni weltweit" : "Alumni worldwide"],
                  [h(LpCountUp, { to: 10, start: factsIn, delay: 500, duration: 1500, prefix: "$", format: (n) => n + "B", suffix: "+" }),
                    lang === "de" ? "Verwaltetes Vermögen" : "Assets under management"],
                  ["1873", lang === "de" ? "Gründung der Schule" : "School founded"],
                  ["2026", lang === "de" ? "Gründung des Netzwerks" : "Network established"],
                ].map(([value, label], i) => h("div", { key: label, className: "lp-stat", style: { "--i": i } },
                  h("dt", null, label),
                  h("dd", null, value)))),
              h("p", { className: "lp-facts-foot" },
                (lang === "de" ? ["Kairo", "Berlin", "weltweit"] : ["Cairo", "Berlin", "worldwide"]).map((w) => h("span", { key: w }, w)))))
        ),

        /* ══ WHO WE ARE ══════════════════════════════════════════ */
        h("section", { className: "lp-section", "aria-label": lang === "de" ? "Wer wir sind" : "Who we are" },
          h("div", { className: "lp-wrap" },
            SectionHead({
                eyebrow: lang === "de" ? "Wer wir sind" : "Who we are",
                title: lang === "de" ? "Drei Säulen, ein Netzwerk" : "Three pillars, one network",
                lead: lang === "de"
                  ? "Eine Schule mit 150 Jahren Geschichte, eine Alumni-Gemeinschaft weltweit und starke institutionelle Partner."
                  : "A school with 150 years of history, a worldwide alumni community and strong institutional partners." }),
            h("div", { className: "lp-pillars" },
              h("article", { className: "lp-pillar" },
                h("span", { className: "lp-pillar-num", "aria-hidden": "true" }, "01"),
                h("div", { className: "lp-pillar-stage" },
                  h("img", { className: "lp-stage-school", src: "brand/deo-school-logo.png", alt: "Deutsche Evangelische Oberschule Kairo", loading: "lazy" })),
                h("p", { className: "lp-meta" }, lang === "de" ? "Gegründet 1873" : "Founded 1873"),
                h("h3", { className: "lp-h3" }, t.p1_title),
                h("p", null, t.p1_desc)),
              h("article", { className: "lp-pillar" },
                h("div", { className: "lp-pillar-stage" },
                  h("img", { className: "lp-stage-leaders", src: "brand/leaders-horizontal.png", alt: "DEO Leaders", loading: "lazy" })),
                h("p", { className: "lp-meta" }, lang === "de" ? "Alumni-Netzwerk · Est. 2026" : "Alumni network · Est. 2026"),
                h("h3", { className: "lp-h3" }, t.p2_title),
                h("p", null, t.p2_desc)),
              h("article", { className: "lp-pillar" },
                h("span", { className: "lp-pillar-num", "aria-hidden": "true" }, "03"),
                h("div", { className: "lp-pillar-stage" },
                  h("ul", { className: "lp-partner-logos", "aria-label": lang === "de" ? "Partner" : "Partners" },
                    partners.map((p) => h("li", { key: p.name },
                      h("img", { src: p.src, alt: p.name, loading: "lazy" }))))),
                h("p", { className: "lp-meta" }, lang === "de" ? "Institutionelle Partner" : "Institutional partners"),
                h("h3", { className: "lp-h3" }, t.p3_title),
                h("p", null, t.p3_desc))))
        ),

        /* ══ COMMUNITY ══════════════════════════════════════════ */
        h("section", { className: "lp-section lp-section-subtle", "aria-label": lang === "de" ? "Unsere Community" : "Our community" },
          h("div", { className: "lp-wrap" },
            SectionHead({
              eyebrow: lang === "de" ? "Unsere Community" : "Our community",
              title: lang === "de" ? "Von DEO-Alumni aufgebaut" : "Built by DEO alumni",
              lead: lang === "de"
                ? "Unsere Alumni haben einige der bekanntesten Unternehmen und Institutionen Ägyptens gegründet und mitgeprägt."
                : "Our alumni have shaped and co-founded some of Egypt's most recognised companies and institutions." }),
            h("div", { className: "lp-swiper", role: "region", "aria-roledescription": lang === "de" ? "Karussell" : "carousel",
                "aria-label": lang === "de" ? "Alumni-Unternehmen" : "Alumni companies",
                onMouseEnter: () => setSwPaused(true), onMouseLeave: () => setSwPaused(false) },
              h("ul", { ref: swRef, className: "lp-swiper-track", tabIndex: 0, onPointerDown: swDragStart,
                  onTouchStart: swTouch, onWheel: swTouch,
                  onKeyDown: (e) => { if (e.key === "ArrowRight") { e.preventDefault(); swTouch(); swGo(1); } if (e.key === "ArrowLeft") { e.preventDefault(); swTouch(); swGo(-1); } } },
                alumni.concat(alumni).map(({ name, founder, initials, logo }, j) => {
                  const i = j % alumni.length, dup = j >= alumni.length;
                  return h("li", { key: (dup ? "dup-" : "") + name, className: "lp-alumni-card", "aria-hidden": dup || undefined,
                      "aria-roledescription": lang === "de" ? "Folie" : "slide",
                      "aria-label": (i + 1) + " / " + alumni.length + ": " + name },
                    h("div", { className: "lp-alumni-logo" },
                      logo
                        ? h("img", { src: logo, alt: "", loading: "lazy", draggable: false })
                        : h("span", { className: "lp-alumni-initials", "aria-hidden": "true" }, initials)),
                    h("p", { className: "lp-alumni-name" }, name),
                    h("p", { className: "lp-alumni-founder" }, founder)); }))))
        ),

        /* ══ MEMBERSHIP ══════════════════════════════════════════ */
        h("section", { className: "lp-section", "aria-label": lang === "de" ? "Mitgliedschaft" : "Membership" },
          h("div", { className: "lp-wrap" },
            SectionHead({
              eyebrow: lang === "de" ? "Mitgliedschaft" : "Membership",
              title: lang === "de" ? "Für Führungs­persönlichkeiten" : "Built for leaders" }),
            h("ul", { className: "lp-perks" },
              perkCards.map((card) => h("li", { key: card.title, className: "lp-perk" },
                h("span", { className: "lp-perk-icon" }, card.icon),
                h("h3", { className: "lp-h3" }, card.title),
                h("p", null, card.desc)))))
        ),

        /* ══ CALL TO ACTION ══════════════════════════════════════ */
        h("section", { className: "lp-cta lp-on-dark", "aria-labelledby": "lp-cta-title" },
          h("div", { className: "lp-cta-grid", "aria-hidden": "true" }),
          h("div", { className: "lp-wrap lp-cta-inner" },
            h("div", null,
              h("h2", { id: "lp-cta-title", className: "lp-h2" }, lang === "de" ? "Bereit beizutreten?" : "Ready to join?"),
              h("p", null, t.cta_sub)),
            h("div", { className: "lp-cta-row" },
              ApplyBtn("lp-btn-primary"),
              LoginBtn("lp-btn-outline"))))
      ),

      /* ══ FOOTER — lead mark + school endorsement ══════════════ */
      h("footer", { className: "lp-footer" },
        h("div", { className: "lp-wrap lp-footer-inner" },
          h("div", { className: "lp-cobrand" },
            h("img", { className: "lp-cobrand-lead", src: "brand/leaders-dark.png", alt: "DEO Leaders", loading: "lazy" }),
            h("span", { className: "lp-cobrand-sep", "aria-hidden": "true" }),
            h("img", { className: "lp-cobrand-school", src: "brand/deo-school-logo.png", alt: "Deutsche Evangelische Oberschule Kairo", loading: "lazy" })),
          h("ul", { className: "lp-footer-links" },
            h("li", null, h("a", { href: "mailto:deoleaders@deokairo.de" }, "deoleaders@deokairo.de")),
            h("li", null, h("a", { href: "https://www.deoleaders.com", target: "_blank", rel: "noreferrer" }, "deoleaders.com")))),
        h("div", { className: "lp-wrap" },
          h("p", { className: "lp-footer-copy" },
            h("span", null, t.footer_copy))))
    );
  };

  // LoginPage: handles Sign In, First-Time Sign Up, and Forgot Password flows.
  // All sign-in results are passed up to App via callbacks so App controls routing.
  var LoginPage = ({ onLogin, onSignup, onSignupAccount }) => {
    const [tab, setTab] = useState("signin"); // "signin" | "register" | "forgot"
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [forgotSent, setForgotSent] = useState(false);

    const handleSignIn = async (e) => {
      e && e.preventDefault();
      if (!email || !pw) { setError("Please enter your email and password."); return; }
      setLoading(true); setError("");
      const { data, error: err } = await deoAuth.signIn(email.trim().toLowerCase(), pw);
      setLoading(false);
      if (err) { setError(err.message); return; }
      onLogin(data.user);
    };

    const [registered, setRegistered] = useState(false);
    const handleRegister = async (e) => {
      e && e.preventDefault();
      if (!email || !pw) { setError("Email and password are required."); return; }
      if (pw !== pw2) { setError("Passwords do not match."); return; }
      if (pw.length < 8) { setError("Password must be at least 8 characters."); return; }
      setLoading(true); setError("");
      // The server checks the email belongs to an approved member and emails a confirmation link;
      // the member is signed in when they click it (see deoAuth.init).
      const { data, error: err } = await deoAuth.signUp(email.trim().toLowerCase(), pw);
      setLoading(false);
      if (err) { setError(err.message); return; }
      if (data && !data.needsVerification) { handleSignIn(); return; } // no confirmation email: sign in right away
      setRegistered(true);
    };

    const handleForgot = async (e) => {
      e && e.preventDefault();
      if (!email) { setError("Please enter your email address."); return; }
      setLoading(true); setError("");
      const { error: err } = await deoAuth.sendPasswordLink(email.trim().toLowerCase());
      setLoading(false);
      if (err) { setError(err.message); return; }
      setForgotSent(true);
    };

    const h = React.createElement;
    const [showPw, setShowPw] = useState(false);
    const go = (key) => { setTab(key); setError(""); setForgotSent(false); setRegistered(false); setShowPw(false); };
    const goHome = () => window.dispatchEvent(new CustomEvent("deo-nav-landing"));

    // Small inline icon set (stroke icons, inherit currentColor)
    const ICONS = {
      mail: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z|M22 6l-10 7L2 6",
      lock: "M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z|M7 11V7a5 5 0 0 1 10 0v4",
      eye: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z|M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
      eyeOff: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94|M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19|M14.12 14.12a3 3 0 1 1-4.24-4.24|M1 1l22 22",
      arrowL: "M19 12H5|M12 19l-7-7 7-7",
      arrowR: "M5 12h14|M12 5l7 7-7 7",
      alert: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z|M12 8v4|M12 16h.01",
      calendar: "M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z|M16 2v4|M8 2v4|M3 10h18",
      users: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2|M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z|M23 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75",
      award: "M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14z|M8.21 13.89L7 23l5-3 5 3-1.21-9.12",
      key: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
      inbox: "M22 12h-6l-2 3h-4l-2-3H2|M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
    };
    const Icon = (name, size = 18) => h("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
      ICONS[name].split("|").map((d, i) => h("path", { key: i, d })));

    // Field with leading icon, optional trailing action and optional link beside the label
    const Field = ({ id, label, icon, type, value, onChange, autoComplete, aside, placeholder }) => {
      const isPw = type === "password";
      return h("div", { className: "lg-field" },
        h("div", { className: "lg-label-row" },
          h("label", { htmlFor: id, className: "lg-label" }, label),
          aside || null),
        h("div", { className: "lg-input-wrap" },
          h("span", { className: "lg-input-icon" }, Icon(icon)),
          h("input", { id, className: "ui-input lg-input" + (isPw ? " lg-has-toggle" : ""), type: isPw && showPw ? "text" : type, value, placeholder,
            autoComplete, onChange: (e) => onChange(e.target.value), required: true }),
          isPw && h("button", { type: "button", className: "lg-toggle", onClick: () => setShowPw((v) => !v), "aria-label": showPw ? "Hide password" : "Show password" },
            Icon(showPw ? "eyeOff" : "eye"))));
    };

    const Submit = (label, busyLabel, onClick) => h("button", { type: "submit", className: "lg-btn lg-btn-primary", disabled: loading, onClick },
      loading ? h("span", { className: "lg-spinner", "aria-hidden": "true" }) : null,
      h("span", null, loading ? busyLabel : label),
      !loading ? Icon("arrowR", 17) : null);

    const Header = (title, sub) => h("div", { className: "lg-head" },
      h("h1", { className: "lg-title" }, title),
      h("p", { className: "lg-sub" }, sub));

    const BackToSignIn = () => h("button", { type: "button", className: "lg-link lg-back", onClick: () => go("signin") }, Icon("arrowL", 16), "Back to sign in");

    const ErrorBox = error ? h("div", { className: "lg-alert", role: "alert" }, Icon("alert", 18), h("span", null, error)) : null;

    const Sent = (title, children, btnLabel) => h("div", { className: "lg-sent" },
      h("div", { className: "lg-sent-icon" }, Icon("inbox", 28)),
      h("h1", { className: "lg-title" }, title),
      h("p", { className: "lg-sub" }, children),
      h("button", { type: "button", className: "lg-btn lg-btn-ghost", onClick: () => go("signin") }, Icon("arrowL", 16), btnLabel));

    let body;
    if (tab === "signin") {
      body = h("form", { onSubmit: handleSignIn, className: "lg-form", noValidate: true },
        Header("Welcome back", "Sign in to your DEO Leaders account."),
        ErrorBox,
        Field({ id: "lg-email", label: "Email address", icon: "mail", type: "email", value: email, onChange: setEmail, autoComplete: "email", placeholder: "you@example.com" }),
        Field({ id: "lg-pw", label: "Password", icon: "lock", type: "password", value: pw, onChange: setPw, autoComplete: "current-password", placeholder: "Your password",
          aside: h("button", { type: "button", className: "lg-link lg-link-sm", onClick: () => go("forgot") }, "Forgot password?") }),
        Submit("Sign in", "Signing in…", handleSignIn),
        h("div", { className: "lg-divider" }, h("span", null, "First time here?")),
        h("button", { type: "button", className: "lg-btn lg-btn-ghost", onClick: () => go("register") }, Icon("key", 17), "Set up your member password"),
        h("div", { className: "lg-apply" },
          h("span", null, "Not a member yet?"),
          h("button", { type: "button", className: "lg-link lg-link-strong", onClick: onSignup }, "Apply for membership", Icon("arrowR", 15))));
    } else if (tab === "register") {
      body = registered
        ? Sent("Check your email", ["We sent a link to ", h("strong", { key: "e" }, email), ". Open it to finish setting up your account and choose your password. If you don't see it, check your spam folder."], "Back to sign in")
        : h("form", { onSubmit: handleRegister, className: "lg-form", noValidate: true },
            BackToSignIn(),
            Header("Set up your password", "For existing DEO members signing in for the first time. Use the email address you are registered with."),
            ErrorBox,
            Field({ id: "lg-email", label: "Member email", icon: "mail", type: "email", value: email, onChange: setEmail, autoComplete: "email", placeholder: "you@example.com" }),
            Field({ id: "lg-pw", label: "New password", icon: "lock", type: "password", value: pw, onChange: setPw, autoComplete: "new-password", placeholder: "At least 8 characters" }),
            Field({ id: "lg-pw2", label: "Confirm password", icon: "lock", type: "password", value: pw2, onChange: setPw2, autoComplete: "new-password", placeholder: "Repeat your password" }),
            pw.length > 0 && h("div", { className: "lg-hint" + (pw.length >= 8 ? " lg-hint-ok" : "") }, pw.length >= 8 ? "✓ Length looks good" : `${8 - pw.length} more character${8 - pw.length === 1 ? "" : "s"} needed`),
            Submit("Set up password", "Setting up…", handleRegister));
    } else {
      body = forgotSent
        ? Sent("Check your email", ["A password reset link is on its way to ", h("strong", { key: "e" }, email), ". If you don't see it, check your spam folder."], "Back to sign in")
        : h("form", { onSubmit: handleForgot, className: "lg-form", noValidate: true },
            BackToSignIn(),
            Header("Reset your password", "Enter your email address and we'll send you a link to choose a new password."),
            ErrorBox,
            Field({ id: "lg-email", label: "Email address", icon: "mail", type: "email", value: email, onChange: setEmail, autoComplete: "email", placeholder: "you@example.com" }),
            Submit("Send reset link", "Sending…", handleForgot));
    }

    const features = [
      ["calendar", "Exclusive events", "Early access to Gründerforum & alumni gatherings"],
      ["users", "Curated networking", "Connect with 150+ verified alumni leaders"],
      ["award", "Member perks", "Job board, investment opportunities & mentorship"]
    ];

    return h("div", { className: "lg-page" },
      // ── Left: brand panel ──
      h("aside", { className: "login-left-panel lg-brand" },
        h("div", { className: "lg-grid-light", "aria-hidden": "true" }),
        h("div", { className: "lg-grid-beam", "aria-hidden": "true" }),
        h("div", { className: "lg-brand-top" },
          h("img", { src: DEO_LEADERS_LOGO_VW, alt: "DEO Leaders", className: "lg-brand-logo", onClick: goHome })),
        h("div", { className: "lg-brand-mid" },
          h("div", { className: "lg-eyebrow" }, "Seit 1873"),
          h("h2", { className: "lg-brand-title" }, "Where DEO alumni ", h("em", null, "lead together.")),
          h("p", { className: "lg-brand-copy" }, "The exclusive network of Deutsche Evangelische Oberschule graduates — connecting leaders across Egypt, Germany and the world."),
          h("ul", { className: "lg-features" },
            features.map(([icon, t, d]) => h("li", { key: t, className: "lg-feature" },
              h("span", { className: "lg-feature-icon" }, Icon(icon, 20)),
              h("div", null,
                h("div", { className: "lg-feature-title" }, t),
                h("div", { className: "lg-feature-desc" }, d)))))),
        h("div", { className: "lg-stats" },
          [[h(LpCountUp, { to: 150, delay: 300, duration: 1600, suffix: "+" }), "Alumni leaders"],
           [h(LpCountUp, { to: 1873, delay: 450, duration: 2000 }), "DEO founded in Cairo"]].map(([n, l]) =>
            h("div", { key: l, className: "lg-stat" }, h("div", { className: "lg-stat-num" }, n), h("div", { className: "lg-stat-label" }, l))))),

      // ── Right: auth panel ──
      h("main", { className: "login-right-panel lg-auth" },
        h("div", { className: "lg-auth-top" },
          h("img", { src: DEO_LEADERS_LOGO_VW, alt: "DEO Leaders", className: "lg-mobile-logo", onClick: goHome }),
          h("button", { type: "button", className: "lg-link lg-home", onClick: goHome }, Icon("arrowL", 16), "Back to home")),
        h("div", { className: "lg-card", key: tab + (registered ? "-r" : "") + (forgotSent ? "-f" : "") }, body),
        h("p", { className: "lg-legal" }, "Trouble signing in? ", h("a", { href: "mailto:deoleaders@deokairo.de" }, "Contact the DEO Leaders team")))
    );
  };

  // ── ResetPasswordPage: shown when user returns via password-reset email link ──
  var ResetPasswordPage = ({ onDone }) => {
    const [pw, setPw] = useState("");
    const [pw2, setPw2] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [done, setDone] = useState(false);

    const handleReset = async (e) => {
      e && e.preventDefault();
      if (!pw || !pw2) { setError("Please enter your new password twice."); return; }
      if (pw !== pw2) { setError("Passwords do not match."); return; }
      if (pw.length < 8) { setError("Password must be at least 8 characters."); return; }
      setLoading(true); setError("");
      const { error: err } = await deoAuth.resetPassword(pw);
      setLoading(false);
      if (err) { setError(err.message); return; }
      setDone(true);
      setTimeout(() => onDone(), 2000);
    };

    return React.createElement("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${CREAM} 0%, #e8e0d0 100%)` } },
      React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: "48px 40px", width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: `1px solid ${BORDER}` } },
        done
          ? React.createElement("div", { style: { textAlign: "center" } },
              React.createElement("div", { style: { fontSize: 40, marginBottom: 14 } }, "✅"),
              React.createElement("div", { style: { fontSize: 20, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, "Password Updated!"),
              React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", marginTop: 8 } }, "Redirecting you to the portal…")
            )
          : React.createElement("form", { onSubmit: handleReset, style: { display: "flex", flexDirection: "column", gap: 16 } },
              React.createElement("div", { style: { textAlign: "center", marginBottom: 8 } },
                React.createElement("div", { style: { fontSize: 32, marginBottom: 8 } }, "🔐"),
                React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, "Set New Password"),
                React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", marginTop: 6 } }, "Choose a strong password for your DEO Leaders account.")
              ),
              error && React.createElement("div", { style: { background: "#fef2f2", border: "1px solid #fecaca", borderRadius: 8, padding: "10px 14px", fontSize: 13, color: "#dc2626" } }, error),
              React.createElement(Input, { label: "New Password (min 8 chars)", type: "password", value: pw, onChange: setPw }),
              React.createElement(Input, { label: "Confirm New Password", type: "password", value: pw2, onChange: setPw2 }),
              React.createElement(Btn, { onClick: handleReset, style: { width: "100%", padding: "13px", textAlign: "center", opacity: loading ? 0.7 : 1 } }, loading ? "Updating…" : "Update Password")
            )
      )
    );
  };

  // ── PendingApprovalPage: shown after sign-up when no active member record found ──
  var PendingApprovalPage = ({ email, onLogout }) => React.createElement("div", { style: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: `linear-gradient(135deg, ${CREAM} 0%, #e8e0d0 100%)` } },
    React.createElement("div", { style: { background: "#fff", borderRadius: 20, padding: "48px 40px", width: "100%", maxWidth: 440, boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: `1px solid ${BORDER}`, textAlign: "center" } },
      React.createElement("div", { style: { fontSize: 40, marginBottom: 16 } }, "⏳"),
      React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 10 } }, "Application Under Review"),
      React.createElement("div", { style: { fontSize: 14, color: "#6b7280", lineHeight: 1.7, marginBottom: 24 } },
        "Your account (", React.createElement("strong", null, email), ") has been created. A DEO Leaders admin will review and activate your membership.",
        React.createElement("br"), React.createElement("br"),
        "You will be able to sign in once your membership is approved."
      ),
      React.createElement(Btn, { onClick: onLogout, variant: "secondary" }, "Sign Out")
    )
  );

  // ── AdminPermissions: super_admin can promote / demote member roles ──────────
  var AdminPermissions = ({ members, setMembers, currentMember }) => {
    const [search, setSearch] = useState("");
    const [confirm, setConfirm] = useState(null); // { member, newRole }
    const [busy, setBusy] = useState(false);

    const isSuperAdmin = currentMember && currentMember.userRole === "super_admin";

    const ROLE_LABELS = { member: "Member", admin: "Admin", super_admin: "Super Admin" };
    const ROLE_COLOR  = { member: "#6b7280", admin: "#3b82f6", super_admin: GOLD };

    const filtered = (members || []).filter((m) =>
      `${m.firstName} ${m.lastName} ${m.email}`.toLowerCase().includes(search.toLowerCase())
    );

    const applyRoleChange = async () => {
      if (!confirm) return;
      setBusy(true);
      try {
        await db.rpc("change_member_role", { target_member_id: confirm.member.id, new_role: confirm.newRole });
        setMembers((prev) => prev.map((m) => m.id === confirm.member.id ? { ...m, userRole: confirm.newRole } : m));
        setConfirm(null);
      } catch (e) {
        alert("Error: " + e.message);
      }
      setBusy(false);
    };

    const nextRoleOptions = (current) => {
      if (current === "member")      return ["admin", "super_admin"];
      if (current === "admin")       return ["member", "super_admin"];
      if (current === "super_admin") return ["member", "admin"];
      return [];
    };

    return React.createElement("div", null,
      React.createElement("div", { style: { fontSize: 13, color: "#6b7280", marginBottom: 20, lineHeight: 1.6 } },
        isSuperAdmin
          ? "As a Super Admin, you can promote members to Admin or Super Admin, and demote admins."
          : "Only Super Admins can change member roles."
      ),
      !isSuperAdmin && React.createElement("div", { style: { background: "#fef9ec", border: `1px solid ${GOLD}44`, borderRadius: 10, padding: "14px 18px", fontSize: 13, color: "#9a4a00" } }, "🔒 You do not have permission to change roles."),
      isSuperAdmin && React.createElement("div", null,
        // Search
        React.createElement("div", { style: { marginBottom: 16 } },
          React.createElement(Input, { label: "Search members", value: search, onChange: setSearch, placeholder: "Name or email…" })
        ),
        // Table
        React.createElement("div", { className: "admin-table", style: { background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" } },
          React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, padding: "10px 16px", background: "#f9f9f9", borderBottom: `1px solid ${BORDER}`, fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.6px" } },
            React.createElement("div", null, "Member"),
            React.createElement("div", null, "Current Role"),
            React.createElement("div", null, "Actions")
          ),
          filtered.map((m) => React.createElement("div", { key: m.id, style: { display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: 12, padding: "12px 16px", borderBottom: `1px solid #f5f5f5`, alignItems: "center" } },
            React.createElement("div", null,
              React.createElement("div", { style: { fontWeight: 600, fontSize: 13, color: DARK } }, m.firstName, " ", m.lastName),
              React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, m.email)
            ),
            React.createElement("div", null,
              React.createElement(Badge, { label: ROLE_LABELS[m.userRole] || m.userRole, color: ROLE_COLOR[m.userRole] || "#6b7280" })
            ),
            React.createElement("div", { style: { display: "flex", gap: 6 } },
              nextRoleOptions(m.userRole).map((role) =>
                React.createElement(Btn, { key: role, small: true,
                  variant: role === "member" ? "ghost" : role === "super_admin" ? "primary" : "secondary",
                  onClick: () => setConfirm({ member: m, newRole: role })
                }, role === "member" ? "↓ Demote" : role === "super_admin" ? "⭐ Super" : "↑ Admin")
              )
            )
          ))
        )
      ),
      // Confirm modal
      confirm && React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999 } },
        React.createElement("div", { style: { background: "#fff", borderRadius: 16, padding: "28px 32px", maxWidth: 380, width: "90%", boxShadow: "0 25px 60px rgba(0,0,0,0.2)" } },
          React.createElement("div", { style: { fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 10 } }, "Confirm Role Change"),
          React.createElement("div", { style: { fontSize: 14, color: "#6b7280", lineHeight: 1.6, marginBottom: 20 } },
            "Change ", React.createElement("strong", null, confirm.member.firstName, " ", confirm.member.lastName), "'s role from ",
            React.createElement("strong", null, ROLE_LABELS[confirm.member.userRole]), " to ",
            React.createElement("strong", null, ROLE_LABELS[confirm.newRole]), "?"
          ),
          React.createElement("div", { style: { display: "flex", gap: 10 } },
            React.createElement(Btn, { onClick: applyRoleChange, style: { opacity: busy ? 0.7 : 1 } }, busy ? "Saving…" : "Confirm"),
            React.createElement(Btn, { variant: "ghost", onClick: () => setConfirm(null) }, "Cancel")
          )
        )
      )
    );
  };

  var MemberDetailModal = ({ member, onClose, onUpdate, isAdmin, currentMemberId }) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [tab, setTab] = useState("profile");
    const [editing, setEditing] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [form, setForm] = useState(member);
    const set = (k) => (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const years = Array.from({ length: 60 }, (_, i) => String(2024 - i));
    const save = () => {
      onUpdate && onUpdate(form);
      setEditing(false);
    };
    return /* @__PURE__ */ React.createElement(Modal, { onClose, title: `${member.firstName} ${member.lastName}`, maxWidth: 780 }, /* @__PURE__ */ React.createElement("div", { style: { background: `${DARK}`, borderRadius: 12, padding: "22px 24px", color: "#fff", display: "flex", gap: 18, alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { onClick: () => { if ((editing ? form : member).photo) setLightboxOpen(true); }, style: { cursor: (editing ? form : member).photo ? "pointer" : "default", borderRadius: "50%", transition: "opacity 0.2s" }, title: (editing ? form : member).photo ? "Click to enlarge" : "" }, /* @__PURE__ */ React.createElement(Avatar, { member: editing ? form : member, size: 60 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, fontWeight: 700, fontFamily: "var(--font-sans)" } }, member.firstName, " ", member.lastName), /* @__PURE__ */ React.createElement("div", { style: { color: GOLD, fontSize: 13, marginTop: 2 } }, member.role), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 12, marginTop: 3 } }, (member.companies || []).join(", "), " · Class of ", member.graduationYear)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" } }, /* @__PURE__ */ React.createElement(Badge, { label: member.deactivated ? "Deactivated" : member.status, color: member.deactivated ? "#ef4444" : statusColor(member.status) }), member.willingToMentor && /* @__PURE__ */ React.createElement(Badge, { label: "Mentor", color: "#8b5cf6" }), member.openToHiring && /* @__PURE__ */ React.createElement(Badge, { label: "Hiring", color: "#22c55e" }))), /* @__PURE__ */ React.createElement("div", { className: "tab-bar", style: { display: "flex", gap: 4, marginBottom: 20, borderBottom: `1px solid ${BORDER}`, paddingBottom: 0 } }, (isAdmin ? ["profile", "donations", "activity", "notes"] : currentMemberId === member.id ? ["profile", "activity"] : ["profile"]).map((t2) => /* @__PURE__ */ React.createElement("button", { key: t2, onClick: () => setTab(t2), style: { padding: "8px 16px", border: "none", background: "none", cursor: "pointer", fontWeight: tab === t2 ? 700 : 400, color: tab === t2 ? GOLD : "#6b7280", borderBottom: tab === t2 ? `2px solid ${GOLD}` : "2px solid transparent", fontSize: 13, textTransform: "capitalize" } }, t2))), tab === "profile" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18 } }, editing ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PhotoUpload, { value: form.photo, onChange: set("photo") }), /* @__PURE__ */ React.createElement("div", { className: "form-grid-2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, /* @__PURE__ */ React.createElement(Input, { label: "First Name", value: form.firstName, onChange: set("firstName") }), /* @__PURE__ */ React.createElement(Input, { label: "Last Name", value: form.lastName, onChange: set("lastName") }), /* @__PURE__ */ React.createElement(Input, { label: "Email", value: form.email, onChange: set("email") }), /* @__PURE__ */ React.createElement(Input, { label: "Phone", value: form.phone, onChange: set("phone") }), /* @__PURE__ */ React.createElement(Input, { label: "LinkedIn", value: form.linkedin, onChange: set("linkedin") }), /* @__PURE__ */ React.createElement(Input, { label: "Website", value: form.website, onChange: set("website") }), /* @__PURE__ */ React.createElement(Select, { label: "Gender", value: form.gender, onChange: set("gender"), options: ["", ...GENDER_OPTIONS] }), /* @__PURE__ */ React.createElement(Input, { label: "Date of Birth", type: "date", value: form.dateOfBirth, onChange: set("dateOfBirth") }), /* @__PURE__ */ React.createElement(Select, { label: "Graduation Year", value: form.graduationYear, onChange: set("graduationYear"), options: ["", ...years] }), /* @__PURE__ */ React.createElement(Select, { label: "Country", value: form.country, onChange: set("country"), options: ["", ...COUNTRY_OPTIONS] }), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1/-1" } }, /* @__PURE__ */ React.createElement(RolesInput, { roles: form.roles || [], primaryRole: form.primaryRole || "", onChange: ({ roles, primaryRole }) => setForm((f) => ({ ...f, roles, primaryRole, role: primaryRole })) }))), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Companies", value: form.companies, onChange: set("companies"), options: [] }), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Industries", value: form.industries, onChange: set("industries"), options: INDUSTRY_OPTIONS }), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Regions", value: form.regions, onChange: set("regions"), options: REGION_OPTIONS }), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Expertise", value: form.expertise, onChange: set("expertise"), options: EXPERTISE_OPTIONS }), /* @__PURE__ */ React.createElement(Textarea, { label: "Bio", value: form.bio, onChange: set("bio"), rows: 3 }), /* @__PURE__ */ React.createElement("div", { style: { borderTop: `1px solid ${BORDER}`, paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 12, paddingBottom: 8, borderBottom: `1px solid ${BORDER}` } }, "University Education"), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 12, maxWidth: 300 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 6 } }, "Highest Level of Education"), /* @__PURE__ */ React.createElement("select", { value: form.highestEducationLevel || "na", onChange: (e) => set("highestEducationLevel")(e.target.value), style: { width: "100%", padding: "9px 12px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontFamily: "inherit", background: "#fff", outline: "none" } }, EDUCATION_LEVEL_OPTIONS.map((v) => /* @__PURE__ */ React.createElement("option", { key: v, value: v }, EDUCATION_LEVEL_LABELS[v])))), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 8 } }, "Universities Attended"), /* @__PURE__ */ React.createElement(EducationEntriesInput, { entries: form.educationEntries || [], onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { educationEntries: v })) })), /* @__PURE__ */ React.createElement("div", { style: { borderTop: `1px solid ${BORDER}`, paddingTop: 14 } }, /* @__PURE__ */ React.createElement(Toggle, { label: "Willing to Mentor", value: form.willingToMentor, onChange: set("willingToMentor") }), /* @__PURE__ */ React.createElement(Toggle, { label: "Open to Fundraising", value: form.openToFundraising, onChange: set("openToFundraising") }), /* @__PURE__ */ React.createElement(Toggle, { label: "Open to Hiring", value: form.openToHiring, onChange: set("openToHiring") })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: () => setEditing(false) }, "Cancel"), /* @__PURE__ */ React.createElement(Btn, { onClick: save }, "Save Changes"))) : /* @__PURE__ */ React.createElement(React.Fragment, null, member.bio && /* @__PURE__ */ React.createElement("div", { style: { background: "#fafaf8", borderRadius: 10, padding: "14px 16px", fontSize: 14, color: "#374151", lineHeight: 1.7 } }, member.bio), /* @__PURE__ */ React.createElement("div", { className: "form-grid-2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, [
      ["Email", isAdmin || currentMemberId === member.id || member.emailVisible !== false ? member.email : "🔒 Hidden"],
      ["Phone", isAdmin || currentMemberId === member.id || member.phoneVisible !== false ? member.phone : "🔒 Hidden"],
      ["Gender", member.gender],
      ["Date of Birth", member.dateOfBirth],
      ["Graduation Year", member.graduationYear],
      ["Country", member.country],
      ["LinkedIn", member.linkedin],
      ["Website", member.website],
      ["Current Role", member.primaryRole || member.role],
      ["Education", member.highestEducationLevel && member.highestEducationLevel !== "na" ? EDUCATION_LEVEL_LABELS[member.highestEducationLevel] || member.highestEducationLevel : member.highestEducationLevel === "na" ? "N/A" : null]
    ].map(([l, v]) => v && /* @__PURE__ */ React.createElement("div", { key: l }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 3 } }, l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: DARK } }, v)))), (member.educationEntries || []).length > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, "Universities"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } }, (member.educationEntries || []).map((e, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 10, padding: "9px 12px", background: "#fafaf8", borderRadius: 8, border: `1px solid ${BORDER}` } }, /* @__PURE__ */ React.createElement("div", { style: { background: `${GOLD}22`, color: "#9a4a00", fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 5, whiteSpace: "nowrap", flexShrink: 0 } }, EDUCATION_LEVEL_LABELS[e.level] || e.level || "—"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK } }, e.university || "—"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, [e.field, e.country].filter(Boolean).join(" · "))))))), ((_a = member.companies) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Companies"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, member.companies.map((c) => /* @__PURE__ */ React.createElement(Tag, { key: c, label: c })))), ((_b = member.industries) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Industries"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, member.industries.map((i) => /* @__PURE__ */ React.createElement(Tag, { key: i, label: i })))), ((_c = member.regions) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Regions"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, member.regions.map((r) => /* @__PURE__ */ React.createElement(Tag, { key: r, label: r })))), ((_d = member.expertise) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Expertise"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 5 } }, member.expertise.map((e) => /* @__PURE__ */ React.createElement(Tag, { key: e, label: e })))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, member.willingToMentor && /* @__PURE__ */ React.createElement(Badge, { label: "✓ Willing to Mentor", color: "#8b5cf6" }), (member.openToFundraising || member.willingToDonate) && /* @__PURE__ */ React.createElement(Badge, { label: "✓ Willing to Donate", color: "#f59e0b" }), member.willingToInvest && /* @__PURE__ */ React.createElement(Badge, { label: "✓ Willing to Invest", color: "#f7911d" }), member.openToHiring && /* @__PURE__ */ React.createElement(Badge, { label: "✓ Open to Hiring", color: "#22c55e" })), (isAdmin || currentMemberId === member.id) && member.idDocumentUrl && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, padding: "12px 14px", background: "#f9f9f9", borderRadius: 10, border: `1px solid ${BORDER}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, "🔒 ID Document ", !isAdmin && "(Only visible to you)"), member.idDocumentUrl.startsWith("data:image") ? /* @__PURE__ */ React.createElement("img", { src: member.idDocumentUrl, alt: "ID Document", style: { maxWidth: "100%", maxHeight: 200, borderRadius: 6, objectFit: "contain" } }) : /* @__PURE__ */ React.createElement("a", { href: member.idDocumentUrl, target: "_blank", rel: "noreferrer", style: { color: GOLD_TEXT, fontSize: 13, fontWeight: 600 } }, "📄 View Document")), isAdmin && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8, borderTop: `1px solid ${BORDER}`, paddingTop: 14 } }, /* @__PURE__ */ React.createElement(Btn, { variant: "secondary", onClick: () => setEditing(true) }, "✏️ Edit Profile")))), tab === "donations" && isAdmin && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 26, fontWeight: 700, color: GOLD_TEXT, fontFamily: "var(--font-sans)", marginBottom: 18 } }, "€ ", fmt(member.donationTotal), " ", /* @__PURE__ */ React.createElement("span", { style: { fontSize: 14, color: "#9ca3af", fontWeight: 400 } }, "total lifetime")), ((_e = member.donationHistory) == null ? void 0 : _e.length) === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 14 } }, "No donations recorded yet.") : (_f = member.donationHistory) == null ? void 0 : _f.map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: `1px solid #f5f5f5` } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 600, color: DARK } }, d.project || "General Donation"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af" } }, d.year, " · ", d.date || "")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: DARK } }, "€ ", fmt(d.amount))))), tab === "activity" && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 12 } }, "Events Attended (", ((_g = member.eventsAttended) == null ? void 0 : _g.length) || 0, ")"), (member.eventsAttended || []).length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 14 } }, "No events attended yet.") : member.eventsAttended.map((ev, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 12, padding: "11px 0", borderBottom: `1px solid #f5f5f5` } }, /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: "50%", background: GOLD, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#374151" } }, ev)))), tab === "notes" && isAdmin && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Textarea, { label: "Internal Admin Notes (not visible to member)", value: form.notes || "", onChange: (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { notes: v })), rows: 5, placeholder: "Add internal notes about this member..." }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, display: "flex", justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement(Btn, { onClick: save }, "Save Notes"))), lightboxOpen && (editing ? form : member).photo && /* @__PURE__ */ React.createElement("div", { onClick: () => setLightboxOpen(false), style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: (editing ? form : member).photo, alt: member.firstName + " " + member.lastName, style: { maxWidth: "90vw", maxHeight: "90vh", borderRadius: 16, boxShadow: "0 25px 60px rgba(0,0,0,0.7)", objectFit: "contain" }, onClick: (e) => e.stopPropagation() }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 24, right: 24, background: "rgba(255,255,255,0.15)", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)", fontSize: 22, color: "#fff" }, onClick: () => setLightboxOpen(false) }, "×")));
  };
  var AddMemberModal = ({ onClose, onAdd, initial }) => {
    const handleSubmit = async (form) => {
      if (!form.firstName || !form.email) {
        alert("First name and email are required.");
        return;
      }
      await onAdd(__spreadProps(__spreadValues({}, form), { status: "active", donationTotal: 0, donationHistory: [], eventsAttended: [], joinDate: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), engagementScore: 0, deactivated: false }));
      onClose();
    };
    return /* @__PURE__ */ React.createElement(Modal, { onClose, title: initial ? "Edit Member" : "Add New Member", maxWidth: 720 }, /* @__PURE__ */ React.createElement(MemberForm, { initial, onSubmit: handleSubmit, submitLabel: initial ? "Save Changes" : "Add Member" }));
  };
  var RecordDonationModal = ({ member, onClose, onRecord, donationProjects = [] }) => {
    const activeProjects = donationProjects.filter((p) => p.status === "active");
    const projectOptions = activeProjects.length > 0 ? activeProjects.map((p) => p.name) : ["General", "Scholarship Fund", "School Renovation", "Lab Equipment", "Sports Fund", "Cultural Program"];
    const [amount, setAmount] = useState("");
    const [project, setProject] = useState(projectOptions[0] || "General");
    const [note, setNote] = useState("");
    const [date, setDate] = useState((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
    const handle = () => {
      const n = parseInt(amount);
      if (!n || n <= 0) { alert("Please enter a valid amount."); return; }
      onRecord(member.id, { amount: n, project, year: (/* @__PURE__ */ new Date()).getFullYear(), date, note });
      onClose();
    };
    return /* @__PURE__ */ React.createElement(Modal, { onClose, title: `Record Donation — ${member.firstName} ${member.lastName}`, maxWidth: 440 },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
        /* @__PURE__ */ React.createElement("div", { style: { background: "#fafaf8", borderRadius: 10, padding: "14px", display: "flex", gap: 14, alignItems: "center" } },
          /* @__PURE__ */ React.createElement(Avatar, { member, size: 44 }),
          /* @__PURE__ */ React.createElement("div", null,
            /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, color: DARK } }, member.firstName, " ", member.lastName),
            /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af" } }, "Current total: EGP ", fmt(member.donationTotal)))),
        /* @__PURE__ */ React.createElement(Input, { label: "Donation Amount (EGP)", type: "number", value: amount, onChange: setAmount, placeholder: "e.g. 500" }),
        /* @__PURE__ */ React.createElement(Select, { label: "Donation Project", value: project, onChange: setProject, options: projectOptions }),
        /* @__PURE__ */ React.createElement(Input, { label: "Date", type: "date", value: date, onChange: setDate }),
        /* @__PURE__ */ React.createElement(Textarea, { label: "Note (optional)", value: note, onChange: setNote, rows: 2, placeholder: "Any additional context..." }),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } },
          /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: onClose }, "Cancel"),
          /* @__PURE__ */ React.createElement(Btn, { onClick: handle }, "Record Donation"))));
  };
  var loadSheetJS = () => window.XLSX ? Promise.resolve(window.XLSX) : new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js";
    s.onload = () => window.XLSX ? resolve(window.XLSX) : reject(new Error("Excel library failed to load"));
    s.onerror = () => reject(new Error("Could not load the Excel library. Check your internet connection."));
    document.head.appendChild(s);
  });
  var exportMembersToExcel = async (list) => {
    const XLSX = await loadSheetJS();
    const yesNo = (v) => v ? "Yes" : "No";
    const join = (a) => (a || []).filter(Boolean).join(", ");
    const rows = list.map((m) => ({
      "First Name": m.firstName || "",
      "Last Name": m.lastName || "",
      "Email": m.email || "",
      "Phone": m.phone || "",
      "Gender": m.gender || "",
      "Date of Birth": m.dateOfBirth || "",
      "Graduation Year": m.graduationYear || "",
      "Country": m.country || "",
      "Location": m.location || "",
      "Companies": join(m.companies),
      "Role": m.role || "",
      "Industries": join(m.industries),
      "Expertise": join(m.expertise),
      "Regions": join(m.regions),
      "Highest Education": m.highestEducationLevel && m.highestEducationLevel !== "na" ? (EDUCATION_LEVEL_LABELS[m.highestEducationLevel] || m.highestEducationLevel) : "",
      "Education": (m.educationEntries || []).map((e) => [EDUCATION_LEVEL_LABELS[e.level] || e.level, e.university, e.field, e.country].filter(Boolean).join(" - ")).join(" | "),
      "Status": m.deactivated ? "Deactivated" : (m.status || ""),
      "Donated (EGP)": Number(m.donationTotal) || 0,
      "Join Date": m.joinDate || "",
      "Last Login": m.lastLoginAt ? new Date(m.lastLoginAt).toLocaleString("en-GB") : "",
      "LinkedIn": m.linkedin || "",
      "Website": m.website || "",
      "Willing to Mentor": yesNo(m.willingToMentor),
      "Willing to Donate": yesNo(m.willingToDonate),
      "Open to Hiring": yesNo(m.openToHiring),
      "Willing to Invest": yesNo(m.willingToInvest),
      "Investment Budget": m.investmentBudget || "",
      "Willing to Pay Membership": yesNo(m.willingToPayMembership)
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const headers = Object.keys(rows[0] || {});
    ws["!cols"] = headers.map((h) => ({ wch: Math.min(50, Math.max(h.length, ...rows.map((r) => String(r[h]).length)) + 2) }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Members");
    XLSX.writeFile(wb, `members-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.xlsx`);
  };
  var MEMBER_IMPORT_HEADERS = ["First Name", "Last Name", "Email", "Phone", "Gender", "Date of Birth", "Graduation Year", "Country", "Location", "Companies", "Role", "Industries", "Expertise", "Regions", "Highest Education", "Education", "Status", "Join Date", "LinkedIn", "Website", "Willing to Mentor", "Willing to Donate", "Open to Hiring", "Willing to Invest", "Investment Budget", "Willing to Pay Membership"];
  var downloadMemberImportTemplate = async () => {
    const XLSX = await loadSheetJS();
    const ws = XLSX.utils.aoa_to_sheet([MEMBER_IMPORT_HEADERS, ["Jane", "Doe", "jane@example.com", "+20 100 000 0000", "female", "1990-05-14", 2012, "Egypt", "Cairo", "Acme GmbH, Foo Ltd", "CEO", "Automotive, Venture Capital", "Strategy, Startups", "MENA, Europe", "Master's Degree", "Master's Degree - TU Berlin - Engineering - Germany", "active", "", "https://linkedin.com/in/janedoe", "", "Yes", "No", "Yes", "No", "", "No"]]);
    ws["!cols"] = MEMBER_IMPORT_HEADERS.map((h) => ({ wch: Math.max(14, h.length + 2) }));
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Members");
    XLSX.writeFile(wb, "members-import-template.xlsx");
  };
  // Turns one spreadsheet row (keyed by header) into a partial member object.
  // Only columns that are present and non-empty end up in the result, so updates never blank out existing data.
  var parseImportedMemberRow = (raw) => {
    const norm = (s) => String(s).toLowerCase().replace(/[^a-z0-9]/g, "");
    const byKey = {};
    Object.keys(raw).forEach((k) => { byKey[norm(k)] = raw[k]; });
    const get = (...names) => {
      for (const n of names) {
        const v = byKey[norm(n)];
        if (v !== void 0 && v !== null && String(v).trim() !== "") return v;
      }
      return void 0;
    };
    const str = (v) => v instanceof Date ? v.toISOString().slice(0, 10) : String(v).trim();
    const list = (v) => str(v).split(/[,;\n]/).map((x) => x.trim()).filter(Boolean);
    const bool = (v) => typeof v === "boolean" ? v : /^(yes|y|true|1|ja|x)$/i.test(str(v));
    // Returns "YYYY-MM-DD", or undefined when the value can't be understood as a date (the cell is then ignored).
    const date = (v) => {
      const iso = (y, mo, d) => {
        const dt = new Date(Date.UTC(+y, +mo - 1, +d));
        return isNaN(dt) || dt.getUTCDate() !== +d || dt.getUTCMonth() !== +mo - 1 ? void 0 : dt.toISOString().slice(0, 10);
      };
      if (v instanceof Date) return isNaN(v) ? void 0 : iso(v.getFullYear(), v.getMonth() + 1, v.getDate());
      const s = str(v);
      let mt = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
      if (mt) return iso(mt[1], mt[2], mt[3]);
      mt = s.match(/^(\d{1,2})[./-](\d{1,2})[./-](\d{4})$/);
      if (mt) return iso(mt[3], mt[2], mt[1]);
      const d = new Date(s);
      return isNaN(d) ? void 0 : iso(d.getFullYear(), d.getMonth() + 1, d.getDate());
    };
    const levelKey = (v) => {
      const s = str(v).toLowerCase();
      const hit = Object.keys(EDUCATION_LEVEL_LABELS).find((k) => k === s || EDUCATION_LEVEL_LABELS[k].toLowerCase() === s);
      if (hit) return hit;
      if (/phd|doctor/.test(s)) return "phd";
      if (/master/.test(s)) return "master";
      if (/bachelor|undergrad/.test(s)) return "bachelor";
      return s ? "other" : "na";
    };
    const m = {};
    const set = (field, names, conv = str) => {
      const v = get(...names);
      if (v === void 0) return;
      const c = conv(v);
      if (c !== void 0 && c !== null && c !== "") m[field] = c;
    };
    set("firstName", ["First Name", "Firstname", "Vorname"]);
    set("lastName", ["Last Name", "Lastname", "Surname", "Nachname"]);
    set("email", ["Email", "E-mail", "Email Address"], (v) => str(v).toLowerCase());
    set("phone", ["Phone", "Mobile", "Telefon"]);
    set("gender", ["Gender"], (v) => str(v).toLowerCase());
    set("dateOfBirth", ["Date of Birth", "DOB", "Birthday"], date);
    set("graduationYear", ["Graduation Year", "Class of", "Class"], (v) => parseInt(str(v), 10) || null);
    set("country", ["Country"]);
    set("location", ["Location", "City"]);
    set("companies", ["Companies", "Company"], list);
    set("role", ["Role", "Position", "Title"]);
    set("industries", ["Industries", "Industry"], list);
    set("expertise", ["Expertise"], list);
    set("regions", ["Regions", "Region"], list);
    set("highestEducationLevel", ["Highest Education", "Education Level"], levelKey);
    set("joinDate", ["Join Date"], date);
    set("linkedin", ["LinkedIn"]);
    set("website", ["Website"]);
    set("willingToMentor", ["Willing to Mentor"], bool);
    set("willingToDonate", ["Willing to Donate"], bool);
    set("openToHiring", ["Open to Hiring"], bool);
    set("willingToInvest", ["Willing to Invest"], bool);
    set("investmentBudget", ["Investment Budget"]);
    set("willingToPayMembership", ["Willing to Pay Membership"], bool);
    const status = get("Status");
    if (status !== void 0) {
      const s = str(status).toLowerCase();
      if (s === "deactivated") { m.deactivated = true; m.status = "inactive"; }
      else { m.status = s; m.deactivated = s === "inactive"; }
    }
    const edu = get("Education");
    if (edu !== void 0) {
      m.educationEntries = str(edu).split("|").map((part) => {
        const bits = part.split(" - ").map((x) => x.trim()).filter(Boolean);
        const first = bits[0] ? levelKey(bits[0]) : "";
        const hasLevel = bits[0] && (first !== "other" || /other/i.test(bits[0]));
        const [university = "", field = "", country = ""] = hasLevel ? bits.slice(1) : bits;
        return { level: hasLevel ? first : "", university, field, country };
      }).filter((e) => e.university || e.field || e.country || e.level);
    } else {
      const uni = get("University", "University Name");
      if (uni !== void 0) m.educationEntries = [{ level: m.highestEducationLevel || "", university: str(uni), field: get("Field of Study") !== void 0 ? str(get("Field of Study")) : "", country: get("Study Country") !== void 0 ? str(get("Study Country")) : "" }];
    }
    if (m.educationEntries && m.educationEntries.length && !m.highestEducationLevel && m.educationEntries[0].level) m.highestEducationLevel = m.educationEntries[0].level;
    return m;
  };
  var ImportMembersModal = ({ members, onClose, onDone }) => {
    const [parsed, setParsed] = useState(null); // { fileName, rows: [{ line, data, error, existing }] }
    const [updateExisting, setUpdateExisting] = useState(false);
    const [busy, setBusy] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);
    const [fileError, setFileError] = useState("");
    const handleFile = async (file) => {
      if (!file) return;
      setFileError("");
      setResult(null);
      try {
        const XLSX = await loadSheetJS();
        const wb = XLSX.read(await file.arrayBuffer(), { type: "array", cellDates: true });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const rawRows = XLSX.utils.sheet_to_json(ws, { defval: "", raw: true });
        if (!rawRows.length) { setFileError("The file has no data rows."); return; }
        const byEmail = new Map(members.map((m) => [(m.email || "").toLowerCase(), m]));
        const seen = new Set();
        // Rows with missing data are still imported. Only exact duplicates of an email already used
        // earlier in the same file are skipped, because the database requires emails to be unique.
        const rows = rawRows.map((raw, i) => {
          const data = parseImportedMemberRow(raw);
          if (Object.keys(data).length === 0) return null;
          const warnings = [];
          let error = "";
          if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            warnings.push(`Invalid email "${data.email}" — placeholder used`);
            data.invalidEmail = data.email;
            delete data.email;
          }
          const existing = data.email ? byEmail.get(data.email) : null;
          if (data.email && seen.has(data.email)) error = "Same email appears earlier in the file";
          if (data.email) seen.add(data.email);
          if (!data.email && !data.invalidEmail) warnings.push("No email — placeholder used");
          if (!existing && (!data.firstName || !data.lastName)) warnings.push(!data.firstName && !data.lastName ? "No name" : !data.firstName ? "No first name" : "No last name");
          return { line: i + 2, data, error, warnings, existing };
        }).filter(Boolean);
        setParsed({ fileName: file.name, rows });
      } catch (e) {
        setFileError("Could not read file: " + e.message);
      }
    };
    const valid = parsed ? parsed.rows.filter((r) => !r.error) : [];
    const toCreate = valid.filter((r) => !r.existing);
    const toUpdate = valid.filter((r) => r.existing);
    const invalid = parsed ? parsed.rows.filter((r) => r.error) : [];
    const withWarnings = valid.filter((r) => r.warnings.length && (!r.existing || updateExisting));
    const runImport = async () => {
      const jobs = [...toCreate, ...(updateExisting ? toUpdate : [])];
      if (!jobs.length) return;
      setBusy(true);
      setProgress(0);
      const created = [], updated = [], failed = [];
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      for (let i = 0; i < jobs.length; i++) {
        const { data, existing, line } = jobs[i];
        try {
          if (existing) {
            const merged = __spreadValues(__spreadValues({}, existing), data);
            const row = memberToRow(merged);
            delete row.donation_total;
            await db.update("members", existing.id, row);
            updated.push(merged);
          } else {
            const fill = { status: "active", firstName: "", lastName: "" };
            const memberData = __spreadValues(__spreadValues({}, fill), data);
            delete memberData.invalidEmail;
            if (!memberData.email) {
              memberData.email = `missing-email-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}@import.invalid`;
              memberData.notes = data.invalidEmail ? `Imported with an invalid email ("${data.invalidEmail}"). Please add the correct email address.` : "Imported without an email address. Please add the correct email address.";
            }
            const row = __spreadProps(__spreadValues({}, memberToRow(memberData)), {
              donation_total: 0,
              events_attended: [],
              join_date: data.joinDate || today,
              engagement_score: 0,
              deactivated: !!data.deactivated
            });
            let rows = await db.insert("members", row);
            if (!rows || rows.length === 0) rows = await db.select("members", `?email=eq.${encodeURIComponent(row.email)}&order=created_at.desc&limit=1`);
            if (rows && !Array.isArray(rows)) rows = [rows];
            if (rows && rows[0]) created.push(rowToMember(rows[0], []));
          }
        } catch (e) {
          failed.push({ line, email: data.email, message: e.message });
        }
        setProgress(i + 1);
      }
      setBusy(false);
      setResult({ created: created.length, updated: updated.length, failed });
      onDone(created, updated);
    };
    const box = { border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px", fontSize: 13 };
    const stat = (label, n, color) => React.createElement("div", { style: __spreadProps(__spreadValues({}, box), { flex: 1, textAlign: "center" }) }, React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color } }, n), React.createElement("div", { style: { fontSize: 11, color: "#6b7280" } }, label));
    return React.createElement(Modal, { onClose: busy ? () => {} : onClose, title: "Import Members from Excel", maxWidth: 680 },
      result ? React.createElement("div", null,
        React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 14 } }, stat("Added", result.created, "#22c55e"), stat("Updated", result.updated, "#1557a0"), stat("Failed", result.failed.length, result.failed.length ? "#ef4444" : "#9ca3af")),
        result.failed.length > 0 && React.createElement("div", { style: __spreadProps(__spreadValues({}, box), { maxHeight: 180, overflow: "auto", color: "#b91c1c", fontSize: 12, marginBottom: 14 }) }, result.failed.map((f) => React.createElement("div", { key: f.line }, "Row ", f.line, " (", f.email, "): ", f.message))),
        React.createElement("div", { style: { display: "flex", justifyContent: "flex-end" } }, React.createElement(Btn, { onClick: onClose }, "Done"))
      ) : React.createElement("div", null,
        React.createElement("div", { style: __spreadProps(__spreadValues({}, box), { background: "#fafaf8", marginBottom: 14, color: "#4b5563", lineHeight: 1.6 }) },
          "Upload an .xlsx, .xls or .csv file. The first row must contain column headers — the same columns the Export button produces. ",
          "Rows with missing data are still imported. Members without a valid ", React.createElement("b", null, "Email"), " get a placeholder address (", React.createElement("code", null, "…@import.invalid"), ") and a note asking for the real one. Existing members are matched by email. Lists (companies, industries…) are comma-separated. ",
          React.createElement("button", { type: "button", onClick: () => downloadMemberImportTemplate().catch((e) => alert(e.message)), style: { border: "none", background: "none", padding: 0, color: GOLD_TEXT, fontWeight: 600, cursor: "pointer", textDecoration: "underline", fontSize: 13 } }, "Download template")
        ),
        React.createElement("input", { type: "file", accept: ".xlsx,.xls,.csv", disabled: busy, onChange: (e) => handleFile(e.target.files[0]), style: { marginBottom: 14, fontSize: 13 } }),
        fileError && React.createElement("div", { style: { color: "#b91c1c", fontSize: 13, marginBottom: 14 } }, fileError),
        parsed && React.createElement(React.Fragment, null,
          React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 14 } }, stat("New members", toCreate.length, "#22c55e"), stat("Already exist (by email)", toUpdate.length, "#1557a0"), stat("With missing data", withWarnings.length, withWarnings.length ? "#d97706" : "#9ca3af"), stat("Skipped", invalid.length, invalid.length ? "#ef4444" : "#9ca3af")),
          withWarnings.length > 0 && React.createElement("div", { style: __spreadProps(__spreadValues({}, box), { maxHeight: 140, overflow: "auto", color: "#92400e", background: "#fffbeb", fontSize: 12, marginBottom: 14 }) }, React.createElement("div", { style: { fontWeight: 600, marginBottom: 4 } }, "These rows will be imported with missing data:"), withWarnings.map((r) => React.createElement("div", { key: r.line }, "Row ", r.line, (r.data.firstName || r.data.lastName) ? ` (${[r.data.firstName, r.data.lastName].filter(Boolean).join(" ")})` : r.data.email ? ` (${r.data.email})` : "", ": ", r.warnings.join("; ")))),
          toUpdate.length > 0 && React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginBottom: 14, cursor: "pointer" } }, React.createElement("input", { type: "checkbox", checked: updateExisting, disabled: busy, onChange: (e) => setUpdateExisting(e.target.checked), style: { accentColor: GOLD } }), "Update the ", toUpdate.length, " existing member(s) with the values in the file (otherwise they are skipped)"),
          invalid.length > 0 && React.createElement("div", { style: __spreadProps(__spreadValues({}, box), { maxHeight: 140, overflow: "auto", color: "#b91c1c", fontSize: 12, marginBottom: 14 }) }, React.createElement("div", { style: { fontWeight: 600, marginBottom: 4 } }, "These rows will be skipped:"), invalid.map((r) => React.createElement("div", { key: r.line }, "Row ", r.line, r.data.email ? ` (${r.data.email})` : "", ": ", r.error))),
          valid.length > 0 && React.createElement("div", { style: __spreadProps(__spreadValues({}, box), { maxHeight: 200, overflow: "auto", padding: 0, marginBottom: 14 }) }, valid.slice(0, 100).map((r) => React.createElement("div", { key: r.line, style: { display: "flex", justifyContent: "space-between", gap: 10, padding: "7px 14px", borderBottom: "1px solid #f6f5f3", fontSize: 12 } }, React.createElement("span", { style: { fontWeight: 600, color: DARK } }, r.data.firstName || (r.existing && r.existing.firstName) || "", " ", r.data.lastName || (r.existing && r.existing.lastName) || "", !r.existing && !r.data.firstName && !r.data.lastName ? React.createElement("i", { style: { color: "#9ca3af", fontWeight: 400 } }, "(no name)") : null), React.createElement("span", { style: { color: r.data.email ? "#6b7280" : "#d97706", flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, r.data.email || "(placeholder email)"), React.createElement("span", { style: { color: r.existing ? "#1557a0" : "#16a34a", fontWeight: 600 } }, r.existing ? (updateExisting ? "update" : "skip") : "new"))), valid.length > 100 && React.createElement("div", { style: { padding: "7px 14px", fontSize: 12, color: "#9ca3af" } }, "…and ", valid.length - 100, " more")),
          React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 10 } },
            busy && React.createElement("span", { style: { fontSize: 12, color: "#6b7280" } }, "Importing ", progress, " / ", toCreate.length + (updateExisting ? toUpdate.length : 0), "…"),
            React.createElement(Btn, { variant: "ghost", onClick: onClose, disabled: busy }, "Cancel"),
            React.createElement(Btn, { onClick: runImport, disabled: busy || toCreate.length + (updateExisting ? toUpdate.length : 0) === 0 }, busy ? "Importing…" : `Import ${toCreate.length + (updateExisting ? toUpdate.length : 0)} member(s)`)
          )
        )
      )
    );
  };
  var AdminMembers = ({ members, setMembers, onAddMember, onSendMail, membersLoading, onReload }) => {
    const [showImport, setShowImport] = useState(false);
    const [checkedIds, setCheckedIds] = useState(() => /* @__PURE__ */ new Set());
    const [exporting, setExporting] = useState(false);
    const [search, setSearch] = useState("");
    const [industryFilter, setIndustryFilter] = useState("All");
    const [educationFilter, setEducationFilter] = useState("All");
    const [studyCountryFilter, setStudyCountryFilter] = useState("All");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selected, setSelected] = useState(null);
    const [donationTarget, setDonationTarget] = useState(null);
    const [confirmDeactivate, setConfirmDeactivate] = useState(null);
    const filtered = useMemo(() => {
      const q = search.toLowerCase();
      return members.filter((m) => {
        if (!q) return true;
        const entryText = (m.educationEntries || []).map((e) => `${e.university || ""} ${e.field || ""} ${e.country || ""}`).join(" ");
        return `${m.firstName} ${m.lastName} ${m.email} ${m.role} ${(m.companies || []).join(" ")} ${(m.industries || []).join(" ")} ${(m.regions || []).join(" ")} ${(m.expertise || []).join(" ")} ${entryText}`.toLowerCase().includes(q);
      }).filter((m) => industryFilter === "All" || (m.industries || []).includes(industryFilter)).filter((m) => educationFilter === "All" || (m.highestEducationLevel || "na") === educationFilter).filter((m) => studyCountryFilter === "All" || (m.educationEntries || []).some((e) => e.country === studyCountryFilter)).filter((m) => statusFilter === "All" || (statusFilter === "Active" ? !m.deactivated : m.deactivated));
    }, [members, search, industryFilter, educationFilter, studyCountryFilter, statusFilter]);
    const allFilteredChecked = filtered.length > 0 && filtered.every((m) => checkedIds.has(m.id));
    const someFilteredChecked = filtered.some((m) => checkedIds.has(m.id));
    const toggleChecked = (id) => setCheckedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
    const toggleAllFiltered = () => setCheckedIds((prev) => {
      const next = new Set(prev);
      if (allFilteredChecked) filtered.forEach((m) => next.delete(m.id));
      else filtered.forEach((m) => next.add(m.id));
      return next;
    });
    const selectedMembers = members.filter((m) => checkedIds.has(m.id));
    const handleExport = async () => {
      const list = selectedMembers.length ? selectedMembers : filtered;
      if (!list.length) return;
      setExporting(true);
      try {
        await exportMembersToExcel(list);
      } catch (e) {
        alert("Export failed: " + e.message);
      }
      setExporting(false);
    };
    const updateMember = async (updated) => {
      try {
        await db.update("members", updated.id, memberToRow(updated));
        setMembers((prev) => prev.map((m) => m.id === updated.id ? updated : m));
      } catch (e) {
        alert("Error saving member: " + e.message);
      }
    };
    const recordDonation = (memberId, donation) => {
      setMembers((prev) => prev.map((m) => m.id === memberId ? __spreadProps(__spreadValues({}, m), {
        donationTotal: (m.donationTotal || 0) + donation.amount,
        donationHistory: [...m.donationHistory || [], donation]
      }) : m));
    };
    const toggleDeactivate = async (member) => {
      const newDeactivated = !member.deactivated;
      const newStatus = newDeactivated ? "inactive" : "active";
      try {
        await db.update("members", member.id, { deactivated: newDeactivated, status: newStatus });
        setMembers((prev) => prev.map((m) => m.id === member.id ? __spreadProps(__spreadValues({}, m), { deactivated: newDeactivated, status: newStatus }) : m));
      } catch (e) {
        alert("Error updating member: " + e.message);
      }
      setConfirmDeactivate(null);
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 220, position: "relative" } }, /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" } }, "🔍"), /* @__PURE__ */ React.createElement(
      "input",
      {
        value: search,
        onChange: (e) => setSearch(e.target.value),
        placeholder: "Search by name, company, expertise, region...",
        style: { width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" }
      }
    )), /* @__PURE__ */ React.createElement("select", { value: industryFilter, onChange: (e) => setIndustryFilter(e.target.value), style: { padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("option", { value: "All" }, "All Industries"), INDUSTRY_OPTIONS.map((i) => /* @__PURE__ */ React.createElement("option", { key: i }, i))), /* @__PURE__ */ React.createElement("select", { value: educationFilter, onChange: (e) => setEducationFilter(e.target.value), style: { padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("option", { value: "All" }, "All Education Levels"), EDUCATION_LEVEL_OPTIONS.map((v) => /* @__PURE__ */ React.createElement("option", { key: v, value: v }, EDUCATION_LEVEL_LABELS[v]))), /* @__PURE__ */ React.createElement("select", { value: studyCountryFilter, onChange: (e) => setStudyCountryFilter(e.target.value), style: { padding: "10px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("option", { value: "All" }, "All Study Countries"), COUNTRY_OPTIONS.map((c) => /* @__PURE__ */ React.createElement("option", { key: c }, c))), onReload && /* @__PURE__ */ React.createElement("button", { onClick: onReload, disabled: membersLoading, title: "Reload members from database", style: { display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", border: `1px solid ${BORDER}`, borderRadius: 10, background: "#fff", cursor: membersLoading ? "not-allowed" : "pointer", fontSize: 13, color: membersLoading ? "#9ca3af" : DARK, fontWeight: 500, opacity: membersLoading ? 0.6 : 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", animation: membersLoading ? "spin 0.8s linear infinite" : "none", lineHeight: 1 } }, "↻"), membersLoading ? "Loading…" : "Reload"), React.createElement("button", { onClick: handleExport, disabled: exporting || (!selectedMembers.length && !filtered.length), title: selectedMembers.length ? "Export the checked members to an Excel file" : "Export all members in the current view to an Excel file", style: { display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", border: `1px solid ${BORDER}`, borderRadius: 10, background: "#fff", cursor: exporting ? "wait" : "pointer", fontSize: 13, color: DARK, fontWeight: 500, opacity: exporting || (!selectedMembers.length && !filtered.length) ? 0.6 : 1, whiteSpace: "nowrap" } }, "⬇ ", exporting ? "Exporting…" : selectedMembers.length ? `Export Selected (${selectedMembers.length})` : `Export Excel (${filtered.length})`), selectedMembers.length > 0 && React.createElement("button", { onClick: () => setCheckedIds(/* @__PURE__ */ new Set()), title: "Clear selection", style: { padding: "10px 12px", border: "none", background: "none", cursor: "pointer", fontSize: 12, color: "#6b7280", textDecoration: "underline" } }, "Clear"), React.createElement("button", { onClick: () => setShowImport(true), title: "Import members from an Excel or CSV file", style: { display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", border: `1px solid ${BORDER}`, borderRadius: 10, background: "#fff", cursor: "pointer", fontSize: 13, color: DARK, fontWeight: 500, whiteSpace: "nowrap" } }, "⬆ Import Excel"), /* @__PURE__ */ React.createElement(Btn, { onClick: onAddMember }, "+ Add Member")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2, marginBottom: 16, borderBottom: "2px solid #e5e7eb" } }, ["All", "Active", "Deactivated"].map((tab) => { const cnt = tab === "All" ? members.length : tab === "Active" ? members.filter((m) => !m.deactivated).length : members.filter((m) => m.deactivated).length; return /* @__PURE__ */ React.createElement("button", { key: tab, onClick: () => setStatusFilter(tab), style: { padding: "8px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: statusFilter === tab ? 700 : 400, color: statusFilter === tab ? DARK : "#6b7280", borderBottom: "2px solid " + (statusFilter === tab ? GOLD : "transparent"), marginBottom: -2, transition: "all 0.15s" } }, tab, " (", cnt, ")"); })), /* @__PURE__ */ React.createElement("div", { className: "admin-table", style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}` } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "32px 2fr 1.8fr 1.4fr 1.2fr 1fr 0.8fr 120px", padding: "11px 18px", background: "#fafaf8", borderBottom: `1px solid ${BORDER}`, fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", borderRadius: "12px 12px 0 0" } }, React.createElement("div", { style: { display: "flex", alignItems: "center" } }, React.createElement("input", { type: "checkbox", title: "Select all in current view", checked: allFilteredChecked, ref: (el) => { if (el) el.indeterminate = someFilteredChecked && !allFilteredChecked; }, onChange: toggleAllFiltered, disabled: filtered.length === 0, style: { width: 15, height: 15, cursor: "pointer", accentColor: GOLD } })), ["Name", "Email", "Company / Role", "Industry", "Status", "Donated", "Actions"].map((h) => /* @__PURE__ */ React.createElement("div", { key: h }, h))), membersLoading && members.length === 0 ? React.createElement("div", { style: { padding: "40px", textAlign: "center", color: "#9ca3af", fontSize: 14 } }, React.createElement("div", { style: { width: 28, height: 28, border: "3px solid " + GOLD, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 12px" } }), "Loading members…") : filtered.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { padding: "40px", textAlign: "center", color: "#9ca3af", fontSize: 14 } }, members.length === 0 ? "No members loaded yet. Click Reload to fetch." : "No members match your search."), filtered.map((m, i) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: m.id,
        onClick: () => setSelected(m), style: { display: "grid", gridTemplateColumns: "32px 2fr 1.8fr 1.4fr 1.2fr 1fr 0.8fr 120px", padding: "13px 18px", borderBottom: i < filtered.length - 1 ? `1px solid #f6f5f3` : "none", alignItems: "center", opacity: m.deactivated ? 0.55 : 1, cursor: "pointer", background: checkedIds.has(m.id) ? "#fff8ee" : "transparent" },
        onMouseEnter: (e) => e.currentTarget.style.background = "#fafaf8",
        onMouseLeave: (e) => e.currentTarget.style.background = checkedIds.has(m.id) ? "#fff8ee" : "transparent"
      },
      React.createElement("div", { style: { display: "flex", alignItems: "center" }, onClick: (e) => e.stopPropagation() }, React.createElement("input", { type: "checkbox", checked: checkedIds.has(m.id), onChange: () => toggleChecked(m.id), style: { width: 15, height: 15, cursor: "pointer", accentColor: GOLD } })),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement(Avatar, { member: m, size: 32 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 13, color: DARK } }, m.firstName, " ", m.lastName), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, "Class of ", m.graduationYear, " · ", m.gender), m.highestEducationLevel && m.highestEducationLevel !== "na" && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#f7911d", marginTop: 1 } }, EDUCATION_LEVEL_LABELS[m.highestEducationLevel] || m.highestEducationLevel, (m.educationEntries && m.educationEntries[0] && m.educationEntries[0].country) ? ` · ${m.educationEntries[0].country}` : m.studyCountry ? ` · ${m.studyCountry}` : ""))),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, m.email),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 500, color: "#374151" } }, (m.companies || []).join(", ") || "—"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, m.role)),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#6b7280" } }, (m.industries || []).slice(0, 2).join(", ")),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Badge, { label: m.deactivated ? "Deactivated" : m.status, color: m.deactivated ? "#ef4444" : statusColor(m.status) })),
      /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: m.donationTotal > 0 ? GOLD_TEXT : "#d1d5db" } }, "EGP ", fmt(m.donationTotal)),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4 }, onClick: (e) => e.stopPropagation() }, onSendMail && /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary", onClick: () => onSendMail(m) }, "✉️ Mail"), /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost", onClick: () => setConfirmDeactivate(confirmDeactivate === m.id ? null : m.id) }, m.deactivated ? "↑" : "⊘"), confirmDeactivate === m.id && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 0, top: 32, background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px", zIndex: 50, width: 200, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: DARK, fontWeight: 600, marginBottom: 8 } }, m.deactivated ? "Reactivate" : "Deactivate", " account?"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginBottom: 10 } }, m.deactivated ? "Member will regain access." : "Member will lose portal access."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement(Btn, { small: true, variant: m.deactivated ? "success" : "danger", onClick: () => toggleDeactivate(m) }, m.deactivated ? "Reactivate" : "Deactivate"), /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost", onClick: () => setConfirmDeactivate(null) }, "Cancel")))))
    ))), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 10, fontSize: 12, color: "#9ca3af" } }, filtered.length, " of ", members.length, " members"), selected && /* @__PURE__ */ React.createElement(
      MemberDetailModal,
      {
        member: members.find((m) => m.id === selected.id) || selected,
        onClose: () => setSelected(null),
        onUpdate: (u) => {
          updateMember(u);
          setSelected(u);
        },
        isAdmin: true
      }
    ), showImport && React.createElement(ImportMembersModal, { members, onClose: () => setShowImport(false), onDone: (created, updated) => {
      const upd = new Map(updated.map((u) => [u.id, u]));
      setMembers((prev) => [...prev.map((m) => upd.get(m.id) || m), ...created]);
    } }), donationTarget && /* @__PURE__ */ React.createElement(RecordDonationModal, { member: donationTarget, onClose: () => setDonationTarget(null), onRecord: recordDonation }));
  };
  var rowToEvent = (row, images = [], registrations = []) => ({
    id: row.id,
    name: row.name,
    description: row.description || "",
    startDatetime: row.start_datetime || null,
    endDatetime: row.end_datetime || null,
    location: row.location || "",
    isOnline: row.is_online || false,
    isFree: row.free !== false,
    ticketPrice: row.ticket_price || null,
    maxAttendees: row.max_attendees || null,
    requiresApproval: row.requires_approval || false,
    links: Array.isArray(row.links) ? row.links : typeof row.links === "string" ? JSON.parse(row.links || "[]") : [],
    status: row.status || "published",
    createdBy: row.created_by || "",
    createdAt: row.created_at,
    images,
    // array of {id, image_data, sort_order}
    registrations
    // array of rowToRegistration()
  });
  var rowToRegistration = (row) => ({
    id: row.id,
    eventId: row.event_id,
    memberId: row.member_id,
    memberEmail: row.member_email,
    memberName: row.member_name,
    status: row.status,
    notes: row.notes || "",
    registeredAt: row.registered_at
  });
  var rowToPerk = (row) => ({
    id: row.id,
    title: row.title || "",
    shortDescription: row.short_description || "",
    fullDescription: row.full_description || "",
    partnerName: row.partner_name || "",
    partnerLogo: row.partner_logo || null,
    category: row.category || "",
    location: row.location || "",
    perkType: row.perk_type || "",
    redemptionType: row.redemption_type || "",
    promoCode: row.promo_code || "",
    externalLink: row.external_link || "",
    expirationDate: row.expiration_date || null,
    termsConditions: row.terms_conditions || "",
    createdAt: row.created_at,
    isActive: row.is_active !== false,
    views: row.views || 0
  });
  var perkToRow = (p) => ({
    title: p.title,
    short_description: p.shortDescription || null,
    full_description: p.fullDescription || null,
    partner_name: p.partnerName || null,
    partner_logo: p.partnerLogo || null,
    category: p.category || null,
    location: p.location || null,
    perk_type: p.perkType || null,
    redemption_type: p.redemptionType || null,
    promo_code: p.promoCode || null,
    external_link: p.externalLink || null,
    expiration_date: p.expirationDate || null,
    terms_conditions: p.termsConditions || null,
    is_active: p.isActive !== false
  });
  var rowToMemberPerk = (row) => ({
    id: row.id,
    memberId: row.member_id,
    perkId: row.perk_id,
    status: row.status || "saved",
    savedAt: row.saved_at || null,
    claimedAt: row.claimed_at || null
  });
  var rowToMessage = (row) => ({ id: row.id, senderId: row.sender_id, receiverId: row.receiver_id, subject: row.subject || "", body: row.body || "", createdAt: row.created_at, readAt: row.read_at || null });
  var messageToRow = (m) => ({ sender_id: m.senderId, receiver_id: m.receiverId, subject: m.subject || "", body: m.body });
  var compressEventImage = (dataUrl, maxSize = 1200, quality = 0.8) => new Promise((res) => {
    if (!dataUrl || !dataUrl.startsWith("data:image")) {
      res(null);
      return;
    }
    const img = new Image();
    img.onload = () => {
      const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      res(canvas.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => res(null);
    img.src = dataUrl;
  });
  var fmtEventDate = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
  };
  var fmtEventTime = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
  };
  var CreateEventModal = ({ onClose, onSave, initial = null }) => {
    const emptyForm = {
      name: "",
      description: "",
      startDate: "",
      startTime: "",
      endDate: "",
      endTime: "",
      location: "",
      isOnline: false,
      isFree: true,
      ticketPrice: "",
      maxAttendees: "",
      requiresApproval: false,
      links: [],
      // [{label, url}]
      newLinkLabel: "",
      newLinkUrl: "",
      images: []
      // [{previewUrl, file}]
    };
    const [form, setForm] = React.useState(initial ? __spreadProps(__spreadValues({}, emptyForm), {
      name: initial.name || "",
      description: initial.description || "",
      startDate: initial.startDatetime ? initial.startDatetime.slice(0, 10) : "",
      startTime: initial.startDatetime ? initial.startDatetime.slice(11, 16) : "",
      endDate: initial.endDatetime ? initial.endDatetime.slice(0, 10) : "",
      endTime: initial.endDatetime ? initial.endDatetime.slice(11, 16) : "",
      location: initial.location || "",
      isOnline: initial.isOnline || false,
      isFree: initial.isFree !== false,
      ticketPrice: initial.ticketPrice || "",
      maxAttendees: initial.maxAttendees || "",
      requiresApproval: initial.requiresApproval || false,
      links: initial.links || [],
      images: (initial.images || []).map((img) => ({ previewUrl: img.image_data, existing: true, id: img.id })),
      newLinkLabel: "",
      newLinkUrl: ""
    }) : emptyForm);
    const [saving, setSaving] = React.useState(false);
    const imgInputRef = React.useRef();
    const set = (k) => (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const addLink = () => {
      if (!form.newLinkLabel || !form.newLinkUrl) return;
      setForm((f) => __spreadProps(__spreadValues({}, f), { links: [...f.links, { label: f.newLinkLabel, url: f.newLinkUrl }], newLinkLabel: "", newLinkUrl: "" }));
    };
    const removeLink = (i) => setForm((f) => __spreadProps(__spreadValues({}, f), { links: f.links.filter((_, idx) => idx !== i) }));
    const handleImageFiles = (files) => {
      Array.from(files).slice(0, 5 - form.images.length).forEach((file) => {
        if (!file.type.startsWith("image/")) return;
        const reader = new FileReader();
        reader.onload = (e) => setForm((f) => __spreadProps(__spreadValues({}, f), { images: [...f.images, { previewUrl: e.target.result, file }] }));
        reader.readAsDataURL(file);
      });
    };
    const removeImage = (i) => setForm((f) => __spreadProps(__spreadValues({}, f), { images: f.images.filter((_, idx) => idx !== i) }));
    const handleSave = async () => {
      if (!form.name || !form.startDate) {
        alert("Event name and start date are required.");
        return;
      }
      setSaving(true);
      try {
        const compressedImages = await Promise.all(
          form.images.map(
            (img) => img.existing ? Promise.resolve(img) : compressEventImage(img.previewUrl).then((data) => __spreadProps(__spreadValues({}, img), { compressedData: data }))
          )
        );
        await onSave(form, compressedImages);
        onClose();
      } catch (e) {
        alert("Error saving event: " + e.message);
      } finally {
        setSaving(false);
      }
    };
    const inputStyle = { width: "100%", padding: "9px 12px", border: `1px solid ${BORDER}`, borderRadius: 8, fontSize: 13, fontFamily: "inherit", color: DARK, background: "#fff", outline: "none" };
    const labelStyle = { fontSize: 12, fontWeight: 600, color: "#374151", marginBottom: 5, display: "block" };
    const rowStyle = { display: "flex", gap: 12 };
    return /* @__PURE__ */ React.createElement(Modal, { onClose, title: initial ? "Edit Event" : "Create New Event", maxWidth: 640 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Event Name ", /* @__PURE__ */ React.createElement("span", { style: { color: "#ef4444" } }, "*")), /* @__PURE__ */ React.createElement("input", { style: inputStyle, value: form.name, onChange: (e) => set("name")(e.target.value), placeholder: "e.g. DEO Gründerforum 2026" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Description"), /* @__PURE__ */ React.createElement("textarea", { style: __spreadProps(__spreadValues({}, inputStyle), { height: 90, resize: "vertical" }), value: form.description, onChange: (e) => set("description")(e.target.value), placeholder: "What is this event about?" })), /* @__PURE__ */ React.createElement("div", { style: rowStyle }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Start Date ", /* @__PURE__ */ React.createElement("span", { style: { color: "#ef4444" } }, "*")), /* @__PURE__ */ React.createElement("input", { type: "date", style: inputStyle, value: form.startDate, onChange: (e) => set("startDate")(e.target.value) })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Start Time"), /* @__PURE__ */ React.createElement("input", { type: "time", style: inputStyle, value: form.startTime, onChange: (e) => set("startTime")(e.target.value) }))), /* @__PURE__ */ React.createElement("div", { style: rowStyle }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "End Date"), /* @__PURE__ */ React.createElement("input", { type: "date", style: inputStyle, value: form.endDate, onChange: (e) => set("endDate")(e.target.value) })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "End Time"), /* @__PURE__ */ React.createElement("input", { type: "time", style: inputStyle, value: form.endTime, onChange: (e) => set("endTime")(e.target.value) }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Format"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, [["offline", "📍 In-Person"], ["online", "💻 Online"]].map(([val, label]) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: val,
        onClick: () => set("isOnline")(val === "online"),
        style: { flex: 1, padding: "9px 12px", borderRadius: 8, border: `2px solid ${val === "online" === form.isOnline ? GOLD : BORDER}`, background: val === "online" === form.isOnline ? "#fff6ec" : "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", color: DARK }
      },
      label
    )))), !form.isOnline && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Location"), /* @__PURE__ */ React.createElement("input", { style: inputStyle, value: form.location, onChange: (e) => set("location")(e.target.value), placeholder: "e.g. Cairo, Egypt or Hotel Name" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Ticket"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10 } }, [["free", "🎟️ Free"], ["paid", "💰 Ticketed"]].map(([val, label]) => /* @__PURE__ */ React.createElement(
      "button",
      {
        key: val,
        onClick: () => set("isFree")(val === "free"),
        style: { flex: 1, padding: "9px 12px", borderRadius: 8, border: `2px solid ${val === "free" === form.isFree ? GOLD : BORDER}`, background: val === "free" === form.isFree ? "#fff6ec" : "#fff", fontWeight: 600, fontSize: 13, cursor: "pointer", color: DARK }
      },
      label
    )))), !form.isFree && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Ticket Price (€)"), /* @__PURE__ */ React.createElement("input", { type: "number", style: inputStyle, value: form.ticketPrice, onChange: (e) => set("ticketPrice")(e.target.value), placeholder: "e.g. 25" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Max Attendees (optional)"), /* @__PURE__ */ React.createElement("input", { type: "number", style: inputStyle, value: form.maxAttendees, onChange: (e) => set("maxAttendees")(e.target.value), placeholder: "Leave blank for unlimited" })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ React.createElement("input", { type: "checkbox", id: "reqApproval", checked: form.requiresApproval, onChange: (e) => set("requiresApproval")(e.target.checked), style: { width: 16, height: 16, accentColor: GOLD } }), /* @__PURE__ */ React.createElement("label", { htmlFor: "reqApproval", style: { fontSize: 13, fontWeight: 600, color: DARK, cursor: "pointer" } }, "Require admin approval for registrations")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Quick Links"), form.links.map((link, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", alignItems: "center", gap: 8, marginBottom: 6, background: "#f6f5f3", borderRadius: 8, padding: "8px 12px" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, color: DARK, flex: 1 } }, "🔗 ", /* @__PURE__ */ React.createElement("strong", null, link.label), " — ", link.url), /* @__PURE__ */ React.createElement("button", { onClick: () => removeLink(i), style: { background: "none", border: "none", color: "#ef4444", cursor: "pointer", fontSize: 16, lineHeight: 1 } }, "×"))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginTop: 6 } }, /* @__PURE__ */ React.createElement("input", { style: __spreadProps(__spreadValues({}, inputStyle), { flex: 1 }), placeholder: "Link label (e.g. Zoom)", value: form.newLinkLabel, onChange: (e) => set("newLinkLabel")(e.target.value) }), /* @__PURE__ */ React.createElement("input", { style: __spreadProps(__spreadValues({}, inputStyle), { flex: 2 }), placeholder: "https://...", value: form.newLinkUrl, onChange: (e) => set("newLinkUrl")(e.target.value) }), /* @__PURE__ */ React.createElement("button", { onClick: addLink, style: { padding: "9px 14px", background: GOLD, color: "#fff", border: "none", borderRadius: 8, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" } }, "+ Add"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", { style: labelStyle }, "Event Images (max 5)"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 8 } }, form.images.map((img, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { position: "relative" } }, /* @__PURE__ */ React.createElement("img", { src: img.previewUrl, alt: "", style: { width: 90, height: 70, objectFit: "cover", borderRadius: 8, border: `1px solid ${BORDER}` } }), /* @__PURE__ */ React.createElement("button", { onClick: () => removeImage(i), style: { position: "absolute", top: -6, right: -6, width: 20, height: 20, borderRadius: "50%", background: "#ef4444", border: "none", color: "#fff", fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 } }, "×"))), form.images.length < 5 && /* @__PURE__ */ React.createElement(
      "div",
      {
        onClick: () => imgInputRef.current.click(),
        style: { width: 90, height: 70, borderRadius: 8, border: `2px dashed ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#9ca3af", fontSize: 22 }
      },
      "+",
      /* @__PURE__ */ React.createElement("input", { ref: imgInputRef, type: "file", accept: "image/*", multiple: true, style: { display: "none" }, onChange: (e) => handleImageFiles(e.target.files) })
    )), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, "Images are compressed automatically before saving.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: onClose, style: { padding: "10px 20px", borderRadius: 8, border: `1px solid ${BORDER}`, background: "#fff", cursor: "pointer", fontWeight: 600, fontSize: 13 } }, "Cancel"), /* @__PURE__ */ React.createElement(Btn, { onClick: handleSave, disabled: saving }, saving ? "Saving…" : initial ? "Save Changes" : "Create Event"))));
  };
  var EventDetailModal = ({ event, onClose, isAdmin, currentMember, onRegister, onApproveReg, onRejectReg, myRegistration, members }) => {
    var _a, _b, _c;
    const [imgIdx, setImgIdx] = React.useState(0); const [viewMember, setViewMember] = React.useState(null);
    const regCount = (event.registrations || []).filter((r) => r.status !== "rejected").length;
    const atCapacity = event.maxAttendees && regCount >= event.maxAttendees;
    const regStatus = myRegistration == null ? void 0 : myRegistration.status;
    const regButton = () => {
      if (isAdmin) return null;
      if (atCapacity && !myRegistration) return /* @__PURE__ */ React.createElement("button", { disabled: true, style: { padding: "11px 24px", borderRadius: 8, background: "#e5e7eb", color: "#9ca3af", border: "none", fontWeight: 700, fontSize: 14 } }, "Event Full");
      if (!myRegistration) return /* @__PURE__ */ React.createElement(Btn, { onClick: () => onRegister(event) }, "Register →");
      if (regStatus === "pending") return /* @__PURE__ */ React.createElement("button", { disabled: true, style: { padding: "11px 24px", borderRadius: 8, background: "#fef9c3", color: "#b45309", border: "1px solid #fde68a", fontWeight: 700, fontSize: 14 } }, "⏳ Pending Approval");
      if (regStatus === "approved") return /* @__PURE__ */ React.createElement("button", { disabled: true, style: { padding: "11px 24px", borderRadius: 8, background: "#dcfce7", color: "#16a34a", border: "1px solid #86efac", fontWeight: 700, fontSize: 14 } }, "✅ Registered");
      if (regStatus === "rejected") return /* @__PURE__ */ React.createElement("button", { disabled: true, style: { padding: "11px 24px", borderRadius: 8, background: "#fee2e2", color: "#dc2626", border: "1px solid #fca5a5", fontWeight: 700, fontSize: 14 } }, "❌ Not Approved");
    };
    return /* @__PURE__ */ React.createElement(Modal, { onClose, title: "", maxWidth: 680 }, ((_a = event.images) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ React.createElement("div", { style: { position: "relative", marginBottom: 20, borderRadius: 12, overflow: "hidden", height: 220 } }, /* @__PURE__ */ React.createElement("img", { src: event.images[imgIdx].image_data, alt: "", style: { width: "100%", height: "100%", objectFit: "cover" } }), event.images.length > 1 && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", bottom: 10, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 6 } }, event.images.map((_, i) => /* @__PURE__ */ React.createElement("div", { key: i, onClick: () => setImgIdx(i), style: { width: 8, height: 8, borderRadius: "50%", background: i === imgIdx ? GOLD : "rgba(255,255,255,0.6)", cursor: "pointer" } }))), event.images.length > 1 && imgIdx > 0 && /* @__PURE__ */ React.createElement("button", { onClick: () => setImgIdx((i) => i - 1), style: { position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 } }, "‹"), event.images.length > 1 && imgIdx < event.images.length - 1 && /* @__PURE__ */ React.createElement("button", { onClick: () => setImgIdx((i) => i + 1), style: { position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.4)", border: "none", color: "#fff", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 16 } }, "›")), /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Badge, { label: event.isOnline ? "💻 Online" : "📍 In-Person", color: event.isOnline ? "#3b82f6" : "#8b5cf6" }), /* @__PURE__ */ React.createElement(Badge, { label: event.isFree ? "🎟️ Free" : `💰 €${event.ticketPrice}`, color: event.isFree ? "#22c55e" : GOLD }), event.requiresApproval && /* @__PURE__ */ React.createElement(Badge, { label: "✋ Approval Required", color: "#f59e0b" }), event.maxAttendees && /* @__PURE__ */ React.createElement(Badge, { label: `👥 ${regCount}/${event.maxAttendees}`, color: atCapacity ? "#ef4444" : "#6b7280" })), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 800, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 6 } }, event.name), /* @__PURE__ */ React.createElement("div", { style: { color: "#6b7280", fontSize: 13, display: "flex", gap: 16, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("span", null, "📅 ", fmtEventDate(event.startDatetime), event.startDatetime ? ` · ${fmtEventTime(event.startDatetime)}` : ""), event.endDatetime && /* @__PURE__ */ React.createElement("span", null, "→ ", fmtEventDate(event.endDatetime), " · ", fmtEventTime(event.endDatetime)), !event.isOnline && event.location && /* @__PURE__ */ React.createElement("span", null, "📍 ", event.location))), event.description && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 16, whiteSpace: "pre-wrap" } }, event.description), ((_b = event.links) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, "Quick Links"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } }, event.links.map((link, i) => /* @__PURE__ */ React.createElement(
      "a",
      {
        key: i,
        href: link.url,
        target: "_blank",
        rel: "noopener noreferrer",
        style: { padding: "8px 16px", background: DARK, color: GOLD, borderRadius: 8, textDecoration: "none", fontWeight: 700, fontSize: 13, display: "inline-flex", alignItems: "center", gap: 6 }
      },
      "🔗 ",
      link.label
    )))), !isAdmin && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 16 } }, regButton()), isAdmin && ((_c = event.registrations) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, borderTop: `1px solid ${BORDER}`, paddingTop: 16 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 10 } }, "Registrations (", event.registrations.length, ")"), event.registrations.map((reg) => /* @__PURE__ */ React.createElement("div", { key: reg.id, style: { display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid #f5f5f5` } }, /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { onClick: () => { const m = members && members.find((mb) => mb.email === reg.memberEmail); if (m) setViewMember(m); }, style: { fontWeight: 600, fontSize: 13, color: DARK, cursor: members && members.find((mb) => mb.email === reg.memberEmail) ? "pointer" : "default" } }, reg.memberName), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, reg.memberEmail, " · ", fmtEventDate(reg.registeredAt))), reg.status === "pending" ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => onApproveReg(reg), style: { padding: "5px 12px", background: "#dcfce7", color: "#16a34a", border: "1px solid #86efac", borderRadius: 6, fontWeight: 700, fontSize: 12, cursor: "pointer" } }, "✓ Approve"), /* @__PURE__ */ React.createElement("button", { onClick: () => onRejectReg(reg), style: { padding: "5px 12px", background: "#fee2e2", color: "#dc2626", border: "1px solid #fca5a5", borderRadius: 6, fontWeight: 700, fontSize: 12, cursor: "pointer" } }, "✕ Reject")) : /* @__PURE__ */ React.createElement(Badge, { label: reg.status === "approved" ? "✅ Approved" : "❌ Rejected", color: reg.status === "approved" ? "#22c55e" : "#ef4444" }))), viewMember && /* @__PURE__ */ React.createElement(MemberDetailModal, { member: viewMember, onClose: () => setViewMember(null), isAdmin: true })));
  };
  var AdminEvents = ({ events, setEvents, members, setMembers, setFeedItems }) => {
    const [showCreate, setShowCreate] = React.useState(false);
    const [editEvent, setEditEvent] = React.useState(null);
    const [detailEvent, setDetailEvent] = React.useState(null);
    const buildEventRow = (form) => ({
      name: form.name,
      description: form.description || null,
      start_datetime: form.startDate ? `${form.startDate}T${form.startTime || "00:00"}:00` : null,
      end_datetime: form.endDate ? `${form.endDate}T${form.endTime || "00:00"}:00` : null,
      location: !form.isOnline ? form.location || null : null,
      is_online: form.isOnline,
      free: form.isFree,
      ticket_price: !form.isFree ? parseFloat(form.ticketPrice) || null : null,
      max_attendees: form.maxAttendees ? parseInt(form.maxAttendees) : null,
      requires_approval: form.requiresApproval,
      links: JSON.stringify(form.links || []),
      status: "published",
      created_by: "admin"
    });
    const handleCreate = async (form, compressedImages) => {
      let rows = await db.insert("events", buildEventRow(form));
      if (!rows || rows.length === 0) {
        rows = await db.select("events", "?order=created_at.desc&limit=1");
      }
      const eventId = rows[0].id;
      const imageRows = [];
      for (let i = 0; i < compressedImages.length; i++) {
        const img = compressedImages[i];
        const data = img.compressedData || img.previewUrl;
        if (!data) continue;
        const imgRows = await db.insert("event_images", {
          event_id: eventId,
          image_data: data,
          sort_order: i
        });
        if (imgRows == null ? void 0 : imgRows[0]) imageRows.push(imgRows[0]);
      }
      const newEvent = rowToEvent(rows[0], imageRows, []);
      setEvents((prev) => [newEvent, ...prev]);
      // system feed item: event_created
      db.insert("feed_items", { feed_type: "event_created", source_type: "events", source_id: newEvent.id, author_member_id: null, system_label: "New event created: " + newEvent.name })
        .then((fiRows) => { if (fiRows && fiRows[0] && setFeedItems) setFeedItems((prev) => [fiRows[0], ...prev]); })
        .catch(() => {});
    };
    const handleEdit = async (form, compressedImages) => {
      const eventId = editEvent.id;
      await db.update("events", eventId, buildEventRow(form));
      const keptIds = form.images.filter((i) => i.existing).map((i) => i.id);
      const removedImages = (editEvent.images || []).filter((img) => !keptIds.includes(img.id));
      for (const img of removedImages) {
        await db.delete("event_images", img.id).catch(() => {});
      }
      const currentImages = (editEvent.images || []).filter((img) => keptIds.includes(img.id));
      for (let i = 0; i < compressedImages.length; i++) {
        const img = compressedImages[i];
        if (img.existing) continue;
        const data = img.compressedData || img.previewUrl;
        if (!data) continue;
        const imgRows = await db.insert("event_images", { event_id: eventId, image_data: data, sort_order: currentImages.length + i });
        if (imgRows == null ? void 0 : imgRows[0]) currentImages.push(imgRows[0]);
      }
      const updated = await db.select("events", `?id=eq.${eventId}&limit=1`);
      const updatedImages = await db.select("event_images", `?event_id=eq.${eventId}&order=sort_order.asc`);
      const regs = await db.select("event_registrations", `?event_id=eq.${eventId}&order=registered_at.asc`);
      const fullEvent = rowToEvent(updated[0], updatedImages, regs.map(rowToRegistration));
      setEvents((prev) => prev.map((e) => e.id === eventId ? fullEvent : e));
      if ((detailEvent == null ? void 0 : detailEvent.id) === eventId) setDetailEvent(fullEvent);
    };
    const handleApproveReg = async (reg) => {
      await db.update("event_registrations", reg.id, { status: "approved" });
      setEvents((prev) => prev.map((ev) => ev.id === reg.eventId ? __spreadProps(__spreadValues({}, ev), {
        registrations: ev.registrations.map((r) => r.id === reg.id ? __spreadProps(__spreadValues({}, r), { status: "approved" }) : r)
      }) : ev));
      setDetailEvent((prev) => prev ? __spreadProps(__spreadValues({}, prev), { registrations: prev.registrations.map((r) => r.id === reg.id ? __spreadProps(__spreadValues({}, r), { status: "approved" }) : r) }) : null);
    };
    const handleRejectReg = async (reg) => {
      await db.update("event_registrations", reg.id, { status: "rejected" });
      setEvents((prev) => prev.map((ev) => ev.id === reg.eventId ? __spreadProps(__spreadValues({}, ev), {
        registrations: ev.registrations.map((r) => r.id === reg.id ? __spreadProps(__spreadValues({}, r), { status: "rejected" }) : r)
      }) : ev));
      setDetailEvent((prev) => prev ? __spreadProps(__spreadValues({}, prev), { registrations: prev.registrations.map((r) => r.id === reg.id ? __spreadProps(__spreadValues({}, r), { status: "rejected" }) : r) }) : null);
    };
    const handleDelete = async (ev) => {
      if (!confirm(`Delete "${ev.name}"? This cannot be undone.`)) return;
      try { await db.delete("events", ev.id); } catch (e) { alert("Error deleting event: " + e.message); return; }
      setEvents((prev) => prev.filter((e) => e.id !== ev.id));
    };
    const published = events.filter((e) => e.status !== "cancelled");
    const cancelled = events.filter((e) => e.status === "cancelled");
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK } }, events.length, " Event", events.length !== 1 ? "s" : ""), /* @__PURE__ */ React.createElement(Btn, { onClick: () => setShowCreate(true) }, "+ Create Event")), events.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "60px 0", color: "#9ca3af" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 40, marginBottom: 12 } }, "📅"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600 } }, "No events yet. Create your first one!")), published.map((ev) => {
      var _a, _b;
      const regCount = (ev.registrations || []).filter((r) => r.status !== "rejected").length;
      const pendingCount = (ev.registrations || []).filter((r) => r.status === "pending").length;
      const coverImg = (_b = (_a = ev.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image_data;
      return /* @__PURE__ */ React.createElement("div", { key: ev.id, style: { background: "#fff", borderRadius: 14, border: `1px solid ${BORDER}`, marginBottom: 14, overflow: "hidden", display: "flex" } }, coverImg && /* @__PURE__ */ React.createElement("img", { src: coverImg, alt: "", style: { width: 110, objectFit: "cover", flexShrink: 0 } }), /* @__PURE__ */ React.createElement("div", { style: { padding: "16px 20px", flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 6, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Badge, { label: ev.isOnline ? "💻 Online" : "📍 In-Person", color: ev.isOnline ? "#3b82f6" : "#8b5cf6" }), /* @__PURE__ */ React.createElement(Badge, { label: ev.isFree ? "Free" : `€${ev.ticketPrice}`, color: ev.isFree ? "#22c55e" : GOLD }), ev.requiresApproval && /* @__PURE__ */ React.createElement(Badge, { label: "Approval Required", color: "#f59e0b" }), pendingCount > 0 && /* @__PURE__ */ React.createElement(Badge, { label: `${pendingCount} pending`, color: "#ef4444" })), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, fontSize: 15, color: DARK, marginBottom: 3 } }, ev.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginBottom: 10 } }, fmtEventDate(ev.startDatetime), ev.startDatetime ? ` · ${fmtEventTime(ev.startDatetime)}` : "", !ev.isOnline && ev.location ? ` · ${ev.location}` : "", " · ", regCount, ev.maxAttendees ? `/${ev.maxAttendees}` : "", " registered"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ React.createElement("button", { onClick: () => setDetailEvent(ev), style: { padding: "6px 14px", background: DARK, color: "#fff", border: "none", borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer" } }, "View Details"), /* @__PURE__ */ React.createElement("button", { onClick: () => {
        setEditEvent(ev);
      }, style: { padding: "6px 14px", background: "#f6f5f3", color: DARK, border: `1px solid ${BORDER}`, borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer" } }, "Edit"), /* @__PURE__ */ React.createElement("button", { onClick: () => handleDelete(ev), style: { padding: "6px 14px", background: "#fee2e2", color: "#dc2626", border: "none", borderRadius: 6, fontWeight: 600, fontSize: 12, cursor: "pointer" } }, "Delete"))));
    }), showCreate && /* @__PURE__ */ React.createElement(CreateEventModal, { onClose: () => setShowCreate(false), onSave: handleCreate }), editEvent && /* @__PURE__ */ React.createElement(CreateEventModal, { onClose: () => setEditEvent(null), onSave: handleEdit, initial: editEvent }), detailEvent && /* @__PURE__ */ React.createElement(EventDetailModal, { event: detailEvent, onClose: () => setDetailEvent(null), isAdmin: true, onApproveReg: handleApproveReg, onRejectReg: handleRejectReg, members }));
  };
  var AdminApplications = ({ applications, setApplications, members, setMembers, setFeedItems, onRefresh }) => {
    const [selected, setSelected] = useState(null);
    const [appFilter, setAppFilter] = useState("all");
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = async () => { if (!onRefresh || refreshing) return; setRefreshing(true); try { await onRefresh(); } finally { setRefreshing(false); } };
    const pending = applications.filter((a) => a.status === "pending");
    const filteredApps = appFilter === "all" ? applications : applications.filter((a) => a.status === appFilter);
    const approve = async (app) => {
      try {
        await db.update("applications", app.id, { status: "approved" });
        setApplications((prev) => prev.map((a) => a.id === app.id ? __spreadProps(__spreadValues({}, a), { status: "approved" }) : a));
        const memberRow = {
          first_name: app.firstName,
          last_name: app.lastName,
          email: app.email,
          phone: app.phone || null,
          linkedin: app.linkedin || null,
          website: app.website || null,
          graduation_year: app.graduationYear || null,
          gender: app.gender || null,
          date_of_birth: app.dateOfBirth || null,
          country: app.country || null,
          regions: app.regions || [],
          companies: app.companies || [],
          role: app.primaryRole || app.role || null,
          roles: app.roles || [],
          primary_role: app.primaryRole || app.role || null,
          industries: app.industries || [],
          expertise: app.expertise || [],
          bio: app.bio || null,
          motivation: app.motivation || null,
          willing_to_mentor: app.willingToMentor || false,
          open_to_fundraising: app.willingToDonate || app.openToFundraising || false,
          willing_to_donate: app.willingToDonate || false,
          open_to_hiring: app.openToHiring || false,
          willing_to_invest: app.willingToInvest || false,
          investment_budget: app.investmentBudget || null,
          willing_to_pay_membership: app.willingToPayMembership || false,
          membership_fee_amount: app.membershipFeeAmount || null,
          phone_visible: app.phoneVisible !== false,
          email_visible: app.emailVisible !== false,
          photo_url: app.photo || null,
          id_document_url: app.idDocumentUrl || null,
          highest_education_level: app.highestEducationLevel || "na",
          education_entries: app.educationEntries || [],
          university_name: (app.educationEntries && app.educationEntries[0]) ? app.educationEntries[0].university || null : app.universityName || null,
          field_of_study: (app.educationEntries && app.educationEntries[0]) ? app.educationEntries[0].field || null : app.fieldOfStudy || null,
          study_country: (app.educationEntries && app.educationEntries[0]) ? app.educationEntries[0].country || null : app.studyCountry || null,
          status: "active",
          donation_total: 0,
          events_attended: [],
          join_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          engagement_score: 0,
          deactivated: false
        };
        let existing = await db.select("members", `?email=eq.${encodeURIComponent(memberRow.email)}&limit=1`);
        let rows;
        if (existing && existing.length > 0) {
          rows = await db.update("members", existing[0].id, __spreadProps(__spreadValues({}, memberRow), { status: "active", deactivated: false }));
          if (!rows || rows.length === 0) rows = await db.select("members", `?email=eq.${encodeURIComponent(memberRow.email)}&limit=1`);
        } else {
          rows = await db.insert("members", memberRow);
          if (!rows || rows.length === 0) rows = await db.select("members", `?email=eq.${encodeURIComponent(memberRow.email)}&order=created_at.desc&limit=1`);
        }
        if (rows && rows[0]) setMembers((prev) => {
          const exists = prev.find((m) => m.email === memberRow.email);
          if (exists) return prev.map((m) => m.email === memberRow.email ? rowToMember(rows[0], []) : m);
          return [...prev, rowToMember(rows[0], [])];
        });
        // system feed item: member_joined
        if (rows && rows[0]) {
          const memberName = app.firstName + " " + app.lastName;
          db.insert("feed_items", { feed_type: "member_joined", source_type: "members", source_id: rows[0].id, author_member_id: null, system_label: memberName + " joined DEO Leaders" })
            .then((fiRows) => { if (fiRows && fiRows[0] && setFeedItems) setFeedItems((prev) => [fiRows[0], ...prev]); })
            .catch(() => {});
        }
        setSelected((prev) => prev ? __spreadProps(__spreadValues({}, prev), { status: "approved" }) : null);
      } catch (e) {
        alert("Error approving: " + e.message);
      }
    };
    const reject = async (app) => {
      try {
        await db.update("applications", app.id, { status: "rejected" });
        setApplications((prev) => prev.map((a) => a.id === app.id ? __spreadProps(__spreadValues({}, a), { status: "rejected" }) : a));
        const existing = await db.select("members", `?email=eq.${encodeURIComponent(app.email)}&limit=1`);
        if (existing && existing.length > 0) {
          await db.update("members", existing[0].id, { status: "deactivated", deactivated: true });
          setMembers((prev) => prev.filter((m) => m.email !== app.email));
        }
        setSelected((prev) => prev ? __spreadProps(__spreadValues({}, prev), { status: "rejected" }) : null);
      } catch (e) {
        alert("Error rejecting: " + e.message);
      }
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, borderBottom: "2px solid #e5e7eb" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 2 } }, ["All", "Pending", "Approved", "Rejected"].map((tab) => { const cnt = tab === "All" ? applications.length : applications.filter((a) => a.status === tab.toLowerCase()).length; return /* @__PURE__ */ React.createElement("button", { key: tab, onClick: () => setAppFilter(tab.toLowerCase()), style: { padding: "8px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: appFilter === tab.toLowerCase() ? 700 : 400, color: appFilter === tab.toLowerCase() ? DARK : "#6b7280", borderBottom: "2px solid " + (appFilter === tab.toLowerCase() ? GOLD : "transparent"), marginBottom: -2, transition: "all 0.15s" } }, tab, " (", cnt, ")"); })), /* @__PURE__ */ React.createElement("button", { onClick: handleRefresh, disabled: refreshing, title: "Refresh applications", style: { display: "flex", alignItems: "center", gap: 6, padding: "6px 14px", border: `1px solid ${BORDER}`, borderRadius: 8, background: "#fff", cursor: refreshing ? "not-allowed" : "pointer", fontSize: 13, color: refreshing ? "#9ca3af" : DARK, fontWeight: 500, marginBottom: 2, transition: "all 0.15s", opacity: refreshing ? 0.6 : 1 } }, /* @__PURE__ */ React.createElement("span", { style: { display: "inline-block", animation: refreshing ? "spin 0.8s linear infinite" : "none", lineHeight: 1 } }, "↻"), refreshing ? "Refreshing…" : "Refresh")), filteredApps.map((app) => /* @__PURE__ */ React.createElement("div", { key: app.id, onClick: () => setSelected(app), style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "20px 24px", marginBottom: 14, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, alignItems: "center" } }, /* @__PURE__ */ React.createElement(Avatar, { member: app, size: 48 }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, fontSize: 15, color: DARK } }, app.firstName, " ", app.lastName), /* @__PURE__ */ React.createElement("div", { style: { color: GOLD_TEXT, fontSize: 13 } }, app.role, " · ", (app.companies || []).join(", ")), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 12 } }, app.email, " · Class of ", app.graduationYear, " · ", app.country))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }, onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#9ca3af" } }, "Applied: ", app.appliedDate), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Badge, { label: app.status, color: app.status === "approved" ? "#22c55e" : app.status === "rejected" ? "#ef4444" : "#f59e0b" }), /* @__PURE__ */ React.createElement(Btn, { small: true, onClick: () => setSelected(app) }, "View Full Profile"), app.status !== "approved" && /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "success", onClick: () => approve(app) }, "✓ Approve"), app.status !== "rejected" && /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "danger", onClick: () => reject(app) }, "✕ Reject")))), app.motivation && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, background: "#fafaf8", borderRadius: 8, padding: "12px 16px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 5 } }, "Motivation"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#374151", lineHeight: 1.6 } }, app.motivation)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" } }, (app.industries || []).map((i) => /* @__PURE__ */ React.createElement(Tag, { key: i, label: i })), (app.regions || []).map((r) => /* @__PURE__ */ React.createElement(Tag, { key: r, label: r })), app.willingToMentor && /* @__PURE__ */ React.createElement(Badge, { label: "Mentor", color: "#8b5cf6" }), app.openToHiring && /* @__PURE__ */ React.createElement(Badge, { label: "Hiring", color: "#22c55e" })))), selected && /* @__PURE__ */ React.createElement(Modal, { onClose: () => setSelected(null), title: "Full Application", maxWidth: 680 }, /* @__PURE__ */ React.createElement(MemberForm, { initial: selected, onSubmit: () => {
    }, submitLabel: "", isSignup: true }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end", alignItems: "center", marginTop: 20, paddingTop: 16, borderTop: `1px solid ${BORDER}` } }, /* @__PURE__ */ React.createElement(Badge, { label: selected.status, color: selected.status === "approved" ? "#22c55e" : selected.status === "rejected" ? "#ef4444" : "#f59e0b" }), selected.status !== "rejected" && /* @__PURE__ */ React.createElement(Btn, { variant: "danger", onClick: () => reject(selected) }, "✕ Reject"), selected.status !== "approved" && /* @__PURE__ */ React.createElement(Btn, { variant: "success", onClick: () => approve(selected) }, "✓ Approve & Add to Network"))));
  };
  var AdminAnalytics = ({ members, setMembers }) => { const [viewMember, setViewMember] = useState(null); const updateMemberFromAnalytics = async (updated) => { try { await db.update("members", updated.id, memberToRow(updated)); setMembers((prev) => prev.map((m) => m.id === updated.id ? updated : m)); } catch(e) { alert("Error saving: " + e.message); } };
    const active = members.filter((m) => m.status === "active" && !m.deactivated);
    const totalDon = members.reduce((s, m) => s + (m.donationTotal || 0), 0);
    const avgEng = active.length ? Math.round(active.reduce((s, m) => s + (m.engagementScore || 0), 0) / active.length) : 0;
    const topDonors = [...members].sort((a, b) => (b.donationTotal || 0) - (a.donationTotal || 0)).slice(0, 5);
    const byIndustry = members.reduce((acc, m) => {
      (m.industries || []).forEach((i) => {
        acc[i] = (acc[i] || 0) + 1;
      });
      return acc;
    }, {});
    const byRegion = members.reduce((acc, m) => {
      (m.regions || []).forEach((r) => {
        acc[r] = (acc[r] || 0) + 1;
      });
      return acc;
    }, {});
    const mentors = members.filter((m) => m.willingToMentor).length;
    const hiring = members.filter((m) => m.openToHiring).length;
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } }, /* @__PURE__ */ React.createElement(StatCard, { label: "Total Members", value: members.length }), /* @__PURE__ */ React.createElement(StatCard, { label: "Active Members", value: active.length, accent: "#22c55e" }), /* @__PURE__ */ React.createElement(StatCard, { label: "Total Donated", value: `EGP ${fmt(totalDon)}`, accent: GOLD }), /* @__PURE__ */ React.createElement(StatCard, { label: "Avg. Engagement", value: `${avgEng}/100` })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 } }, /* @__PURE__ */ React.createElement(StatCard, { label: "Willing to Mentor", value: mentors, accent: "#8b5cf6" }), /* @__PURE__ */ React.createElement(StatCard, { label: "Open to Hiring", value: hiring, accent: "#22c55e" }), /* @__PURE__ */ React.createElement(StatCard, { label: "Deactivated", value: members.filter((m) => m.deactivated).length, accent: "#ef4444" })), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "22px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 16 } }, "Top Donors"), topDonors.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: m.id, onClick: () => setViewMember(m), style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: i < 4 ? `1px solid #f6f5f3` : "none", cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", width: 18 } }, "#", i + 1), /* @__PURE__ */ React.createElement(Avatar, { member: m, size: 28 }), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 500 } }, m.firstName, " ", m.lastName)), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: GOLD_TEXT } }, "EGP ", fmt(m.donationTotal))))), /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "22px" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 16 } }, "By Industry"), Object.entries(byIndustry).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([ind, count]) => /* @__PURE__ */ React.createElement("div", { key: ind, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "#374151" } }, ind), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 8 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 80, height: 4, borderRadius: 2, background: "#fdf0e1" } }, /* @__PURE__ */ React.createElement("div", { style: { width: `${count / members.length * 100}%`, height: "100%", background: GOLD, borderRadius: 2 } })), /* @__PURE__ */ React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", width: 14 } }, count))))), /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "22px", gridColumn: "1/-1" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: DARK, marginBottom: 16 } }, "By Region"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 } }, Object.entries(byRegion).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([reg, count]) => /* @__PURE__ */ React.createElement("div", { key: reg, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0" } }, /* @__PURE__ */ React.createElement("span", { style: { fontSize: 12, color: "#374151" } }, reg), /* @__PURE__ */ React.createElement(Badge, { label: count, color: GOLD_TEXT })))))), viewMember && /* @__PURE__ */ React.createElement(MemberDetailModal, { member: members.find((m) => m.id === viewMember.id) || viewMember, onClose: () => setViewMember(null), onUpdate: (u) => { updateMemberFromAnalytics(u); setViewMember(u); }, isAdmin: true }));
  };
  // ── JobDetailModal ────────────────────────────────────────────────────────────
  var JobDetailModal = ({ job, currentMember, allMembers, onClose, onApplied, onEdit, onStatusChange }) => {
    const [applying, setApplying] = useState(false);
    const [coverNote, setCoverNote] = useState("");
    const [applied, setApplied] = useState(false);
    const [busy, setBusy] = useState(false);
    const [checkingApplied, setCheckingApplied] = useState(true);
    const [editing, setEditing] = useState(false);
    const [matchCandidates, setMatchCandidates] = useState(null);
    const [loadingMatches, setLoadingMatches] = useState(false);
    const poster = allMembers.find((m) => m.id === (job.createdBy || job.created_by));
    const isOwner = currentMember && (job.createdBy || job.created_by) === currentMember.id;
    const isAdmin = currentMember && (currentMember.userRole === "admin" || currentMember.userRole === "super_admin");
    const wm = job.workMode || job.work_mode || "on-site";
    const et = job.employmentType || job.employment_type || "";
    const wmColor = { "remote": "#22c55e", "hybrid": "#3b82f6", "on-site": "#f59e0b" }[wm] || "#6b7280";

    React.useEffect(() => {
      if (!currentMember) { setCheckingApplied(false); return; }
      db.select("job_applications", `?job_id=eq.${job.id}&applicant_member_id=eq.${currentMember.id}&limit=1`)
        .then((rows) => { setApplied(!!(rows && rows.length)); setCheckingApplied(false); })
        .catch(() => setCheckingApplied(false));
    }, [job.id, currentMember]);

    // Load matching candidates (employer direction) — only for job owner / admin
    React.useEffect(() => {
      if (!currentMember) return;
      const canSee = (job.createdBy || job.created_by) === currentMember.id ||
        currentMember.userRole === "admin" || currentMember.userRole === "super_admin";
      if (!canSee) return;
      setLoadingMatches(true);
      db.select("candidate_profiles", "?select=*&limit=500")
        .then((rows) => {
          const jSkills = (job.skills || []).map((s) => s.toLowerCase());
          const jIndustry = (job.industry || "").toLowerCase();
          const jWorkMode = job.workMode || job.work_mode || "";
          const jCountry = (job.locationCountry || "").toLowerCase();

          const scored = (rows || []).map((row) => {
            const cp = rowToCandidateProfile(row);
            let score = 0;
            const cSkills = (cp.skills || []).map((s) => s.toLowerCase());
            const matchedSkills = jSkills.filter((s) => cSkills.includes(s));
            score += matchedSkills.length * 2;
            const cIndustries = (cp.industries || []).map((i) => i.toLowerCase());
            if (jIndustry && cIndustries.includes(jIndustry)) score += 3;
            if (jWorkMode && (cp.workPreference === "open" || cp.workPreference === jWorkMode)) score += 1;
            if (jCountry && (cp.locationCountry || "").toLowerCase() === jCountry) score += 1;
            return { cp, score, matchedSkills };
          })
            .filter((x) => x.score > 0 || x.cp.openToWork)
            .sort((a, b) => {
              // open-to-work + score first
              const aOpen = a.cp.openToWork ? 1 : 0;
              const bOpen = b.cp.openToWork ? 1 : 0;
              return (b.score + bOpen * 0.5) - (a.score + aOpen * 0.5);
            })
            .slice(0, 8);

          setMatchCandidates(scored);
          setLoadingMatches(false);
        })
        .catch(() => setLoadingMatches(false));
    }, [job.id]);

    const handleApply = async () => {
      if (!currentMember || busy) return;
      setBusy(true);
      try {
        await db.insert("job_applications", { job_id: job.id, applicant_member_id: currentMember.id, cover_note: coverNote.trim() || null }, { minimal: true });
        // Send DEO Mail to job poster
        if (poster) {
          const body = `New application for: ${job.title} at ${job.company || "your organisation"}\n\nApplicant: ${currentMember.firstName} ${currentMember.lastName}\nRole: ${currentMember.primaryRole || currentMember.role || ""}\nCompany: ${(currentMember.companies||[])[0]||""}\nCountry: ${currentMember.country||""}\nEmail: ${currentMember.email}${currentMember.linkedin ? "\nLinkedIn: "+currentMember.linkedin : ""}${coverNote ? "\n\nCover note:\n"+coverNote : ""}`;
          await db.insert("messages", { sender_id: currentMember.id, receiver_id: poster.id, subject: `Job Application: ${job.title}`, body }, { minimal: true }).catch(() => {});
        }
        setApplied(true);
        setApplying(false);
        onApplied && onApplied();
      } catch (e) {
        if (e.message && e.message.includes("unique")) { setApplied(true); setApplying(false); }
        else alert("Error applying: " + e.message);
      }
      setBusy(false);
    };

    const toggleStatus = async () => {
      const ns = (job.status || "open") === "open" ? "closed" : "open";
      try { await db.update("jobs", job.id, { status: ns }); onStatusChange && onStatusChange(ns); }
      catch (e) { alert(e.message); }
    };

    if (editing) return React.createElement(JobPostModal, { currentMember, onClose: () => setEditing(false), existingJob: job, onCreated: (updated) => { onEdit && onEdit(updated); setEditing(false); } });

    const Section = ({ title, content }) => content ? React.createElement("div", { style: { marginTop: 20 } },
      React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, title),
      React.createElement("div", { style: { fontSize: 14, color: "#374151", lineHeight: 1.75, whiteSpace: "pre-line" } }, content)
    ) : null;

    return React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20, backdropFilter: "blur(4px)" }, onClick: onClose },
      React.createElement("div", { style: { background: "#fff", borderRadius: 18, width: "100%", maxWidth: 700, maxHeight: "94vh", overflow: "hidden", display: "flex", flexDirection: "column" }, onClick: (e) => e.stopPropagation() },
        // Header band
        React.createElement("div", { style: { background: `linear-gradient(135deg, ${DARK} 0%, #1a2e1a 100%)`, padding: "28px 32px", color: "#fff", flexShrink: 0 } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
            React.createElement("div", { style: { flex: 1 } },
              React.createElement("div", { style: { fontSize: 24, fontWeight: 700, fontFamily: "var(--font-sans)", marginBottom: 6 } }, job.title),
              React.createElement("div", { style: { fontSize: 15, color: "#d1fae5", fontWeight: 600, marginBottom: 10 } }, job.company),
              React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" } },
                (job.location||job.locationCountry) && React.createElement("span", { style: { fontSize: 12, color: "#9ca3af" } }, "📍 ", [job.location, job.locationCountry].filter(Boolean).join(", ")),
                React.createElement("span", { style: { background: wmColor + "30", color: wmColor, borderRadius: 12, padding: "2px 10px", fontSize: 11, fontWeight: 700 } }, WORK_MODE_LABELS[wm] || wm),
                et && React.createElement("span", { style: { background: "#22c55e30", color: "#22c55e", borderRadius: 12, padding: "2px 10px", fontSize: 11, fontWeight: 700 } }, et),
                job.seniorityLevel && React.createElement("span", { style: { background: "#8b5cf630", color: "#a78bfa", borderRadius: 12, padding: "2px 10px", fontSize: 11, fontWeight: 700 } }, job.seniorityLevel),
                React.createElement("span", { style: { background: (job.status||"open")==="open" ? "#22c55e30" : "#ef444430", color: (job.status||"open")==="open" ? "#22c55e" : "#ef4444", borderRadius: 12, padding: "2px 10px", fontSize: 11, fontWeight: 700, textTransform: "uppercase" } }, job.status || "Open")
              )
            ),
            React.createElement("button", { onClick: onClose, style: { background: "rgba(255,255,255,0.15)", border: "none", width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 16, color: "#fff", flexShrink: 0 } }, "✕")
          )
        ),
        // Body
        React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "24px 32px" } },
          // Meta row
          React.createElement("div", { style: { display: "flex", gap: 20, flexWrap: "wrap", padding: "14px 0", borderBottom: `1px solid ${BORDER}`, marginBottom: 4 } },
            job.department && React.createElement("div", { style: { textAlign: "center" } }, React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px" } }, "Department"), React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK } }, job.department)),
            job.industry && React.createElement("div", { style: { textAlign: "center" } }, React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px" } }, "Industry"), React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK } }, job.industry)),
            job.salaryRange && React.createElement("div", { style: { textAlign: "center" } }, React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px" } }, "Salary"), React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK } }, job.salaryRange)),
            job.applicationDeadline && React.createElement("div", { style: { textAlign: "center" } }, React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px" } }, "Deadline"), React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: "#ef4444" } }, job.applicationDeadline))
          ),
          job.summary && React.createElement("div", { style: { marginTop: 16, fontSize: 15, color: "#374151", lineHeight: 1.75, fontStyle: "italic", background: "#faf9f7", borderRadius: 10, padding: "14px 16px" } }, job.summary),
          React.createElement(Section, { title: "Description", content: job.description }),
          React.createElement(Section, { title: "Key Responsibilities", content: job.responsibilities }),
          React.createElement(Section, { title: "Requirements & Qualifications", content: job.requirements }),
          React.createElement(Section, { title: "Preferred Experience", content: job.preferredExperience }),
          (job.skills||[]).length > 0 && React.createElement("div", { style: { marginTop: 20 } },
            React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, "Skills & Tags"),
            React.createElement("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" } },
              (job.skills||[]).map((s) => React.createElement("span", { key: s, style: { background: "#fdf0e1", color: "#9a4a00", borderRadius: 16, padding: "4px 12px", fontSize: 12, fontWeight: 500 } }, s))
            )
          ),
          // Poster card
          poster && React.createElement("div", { style: { marginTop: 24, background: "#faf9f7", borderRadius: 12, padding: "16px", display: "flex", gap: 14, alignItems: "center", border: `1px solid ${BORDER}` } },
            React.createElement(Avatar, { member: poster, size: 44 }),
            React.createElement("div", { style: { flex: 1 } },
              React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginBottom: 2 } }, "Posted by"),
              React.createElement("div", { style: { fontWeight: 700, color: DARK } }, poster.firstName, " ", poster.lastName),
              React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, poster.primaryRole || poster.role)
            )
          ),
          // ── Matching Candidates panel (owner / admin only) ──────────────────
          (isOwner || isAdmin) && React.createElement("div", { style: { marginTop: 28 } },
            React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 14 } },
              React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: DARK, textTransform: "uppercase", letterSpacing: "0.7px" } }, "✨ Suggested Candidates"),
              React.createElement("span", { style: { fontSize: 11, color: "#9ca3af" } }, "DEO members whose profiles match this role")
            ),
            loadingMatches && React.createElement("div", { style: { color: "#9ca3af", fontSize: 13 } }, "Scanning profiles…"),
            !loadingMatches && matchCandidates && matchCandidates.length === 0 &&
              React.createElement("div", { style: { background: "#faf9f7", borderRadius: 10, padding: "16px", fontSize: 13, color: "#9ca3af", textAlign: "center", border: `1px solid ${BORDER}` } }, "No matching candidate profiles found yet."),
            !loadingMatches && matchCandidates && matchCandidates.length > 0 &&
              React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
                matchCandidates.map(({ cp, score, matchedSkills }) => {
                  const mem = allMembers.find((m) => m.id === cp.memberId);
                  if (!mem) return null;
                  const isStrong = score >= 4;
                  return React.createElement("div", { key: cp.id, style: { background: isStrong ? "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)" : "#faf9f7", border: `1px solid ${isStrong ? GOLD + "66" : BORDER}`, borderRadius: 12, padding: "14px 16px", display: "flex", gap: 14, alignItems: "flex-start" } },
                    React.createElement(Avatar, { member: mem, size: 40 }),
                    React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                      React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" } },
                        React.createElement("div", { style: { fontWeight: 700, color: DARK, fontSize: 14 } }, mem.firstName, " ", mem.lastName),
                        cp.openToWork && React.createElement("span", { style: { background: "#dcfce7", color: "#16a34a", borderRadius: 10, padding: "1px 8px", fontSize: 10, fontWeight: 700 } }, "Open to Work"),
                        isStrong && React.createElement("span", { style: { background: GOLD + "22", color: GOLD, borderRadius: 10, padding: "1px 8px", fontSize: 10, fontWeight: 700 } }, "✨ Strong Match")
                      ),
                      React.createElement("div", { style: { fontSize: 12, color: "#6b7280", marginTop: 2 } }, cp.currentTitle || mem.primaryRole || mem.role || "", cp.locationCountry ? ` · ${cp.locationCountry}` : ""),
                      matchedSkills.length > 0 && React.createElement("div", { style: { display: "flex", gap: 4, flexWrap: "wrap", marginTop: 7 } },
                        matchedSkills.slice(0, 5).map((s) => React.createElement("span", { key: s, style: { background: GOLD + "22", color: "#9a4a00", borderRadius: 8, padding: "2px 8px", fontSize: 11, fontWeight: 500, textTransform: "capitalize" } }, s))
                      ),
                      cp.workPreference && cp.workPreference !== "open" && React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginTop: 5 } }, WORK_PREF_LABELS[cp.workPreference] || cp.workPreference)
                    ),
                    React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end", flexShrink: 0 } },
                      React.createElement("div", { style: { fontSize: 12, fontWeight: 700, color: isStrong ? GOLD_TEXT : "#6b7280" } }, score > 0 ? `${score}pts` : ""),
                      React.createElement("a", { href: `mailto:${mem.email}?subject=Your DEO Leaders profile matches: ${job.title}`, style: { fontSize: 11, color: "#fff", background: DARK, borderRadius: 8, padding: "5px 12px", textDecoration: "none", fontWeight: 600, whiteSpace: "nowrap" } }, "✉ Contact")
                    )
                  );
                })
              )
          ),
          // Apply form
          applying && !applied && React.createElement("div", { style: { marginTop: 20, background: "#f0fdf4", borderRadius: 12, padding: "18px", border: "1px solid #d1fae5" } },
            React.createElement("div", { style: { fontWeight: 700, color: DARK, marginBottom: 10 } }, "Apply for this role"),
            React.createElement("div", { style: { fontSize: 13, color: "#6b7280", marginBottom: 12 } }, "Your DEO Leaders profile will be shared with the poster. Add an optional note below."),
            React.createElement(Textarea, { label: "Cover Note (optional)", value: coverNote, onChange: setCoverNote, rows: 3, placeholder: "Introduce yourself or explain why you're a great fit…" }),
            React.createElement("div", { style: { display: "flex", gap: 10, marginTop: 12 } },
              React.createElement(Btn, { variant: "ghost", onClick: () => setApplying(false) }, "Cancel"),
              React.createElement(Btn, { onClick: handleApply, disabled: busy }, busy ? "Sending…" : "Submit Application")
            )
          ),
          applied && React.createElement("div", { style: { marginTop: 20, background: "#f0fdf4", borderRadius: 12, padding: "18px", border: "1px solid #d1fae5", textAlign: "center" } },
            React.createElement("div", { style: { fontSize: 24, marginBottom: 8 } }, "✅"),
            React.createElement("div", { style: { fontWeight: 700, color: "#16a34a" } }, "Application submitted"),
            React.createElement("div", { style: { fontSize: 13, color: "#6b7280", marginTop: 4 } }, "The poster has been notified via DEO Mail.")
          )
        ),
        // Footer actions
        React.createElement("div", { style: { padding: "16px 32px", borderTop: `1px solid ${BORDER}`, display: "flex", gap: 10, alignItems: "center", flexShrink: 0 } },
          !checkingApplied && !applied && !applying && (job.status||"open")==="open" && currentMember && !isOwner &&
            React.createElement(Btn, { onClick: () => setApplying(true) }, "💼 Apply Now"),
          (isOwner || isAdmin) && React.createElement(Btn, { variant: "secondary", onClick: () => setEditing(true) }, "✏️ Edit"),
          (isOwner || isAdmin) && React.createElement(Btn, { variant: "ghost", onClick: toggleStatus, style: { color: (job.status||"open")==="open" ? "#ef4444" : "#22c55e" } }, (job.status||"open")==="open" ? "Close Job" : "Reopen Job"),
          job.applicationEmail && React.createElement("a", { href: `mailto:${job.applicationEmail}?subject=Application: ${job.title}`, style: { fontSize: 12, color: "#6b7280", marginLeft: "auto", textDecoration: "none" } }, "Apply by email ↗")
        )
      )
    );
  };

  // ── JobCard — compact card for the jobs board listing ─────────────────────
  var JobCard = ({ job, currentMember, onClick }) => {
    const wm = job.workMode || job.work_mode || "on-site";
    const et = job.employmentType || job.employment_type || "";
    const isOpen = (job.status || "open") === "open";
    const wmColor = { "remote": "#22c55e", "hybrid": "#3b82f6", "on-site": "#f59e0b" }[wm] || "#6b7280";
    const daysAgo = job.createdAt ? Math.floor((Date.now() - new Date(job.createdAt).getTime()) / 86400000) : null;

    return React.createElement("div", { onClick, style: { background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, padding: "20px 22px", cursor: "pointer", transition: "box-shadow 0.15s, border-color 0.15s", display: "flex", gap: 16, alignItems: "flex-start" },
      onMouseEnter: (e) => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)"; e.currentTarget.style.borderColor = GOLD + "66"; },
      onMouseLeave: (e) => { e.currentTarget.style.boxShadow = ""; e.currentTarget.style.borderColor = BORDER; }
    },
      React.createElement("div", { style: { flex: 1, minWidth: 0 } },
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 8, flexWrap: "wrap" } },
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, job.title),
            React.createElement("div", { style: { fontSize: 13, color: "#6b7280", marginTop: 2 } }, job.company, job.department ? ` · ${job.department}` : "")
          ),
          React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap", justifyContent: "flex-end" } },
            React.createElement("span", { style: { background: isOpen ? "#dcfce7" : "#fee2e2", color: isOpen ? "#16a34a" : "#dc2626", borderRadius: 10, padding: "2px 9px", fontSize: 10, fontWeight: 700, textTransform: "uppercase", flexShrink: 0 } }, isOpen ? "Open" : "Closed"),
            et && React.createElement("span", { style: { background: "#22c55e18", color: "#16a34a", border: "1px solid #22c55e33", borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 600, flexShrink: 0 } }, et)
          )
        ),
        React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center", marginTop: 8 } },
          (job.location || job.locationCountry) && React.createElement("span", { style: { fontSize: 12, color: "#9ca3af" } }, "📍 ", [job.location, job.locationCountry].filter(Boolean).join(", ")),
          wm && React.createElement("span", { style: { background: wmColor + "18", color: wmColor, border: `1px solid ${wmColor}33`, borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 600 } }, WORK_MODE_LABELS[wm] || wm),
          job.seniorityLevel && React.createElement("span", { style: { fontSize: 12, color: "#8b5cf6" } }, "⬆ ", job.seniorityLevel),
          job.salaryRange && React.createElement("span", { style: { fontSize: 12, color: GOLD_TEXT, fontWeight: 600 } }, "💰 ", job.salaryRange),
          daysAgo !== null && React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", marginLeft: "auto" } }, daysAgo === 0 ? "Today" : daysAgo === 1 ? "Yesterday" : `${daysAgo}d ago`)
        ),
        (job.summary || job.description) && React.createElement("div", { style: { fontSize: 13, color: "#6b7280", marginTop: 8, lineHeight: 1.6 } }, (() => { const t = job.summary || job.description || ""; return t.length > 120 ? t.slice(0, 120) + "…" : t; })()),
        (job.skills||[]).length > 0 && React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap", marginTop: 8 } },
          (job.skills||[]).slice(0, 4).map((s) => React.createElement("span", { key: s, style: { background: "#fdf0e1", color: "#9a4a00", borderRadius: 10, padding: "2px 9px", fontSize: 11 } }, s))
        )
      )
    );
  };

  // ── JobsBoard — dedicated careers tab showing all jobs ────────────────────
  var JobsBoard = ({ currentMember, jobs, setJobs, candidateProfile, allMembers, onEditCandidateProfile }) => {
    const [search, setSearch] = useState("");
    const [filterWorkMode, setFilterWorkMode] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterCountry, setFilterCountry] = useState("");
    const [filterSeniority, setFilterSeniority] = useState("");
    const [filterDept, setFilterDept] = useState("");
    const [showOpen, setShowOpen] = useState(true);
    const [viewJob, setViewJob] = useState(null);
    const [showPostJob, setShowPostJob] = useState(false);
    const [jobApplications, setJobApplications] = useState({});
    const [sortBy, setSortBy] = useState("newest");

    // Load application counts for jobs this user posted
    React.useEffect(() => {
      if (!currentMember) return;
      const myJobs = jobs.filter((j) => (j.created_by||j.createdBy) === currentMember.id);
      if (!myJobs.length) return;
      const ids = myJobs.map((j) => j.id).join(",");
      db.select("job_applications", `?job_id=in.(${ids})`).then((rows) => {
        const counts = {};
        (rows||[]).forEach((r) => { counts[r.job_id] = (counts[r.job_id]||0)+1; });
        setJobApplications(counts);
      }).catch(() => {});
    }, [jobs.length, currentMember]);

    const mappedJobs = jobs.map((j) => j.title !== undefined ? j : rowToJob(j));

    const filtered = mappedJobs.filter((j) => {
      if (showOpen && (j.status||"open") !== "open") return false;
      if (filterWorkMode && (j.workMode||j.work_mode) !== filterWorkMode) return false;
      if (filterType && (j.employmentType||j.employment_type) !== filterType) return false;
      if (filterCountry && j.locationCountry !== filterCountry) return false;
      if (filterSeniority && j.seniorityLevel !== filterSeniority) return false;
      if (filterDept && j.department !== filterDept) return false;
      if (search) {
        const q = search.toLowerCase();
        const hay = `${j.title} ${j.company} ${j.description||""} ${j.summary||""} ${(j.skills||[]).join(" ")} ${j.department||""} ${j.industry||""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    }).sort((a, b) => sortBy === "newest" ? new Date(b.createdAt||b.created_at||0) - new Date(a.createdAt||a.created_at||0) : (a.title||"").localeCompare(b.title||""));

    // Matching: for logged-in user show jobs matching their profile skills/industries
    const matchScore = (job) => {
      if (!currentMember || !candidateProfile) return 0;
      let score = 0;
      const jSkills = (job.skills||[]).map((s) => s.toLowerCase());
      const pSkills = ((candidateProfile.skills||[]).concat(currentMember.expertise||[])).map((s) => s.toLowerCase());
      jSkills.forEach((s) => { if (pSkills.includes(s)) score += 2; });
      const jIndustry = (job.industry||"").toLowerCase();
      if (jIndustry && (currentMember.industries||[]).map((i)=>i.toLowerCase()).includes(jIndustry)) score += 3;
      const jCountry = (job.locationCountry||"").toLowerCase();
      if (jCountry && jCountry === (currentMember.country||"").toLowerCase()) score++;
      if ((job.workMode||job.work_mode) === (candidateProfile.workPreference||"")) score++;
      return score;
    };

    const hasFilters = filterWorkMode || filterType || filterCountry || filterSeniority || filterDept || search;
    const activeCountries = [...new Set(mappedJobs.map((j) => j.locationCountry).filter(Boolean))].sort();

    return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
      // Header bar
      React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 } },
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" } }, "DEO Leaders Network"),
          React.createElement("div", { style: { fontSize: 20, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, "Careers Board")
        ),
        React.createElement("div", { style: { display: "flex", gap: 8 } },
          onEditCandidateProfile && React.createElement(Btn, { variant: candidateProfile ? "secondary" : "ghost", onClick: onEditCandidateProfile, small: true }, candidateProfile ? (candidateProfile.openToWork ? "✅ Open to Work" : "📄 My CV Profile") : "📄 Set Up CV Profile"),
          React.createElement(Btn, { onClick: () => setShowPostJob(true) }, "💼 Post a Job")
        )
      ),
      // Search + filters
      React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "16px 18px" } },
        React.createElement("div", { style: { position: "relative", marginBottom: 12 } },
          React.createElement("span", { style: { position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" } }, "🔍"),
          React.createElement("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search jobs by title, company, skills…", style: { width: "100%", padding: "10px 12px 10px 36px", border: `1px solid #e5e7eb`, borderRadius: 10, fontSize: 14, outline: "none", boxSizing: "border-box" } })
        ),
        React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" } },
          ...[
            { v: filterWorkMode, set: setFilterWorkMode, opts: WORK_MODE_OPTIONS, labels: WORK_MODE_LABELS, placeholder: "Work Mode" },
            { v: filterType, set: setFilterType, opts: EMPLOYMENT_TYPE_OPTIONS, labels: {}, placeholder: "Job Type" },
            { v: filterSeniority, set: setFilterSeniority, opts: SENIORITY_OPTIONS, labels: {}, placeholder: "Seniority" },
            { v: filterDept, set: setFilterDept, opts: JOB_FUNCTION_OPTIONS, labels: {}, placeholder: "Department" },
            { v: filterCountry, set: setFilterCountry, opts: activeCountries, labels: {}, placeholder: "Country" }
          ].map(({ v, set: sv, opts, labels, placeholder }) =>
            React.createElement("select", { key: placeholder, value: v, onChange: (e) => sv(e.target.value), style: { padding: "6px 10px", border: `1px solid ${v ? GOLD : "#e5e7eb"}`, borderRadius: 8, fontSize: 12, background: v ? "#faf6ec" : "#fff", color: v ? "#9a4a00" : "#6b7280", cursor: "pointer" } },
              React.createElement("option", { value: "" }, placeholder),
              opts.map((o) => React.createElement("option", { key: o, value: o }, labels[o] || o))
            )
          ),
          React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#6b7280", cursor: "pointer", padding: "6px 10px", border: `1px solid ${showOpen ? GOLD : "#e5e7eb"}`, borderRadius: 8, background: showOpen ? "#faf6ec" : "#fff" } },
            React.createElement("input", { type: "checkbox", checked: showOpen, onChange: (e) => setShowOpen(e.target.checked), style: { margin: 0 } }),
            "Open only"
          ),
          hasFilters && React.createElement("button", { onClick: () => { setFilterWorkMode(""); setFilterType(""); setFilterCountry(""); setFilterSeniority(""); setFilterDept(""); setSearch(""); }, style: { padding: "6px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, color: "#ef4444", background: "#fff", cursor: "pointer" } }, "✕ Clear"),
          React.createElement("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), style: { padding: "6px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, color: "#6b7280", background: "#fff", cursor: "pointer", marginLeft: "auto" } },
            React.createElement("option", { value: "newest" }, "Newest first"),
            React.createElement("option", { value: "alpha" }, "A–Z")
          )
        )
      ),
      // Results summary
      React.createElement("div", { style: { fontSize: 12, color: "#9ca3af" } }, filtered.length, " job", filtered.length !== 1 ? "s" : "", hasFilters ? " matching filters" : " available"),
      // Job list
      filtered.length === 0
        ? React.createElement("div", { style: { textAlign: "center", padding: "60px 0", color: "#9ca3af" } },
            React.createElement("div", { style: { fontSize: 40, marginBottom: 12 } }, "💼"),
            React.createElement("div", { style: { fontWeight: 600, color: DARK, marginBottom: 6 } }, hasFilters ? "No jobs match your filters" : "No jobs posted yet"),
            React.createElement("div", { style: { fontSize: 13 } }, "Be the first to post an opportunity for the network.")
          )
        : React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
            filtered.map((job) => {
              const score = matchScore(job);
              return React.createElement("div", { key: job.id, style: { position: "relative" } },
                score >= 3 && React.createElement("div", { style: { position: "absolute", top: -8, right: 12, background: GOLD, color: "#fff", borderRadius: 10, padding: "2px 10px", fontSize: 10, fontWeight: 700, zIndex: 1 } }, "✨ Matches your profile"),
                React.createElement(JobCard, { job, currentMember, onClick: () => setViewJob(job) }),
                (jobApplications[job.id]||0) > 0 && React.createElement("div", { style: { position: "absolute", bottom: 12, right: 14, fontSize: 11, color: "#8b5cf6", fontWeight: 600 } }, jobApplications[job.id], " applicant", jobApplications[job.id]>1?"s":"")
              );
            })
          ),
      // Modals
      showPostJob && React.createElement(JobPostModal, { currentMember, onClose: () => setShowPostJob(false), onCreated: (job, fi) => {
        setJobs((prev) => [job, ...prev]);
        setShowPostJob(false);
      }}),
      viewJob && React.createElement(JobDetailModal, { job: viewJob, currentMember, allMembers, onClose: () => setViewJob(null), onApplied: () => {}, onEdit: (updated) => { setJobs((prev) => prev.map((j) => j.id === updated.id ? { ...j, ...updated } : j)); setViewJob({ ...viewJob, ...updated }); }, onStatusChange: (ns) => { setJobs((prev) => prev.map((j) => j.id === viewJob.id ? { ...j, status: ns } : j)); setViewJob((v) => v ? { ...v, status: ns } : v); } })
    );
  };

  // ── CandidateProfileModal ─────────────────────────────────────────────────
  var CandidateProfileModal = ({ currentMember, existingProfile, onClose, onSaved }) => {
    const empty = { currentTitle: currentMember.primaryRole||currentMember.role||"", desiredTitle: "", location: currentMember.country||"", locationCountry: currentMember.country||"", workPreference: "open", yearsExperience: "", industries: currentMember.industries||[], functions: [], skills: currentMember.expertise||[], summary: currentMember.bio||"", cvData: null, cvName: "", openToWork: true };
    const [form, setForm] = useState(existingProfile ? { ...empty, ...existingProfile } : empty);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

    const pickCV = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { setErr("CV must be under 10 MB."); return; }
      const reader = new FileReader();
      reader.onload = (ev) => set("cvData")(ev.target.result) || set("cvName")(file.name);
      reader.onload = (ev) => { setForm((f) => ({ ...f, cvData: ev.target.result, cvName: file.name })); };
      reader.readAsDataURL(file);
    };

    const save = async () => {
      if (!form.currentTitle.trim()) { setErr("Current title is required."); return; }
      setBusy(true); setErr("");
      try {
        const row = { ...candidateProfileToRow(form), member_id: currentMember.id };
        if (existingProfile) {
          await db.update("candidate_profiles", existingProfile.id, candidateProfileToRow(form));
          onSaved({ ...existingProfile, ...form });
        } else {
          const rows = await db.insert("candidate_profiles", row);
          onSaved(rowToCandidateProfile(rows[0]));
        }
        onClose();
      } catch (e) { setErr(e.message); }
      setBusy(false);
    };

    return React.createElement(Modal, { onClose, title: existingProfile ? "Edit CV Profile" : "Create CV Profile", maxWidth: 620 },
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        React.createElement("div", { style: { background: "#faf9f7", borderRadius: 10, padding: "12px 14px", fontSize: 13, color: "#6b7280" } }, "Your CV profile is visible to all DEO Leaders members and helps you get matched with relevant job opportunities."),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },
          React.createElement(Input, { label: "Current Title *", value: form.currentTitle, onChange: set("currentTitle"), placeholder: "e.g. Product Manager" }),
          React.createElement(Input, { label: "Desired Title", value: form.desiredTitle, onChange: set("desiredTitle"), placeholder: "e.g. VP of Product" })
        ),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },
          React.createElement(Input, { label: "Location", value: form.location, onChange: set("location"), placeholder: "City" }),
          React.createElement(Select, { label: "Country", value: form.locationCountry, onChange: set("locationCountry"), options: ["", ...ALL_COUNTRY_OPTIONS] })
        ),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },
          React.createElement(Select, { label: "Work Preference", value: form.workPreference, onChange: set("workPreference"), options: WORK_PREF_OPTIONS }),
          React.createElement(Input, { label: "Years of Experience", type: "number", value: form.yearsExperience, onChange: set("yearsExperience"), placeholder: "e.g. 8" })
        ),
        React.createElement(Textarea, { label: "Professional Summary", value: form.summary, onChange: set("summary"), rows: 3, placeholder: "A short intro about your background, goals, and what you're looking for…" }),
        React.createElement(MultiSelect, { label: "Industries", value: form.industries, onChange: set("industries"), options: INDUSTRY_OPTIONS }),
        React.createElement(MultiSelect, { label: "Functions / Departments", value: form.functions, onChange: set("functions"), options: JOB_FUNCTION_OPTIONS }),
        React.createElement(MultiSelect, { label: "Skills & Expertise", value: form.skills, onChange: set("skills"), options: SKILLS_OPTIONS }),
        // CV Upload
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
          React.createElement("label", { className: "ui-label" }, "Upload CV / Resume (PDF, max 10 MB)"),
          React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } },
            React.createElement("label", { style: { display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 16px", background: "#fdf0e1", border: "none", borderRadius: 8, fontSize: 13, color: "#9a4a00", cursor: "pointer", fontWeight: 500 } },
              "📎 ", form.cvData ? "Replace CV" : "Upload CV",
              React.createElement("input", { type: "file", accept: ".pdf,application/pdf", onChange: pickCV, style: { display: "none" } })
            ),
            form.cvData && React.createElement("span", { style: { fontSize: 13, color: "#374151" } }, "✅ ", form.cvName||"CV uploaded"),
            form.cvData && React.createElement("button", { onClick: () => setForm((f) => ({ ...f, cvData: null, cvName: "" })), style: { fontSize: 12, color: "#ef4444", background: "none", border: "none", cursor: "pointer" } }, "Remove")
          )
        ),
        React.createElement("label", { style: { display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontSize: 14, fontWeight: 500, color: DARK } },
          React.createElement("input", { type: "checkbox", checked: form.openToWork, onChange: (e) => set("openToWork")(e.target.checked) }),
          "I am actively open to work"
        ),
        err && React.createElement("div", { style: { color: "#dc2626", fontSize: 13 } }, err),
        React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } },
          React.createElement(Btn, { variant: "ghost", onClick: onClose }, "Cancel"),
          React.createElement(Btn, { onClick: save, disabled: busy }, busy ? "Saving…" : (existingProfile ? "Save Changes" : "Create Profile"))
        )
      )
    );
  };

  // ── AdminCareers ──────────────────────────────────────────────────────────
  var AdminCareers = ({ members, jobs, setJobs }) => {
    const [subTab, setSubTab] = useState("jobs");
    const [search, setSearch] = useState("");
    const [applications, setApplications] = useState([]);
    const [candidates, setCandidates] = useState([]);
    const [loadingApps, setLoadingApps] = useState(false);
    const [viewJob, setViewJob] = useState(null);
    const [editJob, setEditJob] = useState(null);
    const adminMember = members[0]; // placeholder – admin context

    React.useEffect(() => {
      if (subTab === "applications" && !applications.length) {
        setLoadingApps(true);
        db.select("job_applications", "?order=created_at.desc").then((rows) => { setApplications(rows||[]); setLoadingApps(false); }).catch(() => setLoadingApps(false));
      }
      if (subTab === "candidates" && !candidates.length) {
        db.select("candidate_profiles", "?order=created_at.desc").then((rows) => { setCandidates((rows||[]).map(rowToCandidateProfile)); }).catch(() => {});
      }
    }, [subTab]);

    const mappedJobs = jobs.map((j) => j.title !== undefined ? j : rowToJob(j));
    const filteredJobs = mappedJobs.filter((j) => {
      if (!search) return true;
      return `${j.title} ${j.company} ${j.location||""} ${j.status||""}`.toLowerCase().includes(search.toLowerCase());
    });

    const closeJob = async (job) => {
      const ns = (job.status||"open") === "open" ? "closed" : "open";
      try { await db.update("jobs", job.id, { status: ns }); setJobs((prev) => prev.map((j) => j.id === job.id ? { ...j, status: ns, status: ns } : j)); }
      catch (e) { alert(e.message); }
    };

    const deleteJob = async (job) => {
      if (!window.confirm(`Delete "${job.title}"? This cannot be undone.`)) return;
      try { await db.delete("jobs", job.id); setJobs((prev) => prev.filter((j) => j.id !== job.id)); }
      catch (e) { alert(e.message); }
    };

    const tabStyle = (k) => ({ padding: "8px 16px", border: "none", borderBottom: subTab===k ? `2px solid ${GOLD}` : "2px solid transparent", background: "none", fontWeight: subTab===k ? 700 : 400, color: subTab===k ? GOLD : "#9ca3af", cursor: "pointer", fontSize: 13 });

    return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
      // Stats row
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } },
        React.createElement(StatCard, { label: "Total Jobs", value: mappedJobs.length }),
        React.createElement(StatCard, { label: "Open", value: mappedJobs.filter((j)=>(j.status||"open")==="open").length, accent: "#22c55e" }),
        React.createElement(StatCard, { label: "Closed", value: mappedJobs.filter((j)=>j.status==="closed").length, accent: "#ef4444" }),
        React.createElement(StatCard, { label: "Applications", value: applications.length, accent: GOLD })
      ),
      // Sub-tabs
      React.createElement("div", { style: { display: "flex", borderBottom: `1px solid ${BORDER}`, background: "#fff", borderRadius: "12px 12px 0 0", padding: "0 16px" } },
        React.createElement("button", { style: tabStyle("jobs"), onClick: () => setSubTab("jobs") }, "💼 All Jobs"),
        React.createElement("button", { style: tabStyle("applications"), onClick: () => setSubTab("applications") }, "📋 Applications"),
        React.createElement("button", { style: tabStyle("candidates"), onClick: () => setSubTab("candidates") }, "👤 Candidate Profiles")
      ),
      // Jobs list
      subTab === "jobs" && React.createElement("div", { style: { background: "#fff", borderRadius: "0 0 12px 12px", border: `1px solid ${BORDER}`, borderTop: "none" } },
        React.createElement("div", { style: { padding: "14px 18px", borderBottom: `1px solid ${BORDER}` } },
          React.createElement("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search jobs…", style: { width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 9, fontSize: 13, outline: "none" } })
        ),
        filteredJobs.length === 0 ? React.createElement("div", { style: { padding: "40px", textAlign: "center", color: "#9ca3af" } }, "No jobs yet.") :
        filteredJobs.map((job) => {
          const poster = members.find((m) => m.id === (job.createdBy||job.created_by));
          return React.createElement("div", { key: job.id, style: { display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: `1px solid #faf9f7` } },
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              React.createElement("div", { style: { fontWeight: 700, color: DARK, fontSize: 14 } }, job.title),
              React.createElement("div", { style: { fontSize: 12, color: "#6b7280", marginTop: 2 } }, job.company, job.locationCountry ? ` · ${job.locationCountry}` : "", poster ? ` · by ${poster.firstName} ${poster.lastName}` : "")
            ),
            React.createElement("span", { style: { background: (job.status||"open")==="open" ? "#dcfce7" : "#fee2e2", color: (job.status||"open")==="open" ? "#16a34a" : "#dc2626", borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 700, flexShrink: 0 } }, job.status||"open"),
            React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", flexShrink: 0 } }, (job.createdAt||job.created_at||"").slice(0,10)),
            React.createElement("div", { style: { display: "flex", gap: 6 } },
              React.createElement(Btn, { small: true, variant: "secondary", onClick: () => setViewJob(job) }, "View"),
              React.createElement(Btn, { small: true, variant: "ghost", onClick: () => closeJob(job) }, (job.status||"open")==="open" ? "Close" : "Reopen"),
              React.createElement(Btn, { small: true, variant: "ghost", style: { color: "#ef4444" }, onClick: () => deleteJob(job) }, "Delete")
            )
          );
        })
      ),
      // Applications list
      subTab === "applications" && React.createElement("div", { style: { background: "#fff", borderRadius: "0 0 12px 12px", border: `1px solid ${BORDER}`, borderTop: "none" } },
        loadingApps ? React.createElement("div", { style: { padding: 40, textAlign: "center", color: "#9ca3af" } }, "Loading…") :
        applications.length === 0 ? React.createElement("div", { style: { padding: "40px", textAlign: "center", color: "#9ca3af" } }, "No applications yet.") :
        applications.map((app) => {
          const applicant = members.find((m) => m.id === app.applicant_member_id);
          const job = mappedJobs.find((j) => j.id === app.job_id);
          return React.createElement("div", { key: app.id, style: { display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: `1px solid #faf9f7` } },
            applicant ? React.createElement(Avatar, { member: applicant, size: 36 }) : null,
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              React.createElement("div", { style: { fontWeight: 600, color: DARK, fontSize: 14 } }, applicant ? `${applicant.firstName} ${applicant.lastName}` : "Member"),
              React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, "Applied to: ", job ? job.title : app.job_id, job?.company ? ` at ${job.company}` : ""),
              app.cover_note && React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 2, fontStyle: "italic" } }, `"${app.cover_note.slice(0, 80)}${app.cover_note.length > 80 ? "…" : ""}"`)
            ),
            React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", flexShrink: 0 } }, (app.created_at||"").slice(0,10))
          );
        })
      ),
      // Candidate profiles
      subTab === "candidates" && React.createElement("div", { style: { background: "#fff", borderRadius: "0 0 12px 12px", border: `1px solid ${BORDER}`, borderTop: "none" } },
        candidates.length === 0 ? React.createElement("div", { style: { padding: "40px", textAlign: "center", color: "#9ca3af" } }, "No candidate profiles yet.") :
        candidates.map((cp) => {
          const m = members.find((mem) => mem.id === cp.memberId);
          return React.createElement("div", { key: cp.id, style: { display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderBottom: `1px solid #faf9f7` } },
            m ? React.createElement(Avatar, { member: m, size: 36 }) : null,
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              React.createElement("div", { style: { fontWeight: 600, color: DARK, fontSize: 14 } }, m ? `${m.firstName} ${m.lastName}` : "Member"),
              React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, cp.currentTitle, cp.locationCountry ? ` · ${cp.locationCountry}` : "", ` · ${WORK_PREF_LABELS[cp.workPreference]||cp.workPreference}`),
              (cp.skills||[]).length > 0 && React.createElement("div", { style: { display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" } },
                (cp.skills||[]).slice(0,4).map((s) => React.createElement("span", { key: s, style: { background: "#fdf0e1", color: "#9a4a00", borderRadius: 10, padding: "1px 8px", fontSize: 11 } }, s))
              )
            ),
            cp.openToWork && React.createElement("span", { style: { background: "#dcfce7", color: "#16a34a", borderRadius: 10, padding: "2px 9px", fontSize: 11, fontWeight: 700, flexShrink: 0 } }, "Open to Work"),
            cp.cvData && React.createElement("a", { href: cp.cvData, download: cp.cvName||"cv.pdf", style: { fontSize: 12, color: GOLD_TEXT, fontWeight: 600, flexShrink: 0, textDecoration: "none" } }, "📄 CV")
          );
        })
      ),
      viewJob && React.createElement(JobDetailModal, { job: viewJob, currentMember: members.find((m) => m.userRole==="admin"||m.userRole==="super_admin")||members[0], allMembers: members, onClose: () => setViewJob(null), onEdit: (updated) => { setJobs((prev) => prev.map((j) => j.id===updated.id ? {...j,...updated} : j)); setViewJob({...viewJob,...updated}); }, onStatusChange: (ns) => { setJobs((prev) => prev.map((j) => j.id===viewJob.id ? {...j,status:ns} : j)); setViewJob((v) => v ? {...v,status:ns} : v); } })
    );
  };

  // ── AdminDashboard ─────────────────────────────────────────────────────────────
  var AdminDashboard = ({ members, applications }) => {
    const [dashFeedItems, setDashFeedItems] = useState([]);
    const [dashMessages, setDashMessages] = useState([]);
    const [loadingDash, setLoadingDash] = useState(true);
    const [activityRange, setActivityRange] = useState("30");

    React.useEffect(() => {
      Promise.all([
        db.select("feed_items", "?order=created_at.desc&limit=1000").catch(() => []),
        db.select("messages", "?order=created_at.desc&limit=1000").catch(() => [])
      ]).then(([fi, msgs]) => {
        setDashFeedItems(fi || []);
        setDashMessages(msgs || []);
        setLoadingDash(false);
      }).catch(() => setLoadingDash(false));
    }, []);

    // ── Funnel ────────────────────────────────────────────────────────────────
    const membersReady = members.length > 0;
    const totalApplicants = applications.length;
    const totalAccepted = applications.filter((a) => a.status === "approved").length;
    const passwordCreated = membersReady ? members.filter((m) => m.userId).length : "—";
    const signedInOnce = membersReady ? members.filter((m) => m.lastLoginAt).length : "—";
    const now30 = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
    const activeLast30 = membersReady ? members.filter((m) => m.lastLoginAt && m.lastLoginAt > now30).length : "—";

    const funnelSteps = [
      { label: "Total Applications", value: totalApplicants, color: "#3b82f6" },
      { label: "Accepted", value: totalAccepted, color: GOLD },
      { label: "Password Created", value: passwordCreated, color: "#8b5cf6" },
      { label: "Signed In (ever)", value: signedInOnce, color: "#22c55e" },
      { label: "Active Last 30d", value: activeLast30, color: "#ef4444" }
    ];
    const funnelMax = totalApplicants || 1;

    // ── Top Posters ───────────────────────────────────────────────────────────
    const posterMap = {};
    dashFeedItems.forEach((fi) => { if (fi.author_member_id) posterMap[fi.author_member_id] = (posterMap[fi.author_member_id] || 0) + 1; });
    const topPosters = Object.entries(posterMap).sort((a, b) => b[1] - a[1]).slice(0, 10)
      .map(([id, count]) => ({ member: members.find((m) => m.id === id), count })).filter((x) => x.member);

    // ── Top Message Senders ───────────────────────────────────────────────────
    const senderMap = {};
    dashMessages.forEach((msg) => { if (msg.sender_id) senderMap[msg.sender_id] = (senderMap[msg.sender_id] || 0) + 1; });
    const topSenders = Object.entries(senderMap).sort((a, b) => b[1] - a[1]).slice(0, 10)
      .map(([id, count]) => ({ member: members.find((m) => m.id === id), count })).filter((x) => x.member);

    // ── Activity Sparkline ────────────────────────────────────────────────────
    const days = parseInt(activityRange) || 30;
    const activityDates = {};
    for (let i = days - 1; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      activityDates[d.toISOString().slice(0, 10)] = { posts: 0, messages: 0 };
    }
    dashFeedItems.forEach((fi) => { const day = (fi.created_at || "").slice(0, 10); if (activityDates[day]) activityDates[day].posts++; });
    dashMessages.forEach((msg) => { const day = (msg.created_at || "").slice(0, 10); if (activityDates[day]) activityDates[day].messages++; });
    const activityRows = Object.entries(activityDates);
    const maxActivity = Math.max(1, ...activityRows.map(([, v]) => v.posts + v.messages));

    // ── Demographics ──────────────────────────────────────────────────────────
    const byCountry = {};
    members.forEach((m) => { if (m.country) byCountry[m.country] = (byCountry[m.country] || 0) + 1; });

    const byCompany = {};
    members.forEach((m) => { (m.companies || []).forEach((c) => { byCompany[c] = (byCompany[c] || 0) + 1; }); });

    const byRole = {};
    members.forEach((m) => { const r = m.primaryRole || m.role; if (r) byRole[r] = (byRole[r] || 0) + 1; });

    const byGradYear = {};
    members.forEach((m) => { if (m.graduationYear) byGradYear[m.graduationYear] = (byGradYear[m.graduationYear] || 0) + 1; });

    const byStudyCountry = {};
    members.forEach((m) => { (m.educationEntries || []).forEach((e) => { if (e.country) byStudyCountry[e.country] = (byStudyCountry[e.country] || 0) + 1; }); });

    const byIndustry = {};
    members.forEach((m) => { (m.industries || []).forEach((ind) => { if (ind) byIndustry[ind] = (byIndustry[ind] || 0) + 1; }); });

    const activeTotal = members.filter((m) => !m.deactivated).length || 1;

    const EDU_LABELS = { bachelor: "Bachelor", master: "Master's", phd: "PhD", other: "Other", na: "N/A" };
    const byEduLevel = {};
    members.forEach((m) => { const lv = m.highestEducationLevel || "na"; byEduLevel[lv] = (byEduLevel[lv] || 0) + 1; });

    // ── CSV Export ────────────────────────────────────────────────────────────
    const exportCSV = () => {
      const headers = ["First Name", "Last Name", "Email", "Country", "Company", "Role", "Graduation Year", "Education Level", "Join Date", "Status", "Last Login At"];
      const rows = members.map((m) => [
        m.firstName, m.lastName, m.email,
        m.country || "",
        (m.companies || [])[0] || "",
        m.primaryRole || m.role || "",
        m.graduationYear || "",
        EDU_LABELS[m.highestEducationLevel] || m.highestEducationLevel || "",
        m.joinDate || "",
        m.status || "",
        m.lastLoginAt ? m.lastLoginAt.slice(0, 10) : "Never"
      ]);
      const csv = [headers, ...rows].map((r) => r.map((v) => `"${String(v || "").replace(/"/g, '""')}"`).join(",")).join("\n");
      const blob = new Blob([csv], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = "deo_members_export.csv"; a.click();
      URL.revokeObjectURL(url);
    };

    // ── Helpers ───────────────────────────────────────────────────────────────
    const SectionHeader = ({ title, sub }) => React.createElement("div", { style: { marginBottom: 16 } },
      React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, title),
      sub && React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 2 } }, sub)
    );
    const Panel = ({ children, style = {} }) => React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "22px 24px", ...style } }, children);
    const BarRow = ({ label, value, total, color = GOLD }) => {
      const pct = total ? Math.round((value / total) * 100) : 0;
      return React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, padding: "5px 0" } },
        React.createElement("div", { style: { flex: "0 0 140px", fontSize: 12, color: "#374151", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, label),
        React.createElement("div", { style: { flex: 1, height: 6, background: "#fdf0e1", borderRadius: 3 } },
          React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: color, borderRadius: 3, transition: "width 0.3s" } })
        ),
        React.createElement("div", { style: { flex: "0 0 36px", fontSize: 11, color: "#9ca3af", textAlign: "right" } }, value)
      );
    };

    if (loadingDash) return React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: 300 } },
      React.createElement("div", { style: { width: 32, height: 32, border: `3px solid ${GOLD}`, borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" } })
    );

    return React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 24 } },

      // ── Header row ────────────────────────────────────────────────────────
      React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px" } }, "Operations Overview"),
          React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginTop: 2 } }, "Admin Dashboard")
        ),
        React.createElement("button", { onClick: exportCSV, style: { display: "flex", alignItems: "center", gap: 7, background: GOLD, color: "#fff", border: "none", borderRadius: 9, padding: "9px 18px", fontSize: 13, fontWeight: 600, cursor: "pointer" } },
          React.createElement("span", null, "⬇"), "Export Members CSV"
        )
      ),

      // ── Funnel ───────────────────────────────────────────────────────────
      React.createElement(Panel, null,
        React.createElement(SectionHeader, { title: "Member Funnel", sub: "Applied → Accepted → Account created → Signed in → Active" }),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 12 } },
          funnelSteps.map((step, i) => React.createElement("div", { key: step.label, style: { position: "relative" } },
            React.createElement("div", { style: { background: step.color + "0f", border: `1px solid ${step.color}33`, borderRadius: 10, padding: "16px 14px", textAlign: "center" } },
              React.createElement("div", { style: { fontSize: 28, fontWeight: 700, color: step.color, fontFamily: "var(--font-sans)" } }, step.value),
              React.createElement("div", { style: { fontSize: 11, color: "#6b7280", fontWeight: 600, marginTop: 4, lineHeight: 1.3 } }, step.label),
              i > 0 && typeof step.value === "number" && typeof funnelSteps[i - 1].value === "number" && funnelSteps[i - 1].value > 0 && React.createElement("div", { style: { fontSize: 10, color: step.color, fontWeight: 700, marginTop: 6 } },
                Math.round((step.value / funnelSteps[i - 1].value) * 100) + "% of prev"
              )
            ),
            i < funnelSteps.length - 1 && React.createElement("div", { style: { position: "absolute", right: -8, top: "50%", transform: "translateY(-50%)", zIndex: 1, color: "#d1d5db", fontSize: 16, fontWeight: 700 } }, "›")
          ))
        ),
        React.createElement("div", { style: { marginTop: 16, display: "flex", alignItems: "center", gap: 8 } },
          funnelSteps.map((step, i) => React.createElement(React.Fragment, { key: step.label },
            i > 0 && React.createElement("div", { style: { color: "#d1d5db" } }, "›"),
            React.createElement("div", { style: { height: 4, borderRadius: 2, background: step.color, flex: (typeof step.value === "number" ? step.value : 0) / funnelMax || 0.01, minWidth: 4, transition: "flex 0.4s" } })
          ))
        ),
        React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", marginTop: 10 } }, "* Sign-in tracking active from April 2025. Members added before then show 0 until next login.")
      ),

      // ── Summary stats row ────────────────────────────────────────────────
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 } },
        React.createElement(StatCard, { label: "Total Members", value: membersReady ? members.filter((m) => !m.deactivated).length : "—" }),
        React.createElement(StatCard, { label: "Active Members", value: membersReady ? members.filter((m) => m.status === "active" && !m.deactivated).length : "—", accent: "#22c55e" }),
        React.createElement(StatCard, { label: "Pending Applications", value: applications.filter((a) => a.status === "pending").length, accent: "#f59e0b" }),
        React.createElement(StatCard, { label: "Deactivated", value: membersReady ? members.filter((m) => m.deactivated).length : "—", accent: "#ef4444" })
      ),

      // ── Activity Trend + Top Posters ─────────────────────────────────────
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } },

        React.createElement(Panel, null,
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },
            React.createElement(SectionHeader, { title: "Platform Activity" }),
            React.createElement("select", {
              value: activityRange, onChange: (e) => setActivityRange(e.target.value),
              style: { fontSize: 12, border: `1px solid ${BORDER}`, borderRadius: 7, padding: "4px 8px", color: "#374151", background: "#fff" }
            },
              React.createElement("option", { value: "7" }, "Last 7 days"),
              React.createElement("option", { value: "30" }, "Last 30 days"),
              React.createElement("option", { value: "90" }, "Last 90 days")
            )
          ),
          React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 3, height: 80, overflow: "hidden" } },
            activityRows.map(([date, v]) => {
              const total = v.posts + v.messages;
              const pct = maxActivity ? (total / maxActivity) * 100 : 0;
              return React.createElement("div", { key: date, title: `${date}: ${v.posts} posts, ${v.messages} msgs`, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" } },
                React.createElement("div", { style: { width: "100%", background: GOLD, borderRadius: "2px 2px 0 0", height: `${Math.max(2, pct)}%`, opacity: total > 0 ? 1 : 0.25 } })
              );
            })
          ),
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginTop: 4 } },
            React.createElement("div", { style: { fontSize: 10, color: "#9ca3af" } }, activityRows[0] ? activityRows[0][0].slice(5) : ""),
            React.createElement("div", { style: { fontSize: 10, color: "#9ca3af" } }, activityRows[activityRows.length - 1] ? activityRows[activityRows.length - 1][0].slice(5) : "")
          ),
          React.createElement("div", { style: { display: "flex", gap: 16, marginTop: 10, borderTop: `1px solid ${BORDER}`, paddingTop: 10 } },
            React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, React.createElement("span", { style: { color: DARK, fontWeight: 700 } }, dashFeedItems.length), " total posts"),
            React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, React.createElement("span", { style: { color: DARK, fontWeight: 700 } }, dashMessages.length), " total messages")
          )
        ),

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Top Contributors", sub: "Most active post authors" }),
          topPosters.length === 0
            ? React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", paddingTop: 8 } }, "No post data yet.")
            : React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
              topPosters.slice(0, 8).map((row, i) => React.createElement("div", { key: row.member.id, style: { display: "flex", alignItems: "center", gap: 10, padding: "6px 0", borderBottom: i < 7 ? `1px solid #faf9f7` : "none" } },
                React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", width: 18, flexShrink: 0 } }, "#", i + 1),
                React.createElement(Avatar, { member: row.member, size: 26 }),
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                  React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: DARK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, row.member.firstName, " ", row.member.lastName),
                  React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, row.member.primaryRole || row.member.role || "")
                ),
                React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: GOLD_TEXT, flexShrink: 0 } }, row.count, " posts")
              ))
            )
        )
      ),

      // ── Top message senders + Members by country ─────────────────────────
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } },

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Top Message Senders" }),
          topSenders.length === 0
            ? React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", paddingTop: 8 } }, "No message data yet.")
            : React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 2 } },
              topSenders.slice(0, 8).map((row, i) => React.createElement("div", { key: row.member.id, style: { display: "flex", alignItems: "center", gap: 10, padding: "6px 0", borderBottom: i < 7 ? `1px solid #faf9f7` : "none" } },
                React.createElement("span", { style: { fontSize: 11, color: "#9ca3af", width: 18, flexShrink: 0 } }, "#", i + 1),
                React.createElement(Avatar, { member: row.member, size: 26 }),
                React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                  React.createElement("div", { style: { fontSize: 13, fontWeight: 500, color: DARK, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } }, row.member.firstName, " ", row.member.lastName)
                ),
                React.createElement("span", { style: { fontSize: 13, fontWeight: 700, color: "#3b82f6", flexShrink: 0 } }, row.count, " msgs")
              ))
            )
        ),

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Members by Country" }),
          Object.entries(byCountry).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([country, count]) =>
            React.createElement(BarRow, { key: country, label: country, value: count, total: activeTotal, color: GOLD })
          )
        )
      ),

      // ── Demographics row ─────────────────────────────────────────────────
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 } },

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Top Industries" }),
          Object.keys(byIndustry).length === 0
            ? React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", paddingTop: 8 } }, "No industry data yet.")
            : Object.entries(byIndustry).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([ind, count]) =>
                React.createElement(BarRow, { key: ind, label: ind, value: count, total: activeTotal, color: "#ef4444" })
              )
        ),

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Members by Role" }),
          Object.entries(byRole).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([role, count]) =>
            React.createElement(BarRow, { key: role, label: role, value: count, total: activeTotal, color: "#8b5cf6" })
          )
        ),

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Education Level" }),
          Object.entries(byEduLevel).sort((a, b) => b[1] - a[1]).map(([level, count]) =>
            React.createElement(BarRow, { key: level, label: EDU_LABELS[level] || level, value: count, total: activeTotal, color: "#f59e0b" })
          )
        )
      ),

      // ── Graduation year + Study country ─────────────────────────────────
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 } },

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Graduation Year" }),
          React.createElement("div", { style: { display: "flex", alignItems: "flex-end", gap: 4, height: 100, overflow: "hidden" } },
            (() => {
              const entries = Object.entries(byGradYear).sort((a, b) => a[0] - b[0]);
              const maxVal = Math.max(1, ...entries.map(([, v]) => v));
              return entries.map(([year, count]) => React.createElement("div", { key: year, title: `${year}: ${count} members`, style: { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 3 } },
                React.createElement("div", { style: { fontSize: 9, color: "#9ca3af" } }, count),
                React.createElement("div", { style: { width: "100%", background: GOLD, borderRadius: "2px 2px 0 0", height: `${(count / maxVal) * 100}%`, minHeight: 4 } }),
                React.createElement("div", { style: { fontSize: 9, color: "#9ca3af", transform: "rotate(-45deg)", whiteSpace: "nowrap", marginBottom: 2 } }, String(year).slice(2))
              ));
            })()
          )
        ),

        React.createElement(Panel, null,
          React.createElement(SectionHeader, { title: "Study Countries", sub: "From education entries" }),
          Object.entries(byStudyCountry).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([country, count]) =>
            React.createElement(BarRow, { key: country, label: country, value: count, total: activeTotal, color: "#22c55e" })
          )
        )
      )
    );
  };

  var DonationProjectModal = ({ project, onClose, onSave }) => {
    const [form, setForm] = useState(project || { name: "", description: "", goal_amount: "", currency: "EGP", status: "active" });
    const set = (k) => (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const handle = () => {
      if (!form.name.trim()) { alert("Project name is required."); return; }
      onSave(form);
      onClose();
    };
    return /* @__PURE__ */ React.createElement(Modal, { onClose, title: project ? "Edit Donation Project" : "New Donation Project", maxWidth: 480 },
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } },
        /* @__PURE__ */ React.createElement(Input, { label: "Project Name *", value: form.name, onChange: set("name"), placeholder: "e.g. Scholarship Fund 2026" }),
        /* @__PURE__ */ React.createElement(Textarea, { label: "Description", value: form.description, onChange: set("description"), rows: 3, placeholder: "What does this project fund?" }),
        /* @__PURE__ */ React.createElement(Input, { label: "Fundraising Goal (EGP)", type: "number", value: form.goal_amount, onChange: set("goal_amount"), placeholder: "e.g. 50000" }),
        /* @__PURE__ */ React.createElement(Select, { label: "Status", value: form.status, onChange: set("status"), options: ["active", "completed", "archived"] }),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } },
          /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: onClose }, "Cancel"),
          /* @__PURE__ */ React.createElement(Btn, { onClick: handle }, project ? "Save Changes" : "Create Project"))));
  };
  var AdminDonations = ({ members, setMembers, donationProjects, setDonationProjects, setFeedItems }) => {
    const [subTab, setSubTab] = useState("record");
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState("");
    const [showNewProject, setShowNewProject] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [confirmArchive, setConfirmArchive] = useState(null); const [viewMember, setViewMember] = useState(null); const updateMemberLocal = async (updated) => { try { await db.update("members", updated.id, memberToRow(updated)); setMembers((prev) => prev.map((m) => m.id === updated.id ? updated : m)); } catch(e) { alert("Error saving: " + e.message); } };
    const sorted = [...members].sort((a, b) => (b.donationTotal || 0) - (a.donationTotal || 0));
    const filtered = sorted.filter((m) => `${m.firstName} ${m.lastName} ${m.email}`.toLowerCase().includes(search.toLowerCase()));
    const recordDonation = async (memberId, donation) => {
      try {
        await db.insert("donations", {
          member_id: memberId,
          amount: donation.amount,
          project: donation.project,
          year: donation.year,
          date: donation.date || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          note: donation.note || null
        });
        const member = members.find((m) => m.id === memberId);
        const newTotal = ((member == null ? void 0 : member.donationTotal) || 0) + donation.amount;
        await db.update("members", memberId, { donation_total: newTotal });
        setMembers((prev) => prev.map((m) => m.id === memberId ? __spreadProps(__spreadValues({}, m), {
          donationTotal: newTotal,
          donationHistory: [...m.donationHistory || [], donation]
        }) : m));
      } catch (e) {
        alert("Error recording donation: " + e.message);
      }
    };
    const saveProject = async (form) => {
      try {
        if (form.id) {
          await db.update("donation_projects", form.id, {
            name: form.name, description: form.description || null,
            goal_amount: form.goal_amount ? parseFloat(form.goal_amount) : null,
            currency: form.currency || "EGP", status: form.status
          });
          setDonationProjects((prev) => prev.map((p) => p.id === form.id ? __spreadValues(__spreadValues({}, p), form) : p));
        } else {
          const rows = await db.insert("donation_projects", {
            name: form.name, description: form.description || null,
            goal_amount: form.goal_amount ? parseFloat(form.goal_amount) : null,
            currency: form.currency || "EGP", status: form.status || "active"
          });
          if (rows && rows[0]) setDonationProjects((prev) => [...prev, rows[0]]);
          // system feed item: donation_project_created
          if (rows && rows[0]) {
            db.insert("feed_items", { feed_type: "donation_project_created", source_type: "donation_projects", source_id: rows[0].id, author_member_id: null, system_label: "New donation project: " + rows[0].name })
              .then((fiRows) => { if (fiRows && fiRows[0] && setFeedItems) setFeedItems((prev) => [fiRows[0], ...prev]); })
              .catch(() => {});
          }
        }
      } catch (e) { alert("Error saving project: " + e.message); }
    };
    const archiveProject = async (proj) => {
      try {
        await db.update("donation_projects", proj.id, { status: "archived" });
        setDonationProjects((prev) => prev.map((p) => p.id === proj.id ? __spreadProps(__spreadValues({}, p), { status: "archived" }) : p));
        setConfirmArchive(null);
      } catch (e) { alert("Error: " + e.message); }
    };
    const restoreProject = async (proj) => {
      try {
        await db.update("donation_projects", proj.id, { status: "active" });
        setDonationProjects((prev) => prev.map((p) => p.id === proj.id ? __spreadProps(__spreadValues({}, p), { status: "active" }) : p));
      } catch (e) { alert("Error: " + e.message); }
    };
    const totalByProject = members.reduce((acc, m) => {
      (m.donationHistory || []).forEach((d) => { acc[d.project] = (acc[d.project] || 0) + d.amount; });
      return acc;
    }, {});
    return /* @__PURE__ */ React.createElement("div", null,
      /* Sub-tabs */
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 3, marginBottom: 24, background: "#fff", borderRadius: 12, padding: 5, border: `1px solid ${BORDER}`, width: "fit-content" } },
        [["record", "💰 Record Donations"], ["projects", "📂 Donation Projects"]].map(([k, label]) =>
          /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => setSubTab(k), style: { padding: "8px 20px", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: subTab === k ? 700 : 400, background: subTab === k ? DARK : "transparent", color: subTab === k ? GOLD : "#6b7280", fontSize: 13, transition: "all 0.2s" } }, label))),
      /* Record Donations sub-tab */
      subTab === "record" && /* @__PURE__ */ React.createElement("div", null,
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 20 } },
          /* @__PURE__ */ React.createElement("div", { style: { flex: 1, position: "relative" } },
            /* @__PURE__ */ React.createElement("span", { style: { position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "#9ca3af" } }, "🔍"),
            /* @__PURE__ */ React.createElement("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search member to record donation...", style: { width: "100%", padding: "10px 12px 10px 36px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" } }))),
        /* @__PURE__ */ React.createElement("div", { className: "admin-table", style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden" } },
          /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr 120px", padding: "11px 18px", background: "#fafaf8", borderBottom: `1px solid ${BORDER}`, fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px" } },
            ["Member", "Company", "Total Donated", "Last Donation", "Action"].map((h) => /* @__PURE__ */ React.createElement("div", { key: h }, h))),
          filtered.map((m, i) => {
            var _a2, _b2;
            return /* @__PURE__ */ React.createElement("div", { key: m.id, onClick: () => setViewMember(m), style: { display: "grid", gridTemplateColumns: "2fr 1.5fr 1fr 1fr 120px", padding: "13px 18px", borderBottom: i < filtered.length - 1 ? `1px solid #f6f5f3` : "none", alignItems: "center", cursor: "pointer" } },
              /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
                /* @__PURE__ */ React.createElement(Avatar, { member: m, size: 32 }),
                /* @__PURE__ */ React.createElement("div", null,
                  /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, fontSize: 13 } }, m.firstName, " ", m.lastName),
                  /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, m.email))),
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, (m.companies || []).join(", ") || "—"),
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: m.donationTotal > 0 ? GOLD_TEXT : "#d1d5db" } }, "EGP ", fmt(m.donationTotal)),
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af" } }, ((_b2 = (_a2 = m.donationHistory) == null ? void 0 : _a2.slice(-1)[0]) == null ? void 0 : _b2.year) || "—"),
              /* @__PURE__ */ React.createElement(Btn, { small: true, onClick: (e) => { e.stopPropagation(); setSelected(m); } }, "+ Record"));
          })),
        selected && /* @__PURE__ */ React.createElement(RecordDonationModal, { member: selected, onClose: () => setSelected(null), onRecord: (id, d) => { recordDonation(id, d); setSelected(null); }, donationProjects })),
      /* Donation Projects sub-tab */
      subTab === "projects" && /* @__PURE__ */ React.createElement("div", null,
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 } },
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#6b7280" } }, (donationProjects || []).filter((p) => p.status === "active").length, " active projects"),
          /* @__PURE__ */ React.createElement(Btn, { onClick: () => setShowNewProject(true) }, "+ New Project")),
        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
          (!donationProjects || donationProjects.length === 0) && /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "48px", textAlign: "center", color: "#9ca3af", fontSize: 14 } }, "No donation projects yet. Create your first one!"),
          (donationProjects || []).map((proj) => {
            const raised = totalByProject[proj.name] || 0;
            const goal = parseFloat(proj.goal_amount) || 0;
            const pct = goal > 0 ? Math.min(100, Math.round((raised / goal) * 100)) : null;
            const projStatusColor = ({ active: "#22c55e", completed: GOLD, archived: "#9ca3af" })[proj.status] || "#9ca3af";
            return /* @__PURE__ */ React.createElement("div", { key: proj.id, style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "22px 24px", opacity: proj.status === "archived" ? 0.6 : 1 } },
              /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" } },
                /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } },
                  /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10, marginBottom: 6 } },
                    /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, proj.name),
                    /* @__PURE__ */ React.createElement(Badge, { label: proj.status, color: projStatusColor }),
                    /* @__PURE__ */ React.createElement(Badge, { label: "EGP", color: "#6b7280" })),
                  proj.description && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 10 } }, proj.description),
                  goal > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 4 } },
                    /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9ca3af", marginBottom: 4 } },
                      /* @__PURE__ */ React.createElement("span", null, "Raised: ", /* @__PURE__ */ React.createElement("strong", { style: { color: GOLD_TEXT } }, "EGP ", fmt(raised))),
                      /* @__PURE__ */ React.createElement("span", null, "Goal: EGP ", fmt(goal), " · ", pct, "%")),
                    /* @__PURE__ */ React.createElement("div", { style: { height: 6, background: "#fdf0e1", borderRadius: 3, overflow: "hidden" } },
                      /* @__PURE__ */ React.createElement("div", { style: { width: `${pct}%`, height: "100%", background: pct >= 100 ? "#22c55e" : GOLD, borderRadius: 3 } }))),
                  goal === 0 && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af" } }, "Total raised: ", /* @__PURE__ */ React.createElement("strong", { style: { color: GOLD_TEXT } }, "EGP ", fmt(raised)))),
                /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 7, alignItems: "center", flexShrink: 0 } },
                  proj.status !== "archived" && /* @__PURE__ */ React.createElement(React.Fragment, null,
                    /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary", onClick: () => setEditingProject(proj) }, "Edit"),
                    /* @__PURE__ */ React.createElement("div", { style: { position: "relative" } },
                      /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost", onClick: () => setConfirmArchive(confirmArchive === proj.id ? null : proj.id) }, "Archive"),
                      confirmArchive === proj.id && /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", right: 0, top: 34, background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 14px", zIndex: 50, width: 210, boxShadow: "0 4px 20px rgba(0,0,0,0.1)" } },
                        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: DARK, fontWeight: 600, marginBottom: 6 } }, "Archive this project?"),
                        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginBottom: 10 } }, "It won't appear in the donation dropdown anymore."),
                        /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6 } },
                          /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "danger", onClick: () => archiveProject(proj) }, "Archive"),
                          /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "ghost", onClick: () => setConfirmArchive(null) }, "Cancel"))))),
                  proj.status === "archived" && /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "success", onClick: () => restoreProject(proj) }, "Restore"))));
          })),
        showNewProject && /* @__PURE__ */ React.createElement(DonationProjectModal, { onClose: () => setShowNewProject(false), onSave: saveProject }),
        editingProject && /* @__PURE__ */ React.createElement(DonationProjectModal, { project: editingProject, onClose: () => setEditingProject(null), onSave: saveProject }), viewMember && /* @__PURE__ */ React.createElement(MemberDetailModal, { member: members.find((m) => m.id === viewMember.id) || viewMember, onClose: () => setViewMember(null), onUpdate: (u) => { updateMemberLocal(u); setViewMember(u); }, isAdmin: true })));
  };
  var MemberEvents = ({ events, currentMember, onRegister, myRegistrations }) => {
    const [detailEvent, setDetailEvent] = React.useState(null);
    const now = /* @__PURE__ */ new Date();
    const upcoming = events.filter((e) => e.status === "published" && (!e.startDatetime || new Date(e.startDatetime) >= now));
    const past = events.filter((e) => e.status === "published" && e.startDatetime && new Date(e.startDatetime) < now);
    const myReg = (eventId) => (myRegistrations || []).find((r) => r.eventId === eventId);
    const regBadge = (reg) => {
      if (!reg) return null;
      const colors = { approved: "#22c55e", pending: "#f59e0b", rejected: "#ef4444" };
      const labels = { approved: "✅ Registered", pending: "⏳ Pending", rejected: "❌ Not Approved" };
      return /* @__PURE__ */ React.createElement(Badge, { label: labels[reg.status], color: colors[reg.status] });
    };
    const EventCard = ({ ev }) => {
      var _a, _b, _c;
      const reg = myReg(ev.id);
      const regCount = (ev.registrations || []).filter((r) => r.status !== "rejected").length;
      const atCapacity = ev.maxAttendees && regCount >= ev.maxAttendees;
      const coverImg = (_b = (_a = ev.images) == null ? void 0 : _a[0]) == null ? void 0 : _b.image_data;
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          onClick: () => setDetailEvent(ev),
          style: { background: "#fff", borderRadius: 14, border: `1px solid ${BORDER}`, overflow: "hidden", cursor: "pointer", transition: "box-shadow 0.2s", marginBottom: 14 },
          onMouseEnter: (e) => e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)",
          onMouseLeave: (e) => e.currentTarget.style.boxShadow = "none"
        },
        coverImg && /* @__PURE__ */ React.createElement("img", { src: coverImg, alt: "", style: { width: "100%", height: 160, objectFit: "cover", display: "block" } }),
        /* @__PURE__ */ React.createElement("div", { style: { padding: "14px 18px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Badge, { label: ev.isOnline ? "💻 Online" : "📍 In-Person", color: ev.isOnline ? "#3b82f6" : "#8b5cf6" }), /* @__PURE__ */ React.createElement(Badge, { label: ev.isFree ? "Free" : `€${ev.ticketPrice}`, color: ev.isFree ? "#22c55e" : GOLD }), atCapacity && !reg && /* @__PURE__ */ React.createElement(Badge, { label: "Full", color: "#ef4444" }), regBadge(reg)), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, fontSize: 15, color: DARK, marginBottom: 4 } }, ev.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af" } }, fmtEventDate(ev.startDatetime), ev.startDatetime ? ` · ${fmtEventTime(ev.startDatetime)}` : "", !ev.isOnline && ev.location ? ` · ${ev.location}` : ""), ((_c = ev.links) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 8, fontSize: 12, color: GOLD_TEXT, fontWeight: 600 } }, "🔗 ", ev.links.length, " quick link", ev.links.length > 1 ? "s" : ""))
      );
    };
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 14 } }, "Upcoming Events (", upcoming.length, ")"), upcoming.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center", padding: "40px 0", color: "#9ca3af" } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36, marginBottom: 8 } }, "📅"), /* @__PURE__ */ React.createElement("div", null, "No upcoming events yet. Check back soon!")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 } }, upcoming.map((ev) => /* @__PURE__ */ React.createElement(EventCard, { key: ev.id, ev }))), past.length > 0 && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK, marginTop: 28, marginBottom: 14 } }, "Past Events"), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 } }, past.map((ev) => /* @__PURE__ */ React.createElement(EventCard, { key: ev.id, ev })))), detailEvent && /* @__PURE__ */ React.createElement(
      EventDetailModal,
      {
        event: detailEvent,
        onClose: () => setDetailEvent(null),
        isAdmin: false,
        currentMember,
        myRegistration: myReg(detailEvent.id),
        onRegister: async (ev) => {
          await onRegister(ev, currentMember);
          setDetailEvent((prev) => __spreadValues({}, prev));
        }
      }
    ));
  };
  var LinkedInIcon = function(props) { var url = props.url; var size = props.size || 28; var has = !!(url && url.trim().length > 0); var href = has ? (url.startsWith("http") ? url : "https://" + url) : null; var svgPath = "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"; var iconEl = /* @__PURE__ */ React.createElement("div", { title: has ? "View LinkedIn Profile" : "No LinkedIn profile", style: { width: size, height: size, borderRadius: 6, background: has ? "#0a66c2" : "#e5e7eb", display: "flex", alignItems: "center", justifyContent: "center", cursor: has ? "pointer" : "not-allowed", flexShrink: 0, opacity: has ? 1 : 0.45 } }, /* @__PURE__ */ React.createElement("svg", { width: Math.round(size * 0.55), height: Math.round(size * 0.55), viewBox: "0 0 24 24", fill: has ? "#fff" : "#9ca3af" }, /* @__PURE__ */ React.createElement("path", { d: svgPath }))); return has ? /* @__PURE__ */ React.createElement("a", { href: href, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } }, iconEl) : iconEl; };
  var MemberProfileModal = function(props) { var member = props.member; var onClose = props.onClose; var _pa = member.companies; var _pb = member.industries; var _pc = member.regions; var _pd = member.expertise; var _sl = useState(false); var lightboxOpen = _sl[0]; var setLightboxOpen = _sl[1]; return /* @__PURE__ */ React.createElement(Modal, { onClose: onClose, title: member.firstName + " " + member.lastName, maxWidth: 620 }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, /* @__PURE__ */ React.createElement("div", { style: { background: "linear-gradient(135deg, " + DARK + " 0%, #2a2725 100%)", borderRadius: 12, padding: "22px 24px", color: "#fff", display: "flex", gap: 18, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { onClick: function() { if (member.photo) setLightboxOpen(true); }, style: { cursor: member.photo ? "pointer" : "default", borderRadius: "50%", transition: "opacity 0.2s" }, title: member.photo ? "Click to enlarge" : "" }, /* @__PURE__ */ React.createElement(Avatar, { member: member, size: 64 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 20, fontWeight: 700, fontFamily: "var(--font-sans)" } }, member.firstName, " ", member.lastName), /* @__PURE__ */ React.createElement("div", { style: { color: GOLD, fontSize: 13, marginTop: 3 } }, member.role), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 12, marginTop: 2 } }, (member.companies || []).join(", "), (member.companies || []).length > 0 ? " - " : "", "Class of ", member.graduationYear)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" } }, /* @__PURE__ */ React.createElement(LinkedInIcon, { url: member.linkedin, size: 32 }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end", marginTop: 4 } }, member.willingToMentor && /* @__PURE__ */ React.createElement(Badge, { label: "Mentor", color: "#8b5cf6" }), member.openToHiring && /* @__PURE__ */ React.createElement(Badge, { label: "Hiring", color: "#22c55e" }), member.openToFundraising && /* @__PURE__ */ React.createElement(Badge, { label: "Fundraising", color: GOLD })))), member.bio && /* @__PURE__ */ React.createElement("div", { style: { background: "#fafaf8", borderRadius: 10, padding: "14px 16px", fontSize: 14, color: "#374151", lineHeight: 1.7 } }, member.bio), /* @__PURE__ */ React.createElement("div", { className: "form-grid-2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } }, [["Country", member.country], ["Graduation Year", member.graduationYear ? "Class of " + member.graduationYear : null], ["Email", member.emailVisible !== false ? member.email : null], ["Phone", member.phoneVisible !== false ? member.phone : null], ["Website", member.website]].map(function(pair) { var l = pair[0]; var v = pair[1]; return v ? /* @__PURE__ */ React.createElement("div", { key: l }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 3 } }, l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: DARK } }, v)) : null; })), (_pa == null ? void 0 : _pa.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Companies"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, _pa.map(function(c) { return /* @__PURE__ */ React.createElement(Tag, { key: c, label: c }); }))), (_pb == null ? void 0 : _pb.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Industries"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, _pb.map(function(i) { return /* @__PURE__ */ React.createElement(Tag, { key: i, label: i }); }))), (_pc == null ? void 0 : _pc.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Active Regions"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, _pc.map(function(r) { return /* @__PURE__ */ React.createElement(Tag, { key: r, label: r }); }))), (_pd == null ? void 0 : _pd.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Expertise"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, _pd.map(function(e) { return /* @__PURE__ */ React.createElement(Tag, { key: e, label: e }); }))) , /* @__PURE__ */ React.createElement("div", null, lightboxOpen && member.photo && /* @__PURE__ */ React.createElement("div", { onClick: function() { setLightboxOpen(false); }, style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, cursor: "pointer" } }, /* @__PURE__ */ React.createElement("img", { src: member.photo, alt: member.firstName + " " + member.lastName, style: { maxWidth: "90vw", maxHeight: "90vh", borderRadius: 16, boxShadow: "0 25px 60px rgba(0,0,0,0.7)", objectFit: "contain" }, onClick: function(e) { e.stopPropagation(); } }), /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: 24, right: 24, background: "rgba(255,255,255,0.15)", width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)", fontSize: 22, color: "#fff" }, onClick: function() { setLightboxOpen(false); } }, "×"))))); };

  var PERK_TYPE_COLORS = { discount: "#3b82f6", exclusive_access: "#8b5cf6", event: "#f59e0b", service: "#22c55e" };

  var PerkCard = ({ perk, onView }) => {
    var daysLeft = perk.expirationDate ? Math.ceil((new Date(perk.expirationDate) - new Date()) / 86400000) : null;
    var tColor = PERK_TYPE_COLORS[perk.perkType] || GOLD;
    return React.createElement("div", {
      onClick: onView,
      style: { background: "#fff", borderRadius: 14, border: "1px solid " + BORDER, overflow: "hidden", display: "flex", flexDirection: "column", cursor: "pointer", transition: "box-shadow 0.2s" }
    },
      React.createElement("div", { style: { height: 90, background: "linear-gradient(135deg, " + DARK + " 0%, #2a2725 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", flexShrink: 0 } },
        perk.partnerLogo
          ? React.createElement("img", { src: perk.partnerLogo, alt: perk.partnerName, style: { maxHeight: 56, maxWidth: "80%", objectFit: "contain" } })
          : React.createElement("div", { style: { color: GOLD, fontSize: 26, fontWeight: 700, fontFamily: "var(--font-sans)" } }, perk.partnerName ? perk.partnerName.slice(0, 2).toUpperCase() : "🎁"),
        perk.category && React.createElement("div", { style: { position: "absolute", top: 8, right: 8, background: "rgba(255,255,255,0.15)", color: "#fff", fontSize: 10, padding: "2px 7px", borderRadius: 20, fontWeight: 600 } }, perk.category)
      ),
      React.createElement("div", { style: { padding: "14px", flex: 1, display: "flex", flexDirection: "column" } },
        perk.perkType && React.createElement("div", { style: { display: "inline-block", fontSize: 10, fontWeight: 700, color: tColor, background: tColor + "18", padding: "2px 7px", borderRadius: 20, marginBottom: 7, textTransform: "uppercase", letterSpacing: "0.6px" } }, perk.perkType.replace("_", " ")),
        React.createElement("div", { style: { fontWeight: 700, fontSize: 14, color: DARK, marginBottom: 5, lineHeight: 1.3 } }, perk.title),
        React.createElement("div", { style: { fontSize: 12, color: "#6b7280", flex: 1, lineHeight: 1.5 } }, perk.shortDescription),
        React.createElement("div", { style: { marginTop: 10, display: "flex", justifyContent: "space-between", alignItems: "center" } },
          React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, perk.location || "Global"),
          daysLeft !== null && React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: daysLeft <= 0 ? "#ef4444" : daysLeft <= 7 ? "#ef4444" : daysLeft <= 30 ? "#f59e0b" : "#6b7280" } }, daysLeft <= 0 ? "Expired" : daysLeft + "d left")
        ),
        React.createElement("div", { style: { marginTop: 10 } },
          React.createElement(Btn, { small: true, style: { width: "100%" } }, "View Perk")
        )
      )
    );
  };

  var PerkDetailModal = ({ perk, onClose, currentMember, memberPerks, setMemberPerks, setPerks }) => {
    var _sl = useState(false); var codeRevealed = _sl[0]; var setCodeRevealed = _sl[1];
    var _sa = useState(false); var applying = _sa[0]; var setApplying = _sa[1];
    var _ss = useState(false); var saving = _ss[0]; var setSaving = _ss[1];
    var _sc = useState(false); var claimed = _sc[0]; var setClaimed = _sc[1];
    var _sf = useState({ name: currentMember ? currentMember.firstName + " " + currentMember.lastName : "", email: currentMember ? currentMember.email : "", message: "" });
    var applyForm = _sf[0]; var setApplyForm = _sf[1];
    var myPerk = memberPerks ? memberPerks.find(function(mp) { return mp.perkId === perk.id; }) : null;
    var isSaved = myPerk && myPerk.status === "saved";
    var isClaimed = claimed || (myPerk && (myPerk.status === "claimed" || myPerk.status === "used"));
    var daysLeft = perk.expirationDate ? Math.ceil((new Date(perk.expirationDate) - new Date()) / 86400000) : null;
    var tColor = PERK_TYPE_COLORS[perk.perkType] || GOLD;
    useEffect(function() {
      if (perk.id) {
        var newViews = (perk.views || 0) + 1;
        db.update("perks", perk.id, { views: newViews }).then(function() {
          if (setPerks) setPerks(function(prev) { return prev.map(function(p) { return p.id === perk.id ? Object.assign({}, p, { views: newViews }) : p; }); });
        }).catch(function() {});
      }
    }, []);
    var handleSave = function() {
      if (!currentMember || isSaved || isClaimed) return;
      setSaving(true);
      db.insert("member_perks", { member_id: currentMember.id, perk_id: perk.id, status: "saved", saved_at: new Date().toISOString() })
        .then(function(rows) { if (rows && rows[0] && setMemberPerks) setMemberPerks(function(prev) { return [...prev, rowToMemberPerk(rows[0])]; }); })
        .catch(function(e) { alert("Error saving perk: " + e.message); })
        .finally(function() { setSaving(false); });
    };
    var handleClaim = function() {
      if (!currentMember) return;
      var claimedAt = new Date().toISOString();
      var doUpdate = function() {
        if (myPerk) {
          db.update("member_perks", myPerk.id, { status: "claimed", claimed_at: claimedAt })
            .then(function() {
              if (setMemberPerks) setMemberPerks(function(prev) { return prev.map(function(mp) { return mp.id === myPerk.id ? Object.assign({}, mp, { status: "claimed", claimedAt: claimedAt }) : mp; }); });
              setClaimed(true);
            }).catch(function(e) { alert("Error: " + e.message); });
        } else {
          db.insert("member_perks", { member_id: currentMember.id, perk_id: perk.id, status: "claimed", saved_at: claimedAt, claimed_at: claimedAt })
            .then(function(rows) {
              if (rows && rows[0] && setMemberPerks) setMemberPerks(function(prev) { return [...prev, rowToMemberPerk(rows[0])]; });
              setClaimed(true);
            }).catch(function(e) { alert("Error: " + e.message); });
        }
      };
      doUpdate();
    };
    return React.createElement(Modal, { onClose: onClose, title: "", maxWidth: 680 },
      React.createElement("div", { style: { height: 110, background: "linear-gradient(135deg, " + DARK + " 0%, #2a2725 100%)", margin: "-24px -24px 20px", borderRadius: "12px 12px 0 0", display: "flex", alignItems: "center", justifyContent: "center" } },
        perk.partnerLogo
          ? React.createElement("img", { src: perk.partnerLogo, alt: perk.partnerName, style: { maxHeight: 65, maxWidth: "60%", objectFit: "contain" } })
          : React.createElement("div", { style: { color: GOLD, fontSize: 34, fontWeight: 700, fontFamily: "var(--font-sans)" } }, perk.partnerName ? perk.partnerName.slice(0, 2).toUpperCase() : "🎁")
      ),
      React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 } },
        React.createElement("div", { style: { fontSize: 13, color: GOLD_TEXT, fontWeight: 600 } }, perk.partnerName),
        perk.perkType && React.createElement("div", { style: { fontSize: 10, fontWeight: 700, color: tColor, background: tColor + "18", padding: "3px 10px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.6px" } }, perk.perkType.replace("_", " "))
      ),
      React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 12, lineHeight: 1.3 } }, perk.title),
      React.createElement("div", { style: { display: "flex", gap: 14, marginBottom: 16, flexWrap: "wrap" } },
        perk.category && React.createElement("span", { style: { fontSize: 12, color: "#6b7280" } }, "📂 " + perk.category),
        perk.location && React.createElement("span", { style: { fontSize: 12, color: "#6b7280" } }, "📍 " + perk.location),
        daysLeft !== null && React.createElement("span", { style: { fontSize: 12, fontWeight: 600, color: daysLeft <= 0 ? "#ef4444" : daysLeft <= 7 ? "#ef4444" : daysLeft <= 30 ? "#f59e0b" : "#6b7280" } }, "⏱ " + (daysLeft <= 0 ? "Expired" : daysLeft + " days left (" + perk.expirationDate + ")"))
      ),
      React.createElement("div", { style: { fontSize: 14, color: "#374151", lineHeight: 1.7, marginBottom: 18, background: "#fafaf8", borderRadius: 10, padding: "14px 16px" } }, perk.fullDescription || perk.shortDescription),
      React.createElement("div", { style: { background: "#f5f3ef", borderRadius: 12, padding: "16px", marginBottom: 18 } },
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 12 } }, "How to Redeem"),
        perk.redemptionType === "promo_code" && (
          !codeRevealed && !isClaimed
            ? React.createElement(Btn, { onClick: function() { setCodeRevealed(true); handleClaim(); } }, "🏷 Reveal Promo Code")
            : React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 12, color: "#6b7280", marginBottom: 8 } }, "Your promo code:"),
                React.createElement("div", { style: { background: DARK, color: GOLD, padding: "12px 20px", borderRadius: 10, fontSize: 20, fontWeight: 700, letterSpacing: "4px", textAlign: "center", fontFamily: "monospace" } }, perk.promoCode || "—"),
                React.createElement("button", { onClick: function() { navigator.clipboard && navigator.clipboard.writeText(perk.promoCode || ""); }, style: { marginTop: 10, padding: "6px 16px", background: "transparent", border: "1px solid " + BORDER, borderRadius: 8, fontSize: 12, cursor: "pointer", color: "#6b7280" } }, "Copy Code")
              )
        ),
        perk.redemptionType === "apply" && (
          isClaimed
            ? React.createElement("div", { style: { color: "#22c55e", fontWeight: 600, fontSize: 14 } }, "✓ Application submitted successfully")
            : !applying
            ? React.createElement(Btn, { onClick: function() { setApplying(true); } }, "📋 Apply for Access")
            : React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } },
                React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK } }, "Complete your application"),
                React.createElement(Input, { label: "Your Name", value: applyForm.name, onChange: function(v) { setApplyForm(function(f) { return Object.assign({}, f, { name: v }); }); } }),
                React.createElement(Input, { label: "Your Email", value: applyForm.email, onChange: function(v) { setApplyForm(function(f) { return Object.assign({}, f, { email: v }); }); } }),
                React.createElement(Textarea, { label: "Why are you interested in this benefit?", value: applyForm.message, onChange: function(v) { setApplyForm(function(f) { return Object.assign({}, f, { message: v }); }); }, rows: 3 }),
                React.createElement("div", { style: { display: "flex", gap: 10 } },
                  React.createElement(Btn, { variant: "ghost", onClick: function() { setApplying(false); } }, "Cancel"),
                  React.createElement(Btn, { onClick: handleClaim }, "Submit Application")
                )
              )
        ),
        perk.redemptionType === "external_link" && React.createElement("div", null,
          React.createElement("a", { href: perk.externalLink, target: "_blank", rel: "noopener noreferrer", style: { textDecoration: "none" } },
            React.createElement(Btn, { onClick: function() { if (!isClaimed) handleClaim(); } }, "🌐 Visit Partner Website")
          ),
          isClaimed && React.createElement("span", { style: { marginLeft: 12, fontSize: 13, color: GOLD_TEXT, fontWeight: 600 } }, "✓ Claimed")
        ),
        !perk.redemptionType && React.createElement("div", { style: { color: "#6b7280", fontSize: 13 } }, "Contact the partner directly to redeem this benefit.")
      ),
      currentMember && React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 } },
        !isSaved && !isClaimed && React.createElement(Btn, { variant: "secondary", onClick: handleSave, disabled: saving }, saving ? "Saving..." : "🔖 Save for Later"),
        isSaved && !isClaimed && React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#22c55e", fontWeight: 600 } }, "✓ Saved to My Perks"),
        isClaimed && React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: GOLD_TEXT, fontWeight: 600 } }, "✓ Claimed")
      ),
      perk.termsConditions && React.createElement("div", { style: { padding: "12px 14px", background: "#fafaf8", borderRadius: 10, border: "1px solid " + BORDER } },
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Terms & Conditions"),
        React.createElement("div", { style: { fontSize: 12, color: "#6b7280", lineHeight: 1.6 } }, perk.termsConditions)
      )
    );
  };

  var PerksMarketplace = ({ perks, currentMember, memberPerks, setMemberPerks, setPerks }) => {
    var _ss = useState(""); var search = _ss[0]; var setSearch = _ss[1];
    var _sc = useState("All"); var catFilter = _sc[0]; var setCatFilter = _sc[1];
    var _sl = useState("All"); var locFilter = _sl[0]; var setLocFilter = _sl[1];
    var _st = useState("All"); var typeFilter = _st[0]; var setTypeFilter = _st[1];
    var _so = useState("newest"); var sort = _so[0]; var setSort = _so[1];
    var _sv = useState(null); var selected = _sv[0]; var setSelected = _sv[1];
    var activePerks = perks.filter(function(p) { return p.isActive; });
    var categories = ["All"].concat([...new Set(activePerks.filter(function(p) { return p.category; }).map(function(p) { return p.category; }))]);
    var locations = ["All"].concat([...new Set(activePerks.filter(function(p) { return p.location; }).map(function(p) { return p.location; }))]);
    var filtered = useMemo(function() {
      var list = activePerks.slice();
      if (search) list = list.filter(function(p) { return (p.title + " " + p.partnerName + " " + p.shortDescription + " " + p.category).toLowerCase().includes(search.toLowerCase()); });
      if (catFilter !== "All") list = list.filter(function(p) { return p.category === catFilter; });
      if (locFilter !== "All") list = list.filter(function(p) { return p.location === locFilter; });
      if (typeFilter !== "All") list = list.filter(function(p) { return p.perkType === typeFilter; });
      if (sort === "newest") list.sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });
      if (sort === "ending") list = list.filter(function(p) { return p.expirationDate; }).sort(function(a, b) { return new Date(a.expirationDate) - new Date(b.expirationDate); });
      return list;
    }, [perks, search, catFilter, locFilter, typeFilter, sort]);
    return React.createElement("div", null,
      React.createElement("div", { style: { marginBottom: 20 } },
        React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 4 } }, "Member Perks & Benefits"),
        React.createElement("div", { style: { fontSize: 13, color: "#6b7280" } }, "Exclusive benefits from our partner community.")
      ),
      React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" } },
        React.createElement("div", { style: { flex: 1, minWidth: 180, position: "relative" } },
          React.createElement("span", { style: { position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 13 } }, "🔍"),
          React.createElement("input", { value: search, onChange: function(e) { setSearch(e.target.value); }, placeholder: "Search perks...", style: { width: "100%", padding: "9px 12px 9px 32px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" } })
        ),
        React.createElement("select", { value: catFilter, onChange: function(e) { setCatFilter(e.target.value); }, style: { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } },
          categories.map(function(c) { return React.createElement("option", { key: c, value: c }, c === "All" ? "All Categories" : c); })
        ),
        React.createElement("select", { value: locFilter, onChange: function(e) { setLocFilter(e.target.value); }, style: { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } },
          locations.map(function(l) { return React.createElement("option", { key: l, value: l }, l === "All" ? "All Locations" : l); })
        ),
        React.createElement("select", { value: typeFilter, onChange: function(e) { setTypeFilter(e.target.value); }, style: { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } },
          ["All", "discount", "exclusive_access", "event", "service"].map(function(t) { return React.createElement("option", { key: t, value: t }, t === "All" ? "All Types" : t.replace(/_/g, " ").replace(/\b\w/g, function(c) { return c.toUpperCase(); })); })
        ),
        React.createElement("select", { value: sort, onChange: function(e) { setSort(e.target.value); }, style: { padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" } },
          React.createElement("option", { value: "newest" }, "Newest First"),
          React.createElement("option", { value: "ending" }, "Ending Soon")
        )
      ),
      React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginBottom: 14 } }, filtered.length + " perk" + (filtered.length !== 1 ? "s" : "") + " available"),
      filtered.length === 0
        ? React.createElement("div", { style: { textAlign: "center", padding: "60px 20px", color: "#9ca3af", background: "#fff", borderRadius: 12, border: "1px solid " + BORDER } },
            React.createElement("div", { style: { fontSize: 36, marginBottom: 12 } }, "🎁"),
            React.createElement("div", { style: { fontSize: 15 } }, "No perks match your filters")
          )
        : React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 } },
            filtered.map(function(perk) { return React.createElement(PerkCard, { key: perk.id, perk: perk, onView: function() { setSelected(perk); } }); })
          ),
      selected && React.createElement(PerkDetailModal, { perk: selected, onClose: function() { setSelected(null); }, currentMember: currentMember, memberPerks: memberPerks, setMemberPerks: setMemberPerks, setPerks: setPerks })
    );
  };

  var MyPerks = ({ perks, memberPerks, setMemberPerks, currentMember, setPerks }) => {
    var _st = useState("saved"); var mpTab = _st[0]; var setMpTab = _st[1];
    var _sv = useState(null); var selected = _sv[0]; var setSelected = _sv[1];
    var getPerk = function(mp) { return perks.find(function(p) { return p.id === mp.perkId; }); };
    var savedList = memberPerks.filter(function(mp) { return mp.status === "saved"; });
    var claimedList = memberPerks.filter(function(mp) { return mp.status === "claimed"; });
    var usedList = memberPerks.filter(function(mp) { return mp.status === "used"; });
    var handleRemove = function(mp) {
      db.delete("member_perks", mp.id)
        .then(function() { if (setMemberPerks) setMemberPerks(function(prev) { return prev.filter(function(x) { return x.id !== mp.id; }); }); })
        .catch(function(e) { alert("Error removing perk: " + e.message); });
    };
    var list = mpTab === "saved" ? savedList : mpTab === "claimed" ? claimedList : usedList;
    var tabCounts = { saved: savedList.length, claimed: claimedList.length, used: usedList.length };
    var statusColors = { saved: "#6b7280", claimed: GOLD, used: "#22c55e" };
    return React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: "1px solid " + BORDER, padding: "24px" } },
      React.createElement("div", { style: { fontSize: 18, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 18 } }, "My Perks"),
      React.createElement("div", { style: { display: "flex", gap: 3, marginBottom: 18, background: "#f5f3ef", borderRadius: 10, padding: 4 } },
        ["saved", "claimed", "used"].map(function(t) {
          return React.createElement("button", { key: t, onClick: function() { setMpTab(t); }, style: { flex: 1, padding: "8px", border: "none", borderRadius: 8, cursor: "pointer", fontWeight: mpTab === t ? 700 : 400, background: mpTab === t ? DARK : "transparent", color: mpTab === t ? GOLD : "#6b7280", fontSize: 13, transition: "all 0.2s" } },
            t.charAt(0).toUpperCase() + t.slice(1) + " (" + tabCounts[t] + ")"
          );
        })
      ),
      list.length === 0
        ? React.createElement("div", { style: { textAlign: "center", padding: "32px", color: "#9ca3af", fontSize: 14 } },
            mpTab === "saved" ? "No saved perks yet. Browse the marketplace to discover benefits!" : mpTab === "claimed" ? "No claimed perks yet." : "No used perks yet."
          )
        : list.map(function(mp) {
            var perk = getPerk(mp);
            if (!perk) return null;
            var daysLeft = perk.expirationDate ? Math.ceil((new Date(perk.expirationDate) - new Date()) / 86400000) : null;
            return React.createElement("div", { key: mp.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 0", borderBottom: "1px solid " + BORDER, gap: 12 } },
              React.createElement("div", { style: { display: "flex", gap: 12, alignItems: "center", flex: 1, cursor: "pointer" }, onClick: function() { setSelected(perk); } },
                React.createElement("div", { style: { width: 42, height: 42, background: "linear-gradient(135deg, " + DARK + " 0%, #2a2725 100%)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } },
                  perk.partnerLogo
                    ? React.createElement("img", { src: perk.partnerLogo, alt: perk.partnerName, style: { maxWidth: 34, maxHeight: 34, objectFit: "contain" } })
                    : React.createElement("div", { style: { color: GOLD_TEXT, fontSize: 13, fontWeight: 700 } }, perk.partnerName ? perk.partnerName.slice(0, 2).toUpperCase() : "🎁")
                ),
                React.createElement("div", null,
                  React.createElement("div", { style: { fontWeight: 600, color: DARK, fontSize: 14 } }, perk.title),
                  React.createElement("div", { style: { color: "#9ca3af", fontSize: 12, marginTop: 2 } }, perk.partnerName + (daysLeft !== null ? " · " + (daysLeft <= 0 ? "Expired" : daysLeft + "d left") : ""))
                )
              ),
              React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } },
                React.createElement(Badge, { label: mp.status, color: statusColors[mp.status] || "#6b7280" }),
                mpTab === "saved" && React.createElement(Btn, { small: true, variant: "danger", onClick: function() { handleRemove(mp); } }, "Remove")
              )
            );
          }),
      selected && React.createElement(PerkDetailModal, { perk: selected, onClose: function() { setSelected(null); }, currentMember: currentMember, memberPerks: memberPerks, setMemberPerks: setMemberPerks, setPerks: setPerks })
    );
  };

  var PerkFormModal = ({ perk, onClose, onSave }) => {
    var blank = { title: "", shortDescription: "", fullDescription: "", partnerName: "", partnerLogo: null, category: "", location: "", perkType: "discount", redemptionType: "promo_code", promoCode: "", externalLink: "", expirationDate: "", termsConditions: "", isActive: true };
    var _sf = useState(perk || blank); var form = _sf[0]; var setForm = _sf[1];
    var _ss = useState(false); var saving = _ss[0]; var setSaving = _ss[1];
    var set = function(k) { return function(v) { setForm(function(f) { return Object.assign({}, f, { [k]: v }); }); }; };
    var handleSubmit = function() {
      if (!form.title.trim() || !form.partnerName.trim()) { alert("Title and Partner Name are required."); return; }
      setSaving(true);
      Promise.resolve(onSave(form)).finally(function() { setSaving(false); });
    };
    return React.createElement(Modal, { onClose: onClose, title: perk ? "Edit Perk" : "Create New Perk", maxWidth: 700 },
      React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },
          React.createElement(Input, { label: "Perk Title *", value: form.title, onChange: set("title"), style: { gridColumn: "1 / -1" } }),
          React.createElement(Input, { label: "Partner Name *", value: form.partnerName, onChange: set("partnerName") }),
          React.createElement(Input, { label: "Category (e.g. Finance, Tech)", value: form.category, onChange: set("category") }),
          React.createElement(Input, { label: "Location (e.g. Cairo, Global)", value: form.location, onChange: set("location") }),
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Expiration Date"),
            React.createElement("input", { type: "date", value: form.expirationDate || "", onChange: function(e) { set("expirationDate")(e.target.value); }, style: { width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 9, fontSize: 13, boxSizing: "border-box", outline: "none" } })
          )
        ),
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 } },
          React.createElement(Select, { label: "Perk Type", value: form.perkType, onChange: set("perkType"), options: ["discount", "exclusive_access", "event", "service"] }),
          React.createElement(Select, { label: "Redemption Type", value: form.redemptionType, onChange: set("redemptionType"), options: ["promo_code", "apply", "external_link"] })
        ),
        form.redemptionType === "promo_code" && React.createElement(Input, { label: "Promo Code", value: form.promoCode, onChange: set("promoCode") }),
        form.redemptionType === "external_link" && React.createElement(Input, { label: "External Link (URL)", value: form.externalLink, onChange: set("externalLink") }),
        React.createElement(Textarea, { label: "Short Description (shown on card)", value: form.shortDescription, onChange: set("shortDescription"), rows: 2 }),
        React.createElement(Textarea, { label: "Full Description / Benefit Details", value: form.fullDescription, onChange: set("fullDescription"), rows: 4 }),
        React.createElement(Textarea, { label: "Terms & Conditions", value: form.termsConditions, onChange: set("termsConditions"), rows: 3 }),
        React.createElement("div", null,
          React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, "Partner Logo"),
          React.createElement(PhotoUpload, { value: form.partnerLogo, onChange: set("partnerLogo") })
        ),
        React.createElement(Toggle, { label: "Active (visible in marketplace)", value: form.isActive, onChange: set("isActive") }),
        React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end", paddingTop: 8 } },
          React.createElement(Btn, { variant: "ghost", onClick: onClose }, "Cancel"),
          React.createElement(Btn, { onClick: handleSubmit, disabled: saving }, saving ? "Saving..." : perk ? "Save Changes" : "Create Perk")
        )
      )
    );
  };

  var AdminPerks = ({ perks, setPerks }) => {
    var _ss = useState(null); var selected = _ss[0]; var setSelected = _ss[1];
    var _sf = useState(false); var showForm = _sf[0]; var setShowForm = _sf[1];
    var _st = useState("all"); var tab = _st[0]; var setTab = _st[1];
    var _sq = useState(""); var search = _sq[0]; var setSearch = _sq[1];
    var _smp = useState([]); var allMemberPerks = _smp[0]; var setAllMemberPerks = _smp[1];
    useEffect(function() {
      db.select("member_perks", "?order=saved_at.desc")
        .then(function(rows) { setAllMemberPerks((rows || []).map(rowToMemberPerk)); })
        .catch(function() {});
    }, []);
    var totalViews = perks.reduce(function(s, p) { return s + (p.views || 0); }, 0);
    var totalSaves = allMemberPerks.filter(function(mp) { return mp.status === "saved"; }).length;
    var totalClaims = allMemberPerks.filter(function(mp) { return mp.status === "claimed" || mp.status === "used"; }).length;
    var activeCount = perks.filter(function(p) { return p.isActive; }).length;
    var claimsByPerk = {};
    allMemberPerks.forEach(function(mp) { claimsByPerk[mp.perkId] = (claimsByPerk[mp.perkId] || 0) + 1; });
    var topPerks = perks.slice().sort(function(a, b) { return (b.views || 0) - (a.views || 0); }).slice(0, 5);
    var tabCounts = { all: perks.length, active: activeCount, inactive: perks.length - activeCount };
    var filtered = useMemo(function() {
      var list = tab === "active" ? perks.filter(function(p) { return p.isActive; }) : tab === "inactive" ? perks.filter(function(p) { return !p.isActive; }) : perks.slice();
      if (search) list = list.filter(function(p) { return (p.title + " " + p.partnerName + " " + (p.category || "")).toLowerCase().includes(search.toLowerCase()); });
      return list;
    }, [perks, tab, search]);
    var handleSave = function(formData) {
      if (formData.id) {
        return db.update("perks", formData.id, perkToRow(formData))
          .then(function() { setPerks(function(prev) { return prev.map(function(p) { return p.id === formData.id ? Object.assign({}, p, formData) : p; }); }); setShowForm(false); setSelected(null); })
          .catch(function(e) { alert("Error: " + e.message); });
      } else {
        return db.insert("perks", perkToRow(formData))
          .then(function(rows) { if (rows && rows[0]) setPerks(function(prev) { return [...prev, rowToPerk(rows[0])]; }); setShowForm(false); setSelected(null); })
          .catch(function(e) { alert("Error: " + e.message); });
      }
    };
    var handleToggleActive = function(perk) {
      db.update("perks", perk.id, { is_active: !perk.isActive })
        .then(function() { setPerks(function(prev) { return prev.map(function(p) { return p.id === perk.id ? Object.assign({}, p, { isActive: !perk.isActive }) : p; }); }); })
        .catch(function(e) { alert("Error: " + e.message); });
    };
    return React.createElement("div", null,
      React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 22 } },
        React.createElement(StatCard, { label: "Active Perks", value: activeCount, accent: GOLD }),
        React.createElement(StatCard, { label: "Total Views", value: totalViews, accent: "#3b82f6" }),
        React.createElement(StatCard, { label: "Total Saves", value: totalSaves, accent: "#8b5cf6" }),
        React.createElement(StatCard, { label: "Total Claims", value: totalClaims, accent: "#22c55e" })
      ),
      topPerks.length > 0 && React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: "1px solid " + BORDER, padding: "18px 20px", marginBottom: 20 } },
        React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: DARK, marginBottom: 12 } }, "Most Viewed Perks"),
        topPerks.map(function(p, i) {
          return React.createElement("div", { key: p.id, style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i < topPerks.length - 1 ? "1px solid #f5f5f5" : "none" } },
            React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } },
              React.createElement("div", { style: { width: 22, height: 22, background: GOLD + "22", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: GOLD_TEXT } }, i + 1),
              React.createElement("div", null,
                React.createElement("div", { style: { fontSize: 13, fontWeight: 600, color: DARK } }, p.title),
                React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, p.partnerName)
              )
            ),
            React.createElement("div", { style: { display: "flex", gap: 14, fontSize: 12, color: "#6b7280" } },
              React.createElement("span", null, "👁 " + (p.views || 0)),
              React.createElement("span", null, "📌 " + (claimsByPerk[p.id] || 0) + " claims")
            )
          );
        })
      ),
      React.createElement("div", { style: { display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" } },
        React.createElement("div", { style: { flex: 1, minWidth: 200, position: "relative" } },
          React.createElement("span", { style: { position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 13 } }, "🔍"),
          React.createElement("input", { value: search, onChange: function(e) { setSearch(e.target.value); }, placeholder: "Search perks...", style: { width: "100%", padding: "10px 12px 10px 32px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" } })
        ),
        React.createElement(Btn, { onClick: function() { setSelected(null); setShowForm(true); } }, "+ Add Perk")
      ),
      React.createElement("div", { style: { display: "flex", gap: 2, marginBottom: 16, borderBottom: "2px solid #e5e7eb" } },
        ["all", "active", "inactive"].map(function(t) {
          return React.createElement("button", { key: t, onClick: function() { setTab(t); }, style: { padding: "8px 18px", border: "none", background: "none", cursor: "pointer", fontSize: 14, fontWeight: tab === t ? 700 : 400, color: tab === t ? DARK : "#6b7280", borderBottom: "2px solid " + (tab === t ? GOLD : "transparent"), marginBottom: -2, transition: "all 0.15s" } },
            t.charAt(0).toUpperCase() + t.slice(1) + " (" + tabCounts[t] + ")"
          );
        })
      ),
      React.createElement("div", { className: "admin-table", style: { background: "#fff", borderRadius: 12, border: "1px solid " + BORDER, overflow: "hidden" } },
        React.createElement("div", { style: { display: "grid", gridTemplateColumns: "2fr 1.4fr 1fr 1fr 0.7fr 0.7fr 130px", padding: "11px 18px", background: "#fafaf8", borderBottom: "1px solid " + BORDER, fontSize: 10, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px" } },
          ["Perk", "Partner", "Category", "Type", "Views", "Status", "Actions"].map(function(h) { return React.createElement("div", { key: h }, h); })
        ),
        filtered.length === 0 && React.createElement("div", { style: { padding: "40px", textAlign: "center", color: "#9ca3af", fontSize: 14 } }, "No perks found."),
        filtered.map(function(perk, i) {
          return React.createElement("div", { key: perk.id, style: { display: "grid", gridTemplateColumns: "2fr 1.4fr 1fr 1fr 0.7fr 0.7fr 130px", padding: "13px 18px", borderBottom: i < filtered.length - 1 ? "1px solid #f6f5f3" : "none", alignItems: "center", opacity: perk.isActive ? 1 : 0.6 } },
            React.createElement("div", null,
              React.createElement("div", { style: { fontWeight: 600, color: DARK, fontSize: 13 } }, perk.title),
              React.createElement("div", { style: { color: "#9ca3af", fontSize: 11, marginTop: 2 } }, perk.expirationDate ? "Expires " + perk.expirationDate : "No expiry")
            ),
            React.createElement("div", { style: { fontSize: 13, color: "#374151" } }, perk.partnerName),
            React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, perk.category || "—"),
            React.createElement("div", { style: { fontSize: 12, color: "#6b7280" } }, perk.perkType ? perk.perkType.replace(/_/g, " ") : "—"),
            React.createElement("div", { style: { fontSize: 13, color: "#374151" } }, perk.views || 0),
            React.createElement("div", null, React.createElement(Badge, { label: perk.isActive ? "Active" : "Inactive", color: perk.isActive ? "#22c55e" : "#6b7280" })),
            React.createElement("div", { style: { display: "flex", gap: 5 } },
              React.createElement(Btn, { small: true, variant: "secondary", onClick: function() { setSelected(perk); setShowForm(true); } }, "Edit"),
              React.createElement(Btn, { small: true, variant: perk.isActive ? "danger" : "success", onClick: function() { handleToggleActive(perk); } }, perk.isActive ? "Off" : "On")
            )
          );
        })
      ),
      showForm && React.createElement(PerkFormModal, { perk: selected, onClose: function() { setShowForm(false); setSelected(null); }, onSave: handleSave })
    );
  };

  var DeoMail = ({ currentMember, allMembers, messages, setMessages, mailTo, setMailTo }) => {
    const [view, setView] = useState("inbox");
    const [selectedContact, setSelectedContact] = useState(null);
    const [composing, setComposing] = useState(() => !!mailTo);
    const [composeForm, setComposeForm] = useState(() => ({ toId: mailTo ? mailTo.id : "", subject: "", body: "" }));
    const [refreshing, setRefreshing] = useState(false);
    const [replyBody, setReplyBody] = useState("");
    const [toSearch, setToSearch] = useState(() => mailTo ? mailTo.firstName + " " + mailTo.lastName : "");
    const [showToDropdown, setShowToDropdown] = useState(false);
    useEffect(() => { if (mailTo) { setComposing(true); setComposeForm((f) => ({ ...f, toId: mailTo.id, subject: "" })); setToSearch(mailTo.firstName + " " + mailTo.lastName); setMailTo(null); } }, [mailTo]);
    useEffect(() => { if (mailTo) setMailTo(null); }, []);
    const conversations = useMemo(() => {
      const map = {};
      messages.forEach((m) => {
        const cid = m.senderId === currentMember.id ? m.receiverId : m.senderId;
        if (!map[cid]) map[cid] = [];
        map[cid].push(m);
      });
      return Object.entries(map).map(([cid, msgs]) => {
        const sorted = [...msgs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return { cid, last: sorted[0], unread: msgs.filter((m) => m.receiverId === currentMember.id && !m.readAt).length, msgs: sorted };
      }).sort((a, b) => new Date(b.last.createdAt) - new Date(a.last.createdAt));
    }, [messages, currentMember.id]);
    const threadMsgs = useMemo(() => {
      if (!selectedContact) return [];
      return messages.filter((m) => (m.senderId === currentMember.id && m.receiverId === selectedContact.id) || (m.receiverId === currentMember.id && m.senderId === selectedContact.id)).sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }, [messages, selectedContact, currentMember.id]);
    const refresh = async () => {
      setRefreshing(true);
      try { const rows = await db.select("messages", `?or=(sender_id.eq.${currentMember.id},receiver_id.eq.${currentMember.id})&order=created_at.desc`); setMessages((rows || []).map(rowToMessage)); } catch(e) {}
      setRefreshing(false);
    };
    const openThread = async (conv) => {
      const contact = allMembers.find((m) => m.id === conv.cid);
      setSelectedContact(contact); setView("thread");
      const unread = conv.msgs.filter((m) => m.receiverId === currentMember.id && !m.readAt);
      if (unread.length) { await Promise.all(unread.map((m) => db.update("messages", m.id, { read_at: new Date().toISOString() }))); setMessages((prev) => prev.map((m) => unread.find((u) => u.id === m.id) ? { ...m, readAt: new Date().toISOString() } : m)); }
    };
    const sendMessage = async () => {
      if (!composeForm.toId || !composeForm.body.trim()) { alert("Please select a recipient and write a message."); return; }
      const recipientId = composeForm.toId;
      try { const ins = await db.insert("messages", { sender_id: currentMember.id, receiver_id: recipientId, subject: composeForm.subject || "(no subject)", body: composeForm.body }); const row = Array.isArray(ins) ? ins[0] : ins; setMessages((prev) => [rowToMessage(row), ...prev]); setComposing(false); setComposeForm({ toId: "", subject: "", body: "" }); setToSearch(""); const recipient = allMembers.find((m) => m.id === recipientId); if (recipient) { setSelectedContact(recipient); setView("thread"); } } catch(e) { alert("Error: " + e.message); }
    };
    const sendReply = async () => {
      if (!replyBody.trim()) return;
      const sub = threadMsgs.length ? (threadMsgs[threadMsgs.length - 1].subject.startsWith("Re: ") ? threadMsgs[threadMsgs.length - 1].subject : "Re: " + threadMsgs[threadMsgs.length - 1].subject) : "";
      try { const ins = await db.insert("messages", { sender_id: currentMember.id, receiver_id: selectedContact.id, subject: sub, body: replyBody }); const row = Array.isArray(ins) ? ins[0] : ins; setMessages((prev) => [...prev, rowToMessage(row)]); setReplyBody(""); } catch(e) { alert("Error: " + e.message); }
    };
    const fmtDate = (d) => { const dt = new Date(d); const today = new Date(); const datePart = dt.toDateString() === today.toDateString() ? "Today" : dt.toLocaleDateString([], { month: "short", day: "numeric" }); const timePart = dt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); return `${datePart} ${timePart}`; };
    const otherMember = (m) => allMembers.find((x) => x.id === m.senderId) || { firstName: "Unknown", lastName: "" };
    const S = { container: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, overflow: "hidden", minHeight: 520 }, header: { padding: "16px 20px", borderBottom: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: CREAM }, title: { fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 700, color: DARK }, row: (unread) => ({ padding: "14px 20px", borderBottom: `1px solid #f6f5f3`, cursor: "pointer", display: "flex", gap: 14, alignItems: "flex-start", background: unread ? "#fdfbf7" : "#fff", transition: "background 0.1s" }) };
    return React.createElement("div", { style: S.container },
      React.createElement("div", { style: S.header },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
          view === "thread" && React.createElement("button", { onClick: () => { setView("inbox"); setSelectedContact(null); }, style: { background: "none", border: "none", cursor: "pointer", color: GOLD_TEXT, fontSize: 14, fontWeight: 600, padding: "0 8px 0 0" } }, "← Back"),
          React.createElement("span", { style: S.title }, view === "inbox" ? "✉️ DEO Mail" : (selectedContact ? `${selectedContact.firstName} ${selectedContact.lastName}` : "DEO Mail"))),
        React.createElement("div", { style: { display: "flex", gap: 8 } },
          React.createElement("button", { onClick: refresh, disabled: refreshing, style: { background: "none", border: `1px solid ${BORDER}`, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 12, color: "#6b7280", display: "flex", alignItems: "center", gap: 6 } }, refreshing ? "⟳ Refreshing…" : "🔄 Refresh"),
          view === "inbox" && React.createElement("button", { onClick: () => setComposing(true), style: { background: DARK, color: "#fff", border: "none", borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontSize: 13, fontWeight: 600 } }, "✏️ Compose"))),
      view === "inbox" && React.createElement("div", null,
        conversations.length === 0 && React.createElement("div", { style: { padding: 40, textAlign: "center", color: "#9ca3af", fontSize: 14 } }, "Your DEO Mail inbox is empty. Hit Compose to send your first message."),
        conversations.map((conv) => {
          const contact = allMembers.find((m) => m.id === conv.cid);
          if (!contact) return null;
          const initials = (contact.firstName[0] || "") + (contact.lastName[0] || "");
          return React.createElement("div", { key: conv.cid, onClick: () => openThread(conv), style: S.row(conv.unread > 0) },
            React.createElement("div", { style: { width: 40, height: 40, borderRadius: "50%", background: GOLD, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 } }, initials),
            React.createElement("div", { style: { flex: 1, minWidth: 0 } },
              React.createElement("div", { style: { display: "flex", justifyContent: "space-between", marginBottom: 3 } },
                React.createElement("span", { style: { fontWeight: conv.unread > 0 ? 700 : 500, fontSize: 14, color: DARK } }, `${contact.firstName} ${contact.lastName}`),
                React.createElement("span", { style: { fontSize: 11, color: "#9ca3af" } }, fmtDate(conv.last.createdAt))),
              React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
                React.createElement("span", { style: { fontSize: 13, fontWeight: conv.unread > 0 ? 600 : 400, color: conv.unread > 0 ? DARK : "#6b7280", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "70%" } }, conv.last.subject || "(no subject)"),
                conv.unread > 0 && React.createElement("span", { style: { background: GOLD, color: "#fff", borderRadius: 10, padding: "1px 7px", fontSize: 10, fontWeight: 700 } }, conv.unread))));
        })),
      view === "thread" && React.createElement("div", { style: { display: "flex", flexDirection: "column", height: 460 } },
        React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "16px 20px", display: "flex", flexDirection: "column", gap: 14 } },
          threadMsgs.map((m) => {
            const isMine = m.senderId === currentMember.id;
            const sender = isMine ? currentMember : (allMembers.find((x) => x.id === m.senderId) || { firstName: "?", lastName: "" });
            return React.createElement("div", { key: m.id, style: { display: "flex", flexDirection: "column", alignItems: isMine ? "flex-end" : "flex-start" } },
              React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", marginBottom: 4 } }, `${sender.firstName} ${sender.lastName} · ${fmtDate(m.createdAt)}`),
              m.subject && !m.subject.startsWith("Re:") && React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#9ca3af", marginBottom: 3 } }, m.subject),
              React.createElement("div", { style: { maxWidth: "72%", background: isMine ? DARK : "#f5f3ef", color: isMine ? "#fff" : DARK, borderRadius: isMine ? "12px 12px 2px 12px" : "12px 12px 12px 2px", padding: "10px 14px", fontSize: 14, lineHeight: 1.5 } }, m.body));
          })),
        React.createElement("div", { style: { padding: "12px 16px", borderTop: `1px solid ${BORDER}`, display: "flex", gap: 10, alignItems: "flex-end" } },
          React.createElement("textarea", { value: replyBody, onChange: (e) => setReplyBody(e.target.value), onKeyDown: (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendReply(); } }, placeholder: "Write a reply… (Enter to send, Shift+Enter for new line)", rows: 3, style: { flex: 1, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "8px 12px", fontSize: 13, resize: "none", fontFamily: "inherit", outline: "none" } }),
          React.createElement("button", { onClick: sendReply, style: { background: DARK, color: "#fff", border: "none", borderRadius: 8, padding: "10px 16px", cursor: "pointer", fontWeight: 600, fontSize: 13 } }, "Send ↑"))),
      composing && React.createElement(Modal, { onClose: () => setComposing(false), title: "New Message", maxWidth: 520 },
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#9ca3af", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" } }, "To"),
            React.createElement("div", { style: { position: "relative" } },
              React.createElement("input", { value: toSearch, onChange: (e) => { setToSearch(e.target.value); setShowToDropdown(true); if (!e.target.value) setComposeForm((f) => ({ ...f, toId: "" })); }, onKeyDown: (e) => { if (e.key === "Enter") { const filtered = allMembers.filter((m) => m.id !== currentMember.id && `${m.firstName} ${m.lastName}`.toLowerCase().includes(toSearch.toLowerCase())); if (filtered.length > 0) { const m = filtered[0]; setComposeForm((f) => ({ ...f, toId: m.id })); setToSearch(`${m.firstName} ${m.lastName}`); setShowToDropdown(false); } e.preventDefault(); } if (e.key === "Escape") setShowToDropdown(false); }, onFocus: () => setShowToDropdown(true), placeholder: "Type a name to search…", style: { padding: "10px 12px", border: `1px solid ${composeForm.toId ? GOLD : BORDER}`, borderRadius: 9, fontSize: 14, outline: "none", background: "#fff", color: "#374151", width: "100%", boxSizing: "border-box" } }),
              showToDropdown && toSearch && React.createElement("div", { style: { position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 9, zIndex: 999, maxHeight: 200, overflowY: "auto", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", marginTop: 2 } },
                allMembers.filter((m) => m.id !== currentMember.id && `${m.firstName} ${m.lastName}`.toLowerCase().includes(toSearch.toLowerCase())).length === 0
                  ? React.createElement("div", { style: { padding: "10px 12px", fontSize: 13, color: "#9ca3af" } }, "No members found")
                  : allMembers.filter((m) => m.id !== currentMember.id && `${m.firstName} ${m.lastName}`.toLowerCase().includes(toSearch.toLowerCase())).map((m) => React.createElement("div", { key: m.id, onMouseDown: (e) => { e.preventDefault(); setComposeForm((f) => ({ ...f, toId: m.id })); setToSearch(`${m.firstName} ${m.lastName}`); setShowToDropdown(false); }, style: { padding: "10px 12px", cursor: "pointer", fontSize: 13, color: DARK, borderBottom: `1px solid #f6f5f3`, display: "flex", alignItems: "center", gap: 10 } }, React.createElement("div", { style: { width: 28, height: 28, borderRadius: "50%", background: GOLD, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, flexShrink: 0 } }, (m.firstName[0] || "") + (m.lastName[0] || "")), React.createElement("span", null, `${m.firstName} ${m.lastName}`)))))),
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#9ca3af", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" } }, "Subject"),
            React.createElement(Input, { value: composeForm.subject, onChange: (v) => setComposeForm((f) => ({ ...f, subject: v })), placeholder: "Subject" })),
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 11, fontWeight: 600, color: "#9ca3af", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.5px" } }, "Message"),
            React.createElement(Textarea, { value: composeForm.body, onChange: (v) => setComposeForm((f) => ({ ...f, body: v })), placeholder: "Write your message…", rows: 6 })),
          React.createElement(Btn, { onClick: sendMessage }, "Send DEO Mail ✉️"))));
  };
  var AdminBlast = ({ members, currentMember, setMessages }) => {
    const [filterCountry, setFilterCountry] = useState("");
    const [filterIndustry, setFilterIndustry] = useState("");
    const [filterExpertise, setFilterExpertise] = useState("");
    const [filterGradYear, setFilterGradYear] = useState("");
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(null);
    const [confirm, setConfirm] = useState(false);
    const gradYears = useMemo(() => [...new Set(members.map((m) => m.graduationYear).filter(Boolean))].sort((a, b) => b - a), [members]);
    const activeMembers = useMemo(() => members.filter((m) => m.status === "active" && !m.deactivated && m.id !== currentMember.id), [members, currentMember.id]);
    const recipients = useMemo(() => activeMembers.filter((m) => {
      if (filterCountry && m.country !== filterCountry) return false;
      if (filterIndustry && !(m.industries || []).includes(filterIndustry)) return false;
      if (filterExpertise && !(m.expertise || []).includes(filterExpertise)) return false;
      if (filterGradYear && String(m.graduationYear) !== filterGradYear) return false;
      return true;
    }), [activeMembers, filterCountry, filterIndustry, filterExpertise, filterGradYear]);
    const hasFilters = filterCountry || filterIndustry || filterExpertise || filterGradYear;
    const doSend = async () => {
      if (!subject.trim() || !body.trim()) { alert("Subject and body are required."); return; }
      setSending(true);
      try {
        const msgs = recipients.map((r) => ({ sender_id: currentMember.id, receiver_id: r.id, subject: subject.trim(), body: body.trim() }));
        const inserted = await db.insert("messages", msgs);
        const rows = Array.isArray(inserted) ? inserted : (inserted ? [inserted] : []);
        if (rows.length) setMessages((prev) => [...rows.map(rowToMessage), ...prev]);
        setSent(recipients.length);
        setConfirm(false);
        setSubject("");
        setBody("");
      } catch (e) { alert("Error sending blast: " + e.message); }
      setSending(false);
    };
    const inputStyle = { width: "100%", padding: "9px 12px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" };
    const selectStyle = { ...inputStyle, background: "#fff", cursor: "pointer" };
    return React.createElement("div", null,
      React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "24px", marginBottom: 20 } },
        React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)", marginBottom: 4 } }, "📢 Blast DEO Mail"),
        React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", marginBottom: 20 } }, "Send a message to all or a filtered segment of active members. Each recipient receives it in their DEO Mail inbox."),
        /* Filters */
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: DARK, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 } }, "Filter Recipients"),
        React.createElement("div", { className: "blast-filters", style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 10, marginBottom: 16 } },
          React.createElement("select", { value: filterCountry, onChange: (e) => setFilterCountry(e.target.value), style: { ...selectStyle, background: filterCountry ? DARK : "#fff", color: filterCountry ? GOLD : "#374151" } },
            React.createElement("option", { value: "" }, "All Countries"), COUNTRY_OPTIONS.map((c) => React.createElement("option", { key: c, value: c }, c))),
          React.createElement("select", { value: filterIndustry, onChange: (e) => setFilterIndustry(e.target.value), style: { ...selectStyle, background: filterIndustry ? DARK : "#fff", color: filterIndustry ? GOLD : "#374151" } },
            React.createElement("option", { value: "" }, "All Industries"), INDUSTRY_OPTIONS.map((i) => React.createElement("option", { key: i, value: i }, i))),
          React.createElement("select", { value: filterExpertise, onChange: (e) => setFilterExpertise(e.target.value), style: { ...selectStyle, background: filterExpertise ? DARK : "#fff", color: filterExpertise ? GOLD : "#374151" } },
            React.createElement("option", { value: "" }, "All Expertise"), EXPERTISE_OPTIONS.map((e) => React.createElement("option", { key: e, value: e }, e))),
          React.createElement("select", { value: filterGradYear, onChange: (e) => setFilterGradYear(e.target.value), style: { ...selectStyle, background: filterGradYear ? DARK : "#fff", color: filterGradYear ? GOLD : "#374151" } },
            React.createElement("option", { value: "" }, "All Classes"), gradYears.map((y) => React.createElement("option", { key: y, value: String(y) }, "Class of ", y)))
        ),
        /* Recipient preview */
        React.createElement("div", { style: { background: recipients.length > 0 ? "#f0fdf4" : "#fafaf8", border: `1px solid ${recipients.length > 0 ? "#bbf7d0" : "#fdf0e1"}`, borderRadius: 10, padding: "14px 18px", marginBottom: 20, display: "flex", alignItems: "center", gap: 14 } },
          React.createElement("div", { style: { display: "flex", marginRight: 4 } }, recipients.slice(0, 5).map((m, i) => React.createElement("div", { key: m.id, style: { marginLeft: i > 0 ? -8 : 0, zIndex: 5 - i, position: "relative" } }, React.createElement(Avatar, { member: m, size: 30 })))),
          React.createElement("div", null,
            React.createElement("div", { style: { fontSize: 14, fontWeight: 700, color: recipients.length > 0 ? "#15803d" : "#9ca3af" } }, recipients.length, " recipient", recipients.length !== 1 ? "s" : ""),
            React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, hasFilters ? "Matching your filters" : "All active members"),
            recipients.length > 0 && React.createElement("div", { style: { fontSize: 11, color: "#15803d", fontWeight: 600, marginTop: 3 } }, recipients.slice(0, 5).map((r) => r.firstName + " " + r.lastName).join(", ") + (recipients.length > 5 ? ` and ${recipients.length - 5} more` : ""))
          ),
          recipients.length > 0 && hasFilters && React.createElement("button", { onClick: () => { setFilterCountry(""); setFilterIndustry(""); setFilterExpertise(""); setFilterGradYear(""); }, style: { marginLeft: "auto", fontSize: 11, color: "#9ca3af", background: "none", border: "none", cursor: "pointer" } }, "✕ Clear filters")
        ),
        /* Compose */
        React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: DARK, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 10 } }, "Compose Message"),
        React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 10 } },
          React.createElement("input", { value: subject, onChange: (e) => setSubject(e.target.value), placeholder: "Subject line…", style: inputStyle }),
          React.createElement("textarea", { value: body, onChange: (e) => setBody(e.target.value), placeholder: "Write your message here…\n\nNote: messages will be sent from your name. Each recipient sees it as a personal DEO Mail.", rows: 7, style: { ...inputStyle, resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 } })
        )
      ),
      /* Send / Confirmation */
      sent !== null && React.createElement("div", { style: { background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: "14px 18px", marginBottom: 16, fontSize: 14, color: "#15803d", fontWeight: 600 } }, "✅ Blast sent successfully to ", sent, " member", sent !== 1 ? "s" : "", "."),
      React.createElement("div", { style: { display: "flex", justifyContent: "flex-end", gap: 10 } },
        !confirm
          ? React.createElement(Btn, { onClick: () => { setSent(null); setConfirm(true); }, disabled: recipients.length === 0 || !subject.trim() || !body.trim() }, `Send to ${recipients.length} Member${recipients.length !== 1 ? "s" : ""} →`)
          : React.createElement(React.Fragment, null,
              React.createElement("div", { style: { background: "#fff8e1", border: "1px solid #fbbf24", borderRadius: 10, padding: "12px 18px", fontSize: 13, color: "#92400e", flex: 1 } }, "⚠️ This will send a DEO Mail to ", React.createElement("strong", null, recipients.length, " member", recipients.length !== 1 ? "s" : ""), ". This cannot be undone."),
              React.createElement(Btn, { variant: "ghost", onClick: () => setConfirm(false) }, "Cancel"),
              React.createElement(Btn, { variant: "danger", onClick: doSend, disabled: sending }, sending ? "Sending…" : `Confirm & Send`)
            )
      )
    );
  };

  var MemberPortal = ({ currentMember, allMembers, onUpdateSelf, allEvents, onRegister, myRegistrations, perks, memberPerks, setMemberPerks, messages, setMessages, pendingMailTo, setPendingMailTo, donationProjects = [], feedItems = [], setFeedItems, posts = [], setPosts, jobs = [], setJobs, opportunities = [], setOpportunities, onRefresh, deals = [], setDeals, dealBids = [], setDealBids }) => {
    var _a, _b, _c, _d;
    const [tab, setTab] = useState("feed");
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState(currentMember);
    const [viewingMember, setViewingMember] = useState(null);
    const [perksView, setPerksView] = useState("marketplace");
    const [deoMailTo, setDeoMailTo] = useState(null);
    const [donateProject, setDonateProject] = useState(null);
    useEffect(() => { if (pendingMailTo) { setTab("mail"); setDeoMailTo(pendingMailTo); setPendingMailTo(null); } }, [pendingMailTo]);
    const _defaultDonProjects = [{ name: "Scholarship Fund", description: "Support students with financial need through DEO's scholarship program." }, { name: "School Renovation", description: "Upgrade facilities and infrastructure at DEO schools." }, { name: "Lab Equipment", description: "Fund modern equipment for science and technology labs." }, { name: "General Fund", description: "Support DEO's core programs and operations." }];
    const _activeDonProjects = (donationProjects || []).filter((p) => p.status === "active").length > 0 ? (donationProjects || []).filter((p) => p.status === "active") : _defaultDonProjects;
    const _donTotals = allMembers.reduce((acc, m) => { (m.donationHistory || []).forEach((d) => { acc[d.project] = (acc[d.project] || 0) + d.amount; }); return acc; }, {});
    const set = (k) => (v) => setForm((f) => __spreadProps(__spreadValues({}, f), { [k]: v }));
    const years = Array.from({ length: 60 }, (_, i) => String(2024 - i));
    const suggested = allMembers.filter((m) => m.id !== currentMember.id && m.status === "active" && !m.deactivated && (m.industries || []).some((i) => (currentMember.industries || []).includes(i))).slice(0, 4);
    const [netQ, setNetQ] = useState("");
    const [netCountry, setNetCountry] = useState("");
    const [netIndustry, setNetIndustry] = useState("");
    const [netExpertise, setNetExpertise] = useState("");
    const [candidateProfile, setCandidateProfile] = useState(null);
    const [showCandidateModal, setShowCandidateModal] = useState(false);
    const [candidateLoaded, setCandidateLoaded] = useState(false);
    // Load candidate profile on first Careers tab visit
    const loadCandidateProfile = () => {
      if (candidateLoaded) return;
      setCandidateLoaded(true);
      db.select("candidate_profiles", `?member_id=eq.${currentMember.id}&limit=1`)
        .then((rows) => { if (rows && rows[0]) setCandidateProfile(rowToCandidateProfile(rows[0])); })
        .catch(() => {});
    };
    const [netBadge, setNetBadge] = useState("");
    const filteredDir = useMemo(() => {
      const q = netQ.toLowerCase();
      return allMembers.filter((m) => {
        if (m.id === currentMember.id || m.deactivated || m.status !== "active") return false;
        if (q && !`${m.firstName} ${m.lastName} ${m.role} ${(m.companies||[]).join(" ")} ${(m.expertise||[]).join(" ")} ${m.country||""}`.toLowerCase().includes(q)) return false;
        if (netCountry && m.country !== netCountry) return false;
        if (netIndustry && !(m.industries||[]).includes(netIndustry)) return false;
        if (netExpertise && !(m.expertise||[]).includes(netExpertise)) return false;
        if (netBadge === "mentor" && !m.willingToMentor) return false;
        if (netBadge === "hiring" && !m.openToHiring) return false;
        if (netBadge === "fundraising" && !m.openToFundraising) return false;
        return true;
      });
    }, [allMembers, currentMember.id, netQ, netCountry, netIndustry, netExpertise, netBadge]);
    const saveProfile = () => {
      onUpdateSelf && onUpdateSelf(form);
      setEditing(false);
    };
    return /* @__PURE__ */ React.createElement("div", { className: "portal-content", style: { maxWidth: 900, margin: "0 auto", padding: "24px" } }, /* @__PURE__ */ React.createElement("div", { className: "member-header", style: { background: DARK, borderRadius: 12, padding: "28px 32px", marginBottom: 24, color: "#fff", display: "flex", gap: 22, alignItems: "center", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement(Avatar, { member: currentMember, size: 68 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: GOLD, fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase", marginBottom: 4 } }, "Welcome back"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, fontWeight: 700, fontFamily: "var(--font-sans)" } }, currentMember.firstName, " ", currentMember.lastName), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 13, marginTop: 4 } }, currentMember.role, " · Class of ", currentMember.graduationYear, " · ", currentMember.country), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" } }, currentMember.willingToMentor && /* @__PURE__ */ React.createElement(Badge, { label: "Mentor", color: "#8b5cf6" }), currentMember.openToHiring && /* @__PURE__ */ React.createElement(Badge, { label: "Hiring", color: "#22c55e" }), currentMember.openToFundraising && /* @__PURE__ */ React.createElement(Badge, { label: "Fundraising", color: GOLD }))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right" } }, /* @__PURE__ */ React.createElement(Badge, { label: currentMember.status, color: statusColor(currentMember.status) }), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 14, fontSize: 11, color: "#9ca3af" } }, "Total Donated"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 22, fontWeight: 700, color: GOLD, fontFamily: "var(--font-sans)" } }, "EGP ", fmt(currentMember.donationTotal)))), /* @__PURE__ */ React.createElement("div", { className: "tab-bar ui-tabs", role: "tablist" }, [["feed", "Feed"], ["deals", "Deals"], ["careers", "Careers"], ["profile", "My Profile"], ["events", "Events"], ["network", "Network"], ["perks", "Perks"], ["mail", "DEO Mail"], ["donate", "Donate"]].map(([k, label]) => /* @__PURE__ */ React.createElement("button", { key: k, onClick: () => {
      setTab(k);
      setEditing(false);
      if (k === "careers") loadCandidateProfile();
    }, type: "button", role: "tab", "aria-selected": tab === k, className: "ui-tab" + (tab === k ? " is-active" : "") }, label, k === "mail" && messages.filter((m) => m.receiverId === currentMember.id && !m.readAt).length > 0 && React.createElement("span", { className: "ui-count ui-count--tab" }, messages.filter((m) => m.receiverId === currentMember.id && !m.readAt).length)))), tab === "feed" && React.createElement(NewsfeedTab, { currentMember, feedItems, setFeedItems, posts, setPosts, jobs, setJobs, opportunities, setOpportunities, deals, setDeals, dealBids, setDealBids, allMembers, events: allEvents, donationProjects, onViewProfile: (m) => { setTab("network"); setViewingMember(m); }, onRefresh }), tab === "deals" && React.createElement(DealRoomTab, { currentMember, deals, setDeals, dealBids, setDealBids, allMembers }), tab === "careers" && React.createElement(JobsBoard, { currentMember, jobs, setJobs, candidateProfile, allMembers, onEditCandidateProfile: () => setShowCandidateModal(true) }), showCandidateModal && React.createElement(CandidateProfileModal, { currentMember, existingProfile: candidateProfile, onClose: () => setShowCandidateModal(false), onSaved: (p) => { setCandidateProfile(p); setShowCandidateModal(false); } }), tab === "profile" && /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "28px" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 16, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, "My Profile"), /* @__PURE__ */ React.createElement(Btn, { variant: editing ? "primary" : "secondary", onClick: () => editing ? saveProfile() : setEditing(true) }, editing ? "Save Profile" : "Edit Profile")), editing ? /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18 } }, /* @__PURE__ */ React.createElement(PhotoUpload, { value: form.photo, onChange: set("photo") }), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement(Input, { label: "First Name", value: form.firstName, onChange: set("firstName") }), /* @__PURE__ */ React.createElement(Input, { label: "Last Name", value: form.lastName, onChange: set("lastName") }), /* @__PURE__ */ React.createElement(Input, { label: "Phone", value: form.phone, onChange: set("phone") }), /* @__PURE__ */ React.createElement(Input, { label: "LinkedIn", value: form.linkedin, onChange: set("linkedin") }), /* @__PURE__ */ React.createElement(Input, { label: "Website", value: form.website, onChange: set("website") }), /* @__PURE__ */ React.createElement(Select, { label: "Country", value: form.country, onChange: set("country"), options: ["", ...COUNTRY_OPTIONS] }), /* @__PURE__ */ React.createElement("div", { style: { gridColumn: "1/-1" } }, /* @__PURE__ */ React.createElement(RolesInput, { roles: form.roles || [], primaryRole: form.primaryRole || "", onChange: ({ roles, primaryRole }) => setForm((f) => ({ ...f, roles, primaryRole, role: primaryRole })) }))), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Companies", value: form.companies, onChange: set("companies"), options: [] }), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Industries", value: form.industries, onChange: set("industries"), options: INDUSTRY_OPTIONS }), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Regions", value: form.regions, onChange: set("regions"), options: REGION_OPTIONS }), /* @__PURE__ */ React.createElement(MultiSelect, { label: "Expertise", value: form.expertise, onChange: set("expertise"), options: EXPERTISE_OPTIONS }), /* @__PURE__ */ React.createElement(Textarea, { label: "Personal Bio", value: form.bio, onChange: set("bio"), rows: 4 }), /* @__PURE__ */ React.createElement("div", { style: { borderTop: `1px solid ${BORDER}`, paddingTop: 14 } }, /* @__PURE__ */ React.createElement(Toggle, { label: "Willing to Mentor", value: form.willingToMentor, onChange: set("willingToMentor") }), /* @__PURE__ */ React.createElement(Toggle, { label: "Open to Fundraising", value: form.openToFundraising, onChange: set("openToFundraising") }), /* @__PURE__ */ React.createElement(Toggle, { label: "Open to Hiring", value: form.openToHiring, onChange: set("openToHiring") })), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end" } }, /* @__PURE__ */ React.createElement(Btn, { variant: "ghost", onClick: () => setEditing(false) }, "Cancel"), /* @__PURE__ */ React.createElement(Btn, { onClick: saveProfile }, "Save Profile"))) : /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 18 } }, currentMember.bio && /* @__PURE__ */ React.createElement("div", { style: { background: "#fafaf8", borderRadius: 10, padding: "14px 16px", fontSize: 14, color: "#374151", lineHeight: 1.7 } }, currentMember.bio), /* @__PURE__ */ React.createElement("div", { className: "form-grid-2", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, [["Email", currentMember.email], ["Phone", currentMember.phone], ["LinkedIn", currentMember.linkedin], ["Website", currentMember.website], ["Gender", currentMember.gender], ["Country", currentMember.country]].map(([l, v]) => v && /* @__PURE__ */ React.createElement("div", { key: l }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 3 } }, l), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: DARK } }, v)))), ((_a = currentMember.companies) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Companies"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, currentMember.companies.map((c) => /* @__PURE__ */ React.createElement(Tag, { key: c, label: c })))), ((_b = currentMember.industries) == null ? void 0 : _b.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Industries"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, currentMember.industries.map((i) => /* @__PURE__ */ React.createElement(Tag, { key: i, label: i })))), ((_c = currentMember.regions) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Active Regions"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, currentMember.regions.map((r) => /* @__PURE__ */ React.createElement(Tag, { key: r, label: r })))), ((_d = currentMember.expertise) == null ? void 0 : _d.length) > 0 && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 6 } }, "Expertise"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexWrap: "wrap", gap: 6 } }, currentMember.expertise.map((e) => /* @__PURE__ */ React.createElement(Tag, { key: e, label: e })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 10, color: "#9ca3af", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: 8 } }, "Donation History"), (currentMember.donationHistory || []).length === 0 ? /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#9ca3af" } }, "No donations yet.") : currentMember.donationHistory.map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid #f5f5f5` } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#374151" } }, d.project || "General", " · ", d.year), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, fontWeight: 700, color: GOLD_TEXT } }, "EGP ", fmt(d.amount))))))), tab === "events" && /* @__PURE__ */ React.createElement(MemberEvents, { events: allEvents, currentMember, onRegister, myRegistrations }), tab === "network" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: "1px solid #e7e4e0", padding: "22px", order: 2, flexShrink: 0, width: 280 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 4 } }, "Suggested Connections"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#9ca3af", marginBottom: 18 } }, "Based on your industry and expertise"), suggested.length === 0 && /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 14 } }, "No suggestions available yet."), suggested.map(function(m) { var extraTags = Math.max(0, (m.expertise || []).length - 4); return /* @__PURE__ */ React.createElement("div", { key: m.id, style: { padding: "14px 0", borderBottom: "1px solid #f6f5f3" } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { onClick: function() { setViewingMember(m); }, style: { cursor: "pointer", flexShrink: 0 } }, /* @__PURE__ */ React.createElement(Avatar, { member: m, size: 36 })), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 5, marginBottom: 3 } }, /* @__PURE__ */ React.createElement("div", { onClick: function() { setViewingMember(m); }, style: { fontWeight: 600, color: DARK, fontSize: 13, cursor: "pointer", flex: 1, minWidth: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, m.firstName, " ", m.lastName), /* @__PURE__ */ React.createElement(LinkedInIcon, { url: m.linkedin, size: 20 }), /* @__PURE__ */ React.createElement("button", { onClick: function() { setTab("mail"); setDeoMailTo(m); }, style: { background: DARK, border: "none", borderRadius: 6, padding: "3px 8px", cursor: "pointer", color: GOLD, fontSize: 12, flexShrink: 0 } }, "✉️")), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 11 } }, m.role))), (m.expertise || []).length > 0 && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 4, marginTop: 8, flexWrap: "wrap", alignItems: "center" } }, (m.expertise || []).slice(0, 4).map(function(e) { return /* @__PURE__ */ React.createElement(Tag, { key: e, label: e }); }), extraTags > 0 && /* @__PURE__ */ React.createElement("span", { style: { fontSize: 10, color: "#9ca3af" } }, "+" + extraTags + " more"))); })), /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: "1px solid #e7e4e0", padding: "22px", order: 1, flex: 1, minWidth: 0 } },
  /* header row */
  React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 } },
    React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK } }, "Member Directory"),
    React.createElement("span", { style: { fontSize: 12, color: "#9ca3af" } }, filteredDir.length, " member", filteredDir.length !== 1 ? "s" : "")
  ),
  /* search bar */
  React.createElement("div", { style: { position: "relative", marginBottom: 12 } },
    React.createElement("span", { style: { position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", fontSize: 14 } }, "🔍"),
    React.createElement("input", { value: netQ, onChange: (e) => setNetQ(e.target.value), placeholder: "Search by name, role, company, expertise…", style: { width: "100%", padding: "9px 12px 9px 34px", border: "1px solid #e5e7eb", borderRadius: 10, fontSize: 13, outline: "none", boxSizing: "border-box" } })
  ),
  /* filter dropdowns */
  React.createElement("div", { style: { display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" } },
    React.createElement("select", { value: netCountry, onChange: (e) => setNetCountry(e.target.value), style: { flex: 1, minWidth: 120, padding: "7px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, background: netCountry ? DARK : "#fff", color: netCountry ? GOLD : "#6b7280", cursor: "pointer" } },
      React.createElement("option", { value: "" }, "All Countries"),
      COUNTRY_OPTIONS.map((c) => React.createElement("option", { key: c, value: c }, c))
    ),
    React.createElement("select", { value: netIndustry, onChange: (e) => setNetIndustry(e.target.value), style: { flex: 1, minWidth: 120, padding: "7px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, background: netIndustry ? DARK : "#fff", color: netIndustry ? GOLD : "#6b7280", cursor: "pointer" } },
      React.createElement("option", { value: "" }, "All Industries"),
      INDUSTRY_OPTIONS.map((i) => React.createElement("option", { key: i, value: i }, i))
    ),
    React.createElement("select", { value: netExpertise, onChange: (e) => setNetExpertise(e.target.value), style: { flex: 1, minWidth: 120, padding: "7px 10px", border: "1px solid #e5e7eb", borderRadius: 8, fontSize: 12, background: netExpertise ? DARK : "#fff", color: netExpertise ? GOLD : "#6b7280", cursor: "pointer" } },
      React.createElement("option", { value: "" }, "All Expertise"),
      EXPERTISE_OPTIONS.map((e) => React.createElement("option", { key: e, value: e }, e))
    )
  ),
  /* badge chips */
  React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" } },
    [["", "Everyone"], ["mentor", "🎓 Mentor"], ["hiring", "💼 Hiring"], ["fundraising", "🤝 Fundraising"]].map(([val, label]) =>
      React.createElement("button", { key: val, onClick: () => setNetBadge(val), style: { padding: "5px 12px", border: `1px solid ${netBadge === val ? DARK : "#e5e7eb"}`, borderRadius: 20, fontSize: 12, cursor: "pointer", background: netBadge === val ? DARK : "#fff", color: netBadge === val ? GOLD : "#6b7280", fontWeight: netBadge === val ? 700 : 400, transition: "all 0.15s" } }, label)
    )
  ),
  /* results */
  filteredDir.length === 0 && React.createElement("div", { style: { padding: "28px 0", textAlign: "center", color: "#9ca3af", fontSize: 13 } }, "No members match your filters."),
  filteredDir.map(function(m) { return /* @__PURE__ */ React.createElement("div", { key: m.id, onClick: function() { setViewingMember(m); }, style: { display: "flex", alignItems: "center", padding: "13px 0", borderBottom: "1px solid #f6f5f3", cursor: "pointer", gap: 12 } }, /* @__PURE__ */ React.createElement(Avatar, { member: m, size: 42 }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 3, flexWrap: "wrap" } }, /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 600, color: DARK, fontSize: 14 } }, m.firstName, " ", m.lastName), m.willingToMentor && /* @__PURE__ */ React.createElement(Badge, { label: "Mentor", color: "#8b5cf6" }), m.openToHiring && /* @__PURE__ */ React.createElement(Badge, { label: "Hiring", color: "#22c55e" }), m.openToFundraising && /* @__PURE__ */ React.createElement(Badge, { label: "Fundraising", color: GOLD })), /* @__PURE__ */ React.createElement("div", { style: { color: "#9ca3af", fontSize: 12 } }, m.role || (m.industries || []).join(", "), " · ", m.country)), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", flexShrink: 0 }, onClick: function(e) { e.stopPropagation(); } }, /* @__PURE__ */ React.createElement(LinkedInIcon, { url: m.linkedin, size: 26 }), /* @__PURE__ */ React.createElement(Btn, { small: true, variant: "secondary", onClick: function() { setTab("mail"); setDeoMailTo(m); } }, "✉️ DEO Mail"))); })
), viewingMember && /* @__PURE__ */ React.createElement(MemberProfileModal, { member: viewingMember, onClose: function() { return setViewingMember(null); } })), tab === "perks" && React.createElement("div", null,
      React.createElement("div", { className: "ui-seg" },
        [["marketplace", "🛍 Marketplace"], ["my-perks", "🔖 My Perks"]].map(function(_ref) {
          var k = _ref[0]; var lbl = _ref[1];
          return React.createElement("button", { key: k, onClick: function() { setPerksView(k); }, type: "button", className: "ui-seg-btn" + (perksView === k ? " is-active" : "") }, lbl);
        })
      ),
      perksView === "marketplace" && React.createElement(PerksMarketplace, { perks: perks || [], currentMember: currentMember, memberPerks: memberPerks || [], setMemberPerks: setMemberPerks, setPerks: function() {} }),
      perksView === "my-perks" && React.createElement(MyPerks, { perks: perks || [], memberPerks: memberPerks || [], setMemberPerks: setMemberPerks, currentMember: currentMember, setPerks: function() {} })
    ), tab === "mail" && React.createElement(DeoMail, { currentMember, allMembers, messages, setMessages, mailTo: deoMailTo, setMailTo: setDeoMailTo }), tab === "donate" && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } },
      /* Header */
      /* @__PURE__ */ React.createElement("div", { style: { background: DARK, borderRadius: 12, padding: "28px 32px", color: "#fff", textAlign: "center" } },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36, marginBottom: 10 } }, "🏫"),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 24, fontWeight: 700, fontFamily: "var(--font-sans)", marginBottom: 8 } }, "Support DEO"),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 14, color: "#9ca3af", maxWidth: 420, margin: "0 auto", lineHeight: 1.7 } }, "Your donation supports scholarships, school infrastructure, and the next generation of DEO students."),
        currentMember.donationTotal > 0 && /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16 } },
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 11, color: "#9ca3af", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: 4 } }, "Your Lifetime Contribution"),
          /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, fontWeight: 700, color: GOLD, fontFamily: "var(--font-sans)" } }, "EGP ", fmt(currentMember.donationTotal)))),
      /* Project Cards */
      /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 12, border: `1px solid ${BORDER}`, padding: "24px" } },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK, marginBottom: 16, fontFamily: "var(--font-sans)" } }, "Choose a Project"),
        /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 14 } },
          _activeDonProjects.map(function(proj, idx) {
            var _icons = ["🎓","🏗","🔬","🤝","🌍","📚","🎯","💡"];
            var _isSel = donateProject === (proj.id || proj.name);
            var _raised = _donTotals[proj.name] || 0;
            var _goal = parseFloat(proj.goal_amount) || 0;
            var _pct = _goal > 0 ? Math.min(100, Math.round(_raised / _goal * 100)) : null;
            return /* @__PURE__ */ React.createElement("div", { key: proj.id || idx, onClick: function() { setDonateProject(proj.id || proj.name); }, style: { background: _isSel ? "#fff6ec" : "#fafaf8", borderRadius: 12, padding: "18px", cursor: "pointer", border: `2px solid ${_isSel ? GOLD : "#fdf0e1"}`, boxShadow: _isSel ? `0 0 0 3px ${GOLD}22` : "none", transition: "all 0.15s" } },
              /* @__PURE__ */ React.createElement("div", { style: { fontSize: 28, marginBottom: 10 } }, _icons[idx % _icons.length]),
              /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, color: DARK, fontSize: 14, marginBottom: 6 } }, proj.name),
              proj.description && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#6b7280", lineHeight: 1.6, marginBottom: 10 } }, proj.description.length > 80 ? proj.description.slice(0, 80) + "…" : proj.description),
              _pct !== null && /* @__PURE__ */ React.createElement("div", null,
                /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", fontSize: 11, color: "#9ca3af", marginBottom: 4 } },
                  /* @__PURE__ */ React.createElement("span", null, "EGP ", fmt(_raised)),
                  /* @__PURE__ */ React.createElement("span", null, _pct, "% of EGP ", fmt(_goal))),
                /* @__PURE__ */ React.createElement("div", { style: { height: 4, background: "#fdf0e1", borderRadius: 2, overflow: "hidden" } },
                  /* @__PURE__ */ React.createElement("div", { style: { width: `${_pct}%`, height: "100%", background: _pct >= 100 ? "#22c55e" : GOLD, borderRadius: 2 } }))));
          }))),
      /* InstaPay */
      /* @__PURE__ */ React.createElement("div", { style: { background: "#fafaf8", borderRadius: 14, padding: "28px", border: `1px solid ${BORDER}`, textAlign: "center" } },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 15, fontWeight: 700, color: DARK, marginBottom: donateProject ? 10 : 14 } }, "Pay via InstaPay"),
        donateProject && /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, background: GOLD + "20", color: "#9a4a00", borderRadius: 8, padding: "7px 14px", display: "inline-block", marginBottom: 14, fontWeight: 600 } },
          "Project: ", (_activeDonProjects.find(function(p) { return (p.id || p.name) === donateProject; }) || {}).name || donateProject),
        /* @__PURE__ */ React.createElement("div", { style: { width: 160, height: 160, margin: "0 auto 16px", background: "#fff", border: "2px solid #e5e7eb", borderRadius: 10, overflow: "hidden" } },
          /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(8,1fr)", gap: 2, padding: 8, width: "100%", height: "100%" } },
            Array.from({ length: 64 }).map(function(_, i) { return /* @__PURE__ */ React.createElement("div", { key: i, style: { background: [0,1,2,3,7,8,15,16,23,24,25,26,27,31,32,39,40,41,42,43,47,48,56,57,58,59,60,63,10,11,12,18,19,21,29,33,37,44,50,52,53].includes(i) ? "#1a1a1a" : "transparent", borderRadius: 1 } }); }))),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: DARK, marginBottom: 4 } }, "InstaPay handle: ", /* @__PURE__ */ React.createElement("strong", null, "@DEOLeaders")),
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#6b7280", marginBottom: 14 } }, "Account number: ", /* @__PURE__ */ React.createElement("strong", null, "1234567890"), " · Banque Misr"),
        /* @__PURE__ */ React.createElement("button", { onClick: function() { var _a2; return (_a2 = navigator.clipboard) == null ? void 0 : _a2.writeText("@DEOLeaders"); }, style: { padding: "8px 20px", background: DARK, color: GOLD, border: "none", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer" } }, "Copy Handle")),
      /* Coming soon */
      /* @__PURE__ */ React.createElement("div", { style: { textAlign: "center" } },
        /* @__PURE__ */ React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", background: "#fafaf8", borderRadius: 8, padding: "10px 16px", display: "inline-block" } }, "💳 Online payment gateway — ", /* @__PURE__ */ React.createElement("strong", null, "coming soon")))));
  };
  var TopNav = ({ view, isAdmin, onSwitchToMember, onSwitchToAdmin, onLogout, lang, setLang }) => React.createElement("header", { className: "topnav-wrap ui-topnav" },
    React.createElement("button", { type: "button", className: "ui-topnav-brand", onClick: () => window.dispatchEvent(new CustomEvent("deo-nav-landing")), title: "DEO Leaders" }, React.createElement("img", { src: DEO_LEADERS_LOGO_VW, alt: "DEO Leaders", style: { height: 34, objectFit: "contain", filter: "brightness(0) invert(1)", display: "block" } })),
    React.createElement("span", { className: "ui-topnav-sep", "aria-hidden": "true" }),
    React.createElement("span", { className: "ui-topnav-context" }, view === "admin" ? "Admin CRM" : "Member Portal"),
    React.createElement("div", { style: { flex: 1 } }),
    React.createElement("button", { type: "button", className: "ui-topnav-btn ui-topnav-lang", onClick: () => setLang(lang === "en" ? "de" : "en"), title: lang === "en" ? "Deutsch" : "English" }, lang === "en" ? "DE" : "EN"),
    view === "admin" && React.createElement("button", { type: "button", className: "ui-topnav-btn ui-topnav-btn--accent", onClick: onSwitchToMember }, "Member Portal ↗"),
    view !== "admin" && isAdmin && React.createElement("button", { type: "button", className: "ui-topnav-btn ui-topnav-btn--accent", onClick: onSwitchToAdmin }, "Admin View ↗"),
    React.createElement("button", { type: "button", className: "ui-topnav-btn", onClick: onLogout }, "Sign Out"));
  // ── Newsfeed: helpers + components ────────────────────────────────────────

  var relTime = (d) => {
    if (!d) return "";
    const diff = Date.now() - new Date(d).getTime();
    const m = Math.floor(diff / 6e4);
    if (m < 1) return "just now";
    if (m < 60) return m + "m ago";
    const h = Math.floor(m / 60);
    if (h < 24) return h + "h ago";
    const dy = Math.floor(h / 24);
    if (dy < 7) return dy + "d ago";
    return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  };

  var FEED_TYPE_CFG = {
    post:                     { label: "Post",               color: "#3b82f6" },
    job:                      { label: "Job",                color: "#22c55e" },
    investment_opportunity:   { label: "Investment Opp.",    color: "#8b5cf6" },
    member_joined:            { label: "New Member",         color: "#f7911d" },
    event_created:            { label: "New Event",          color: "#f59e0b" },
    donation_project_created: { label: "Donation Project",   color: "#ec4899" },
    company_created:          { label: "New Company",        color: "#14b8a6" },
    deal_posted:              { label: "New Deal",           color: "#f7911d" }
  };

  var FeedTypeBadge = ({ type }) => {
    const c = FEED_TYPE_CFG[type] || { label: type, color: "#6b7280" };
    return React.createElement("span", {
      style: {
        display: "inline-block", padding: "2px 9px", borderRadius: 20,
        fontSize: 10, fontWeight: 700, letterSpacing: "0.6px", textTransform: "uppercase",
        color: c.color, background: c.color + "18", border: "1px solid " + c.color + "30"
      }
    }, c.label);
  };

  // ── CreatePostModal ────────────────────────────────────────────────────────
  var CreatePostModal = ({ currentMember, onClose, onCreated }) => {
    const [text, setText] = useState("");
    const [imageData, setImageData] = useState(null);
    const [pdfData, setPdfData] = useState(null);
    const [pdfName, setPdfName] = useState(null);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");

    const pickImage = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) { setErr("Image must be under 5 MB."); return; }
      const reader = new FileReader();
      reader.onload = (ev) => setImageData(ev.target.result);
      reader.readAsDataURL(file);
    };

    const pickPdf = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 10 * 1024 * 1024) { setErr("PDF must be under 10 MB."); return; }
      const reader = new FileReader();
      reader.onload = (ev) => { setPdfData(ev.target.result); setPdfName(file.name); };
      reader.readAsDataURL(file);
    };

    const submit = async () => {
      if (!text.trim() && !imageData && !pdfData) { setErr("Add some content before posting."); return; }
      setBusy(true); setErr("");
      try {
        let postRows = await db.insert("posts", {
          author_member_id: currentMember.id,
          text_content: text.trim() || null,
          image_data: imageData || null,
          pdf_data: pdfData || null,
          pdf_name: pdfName || null
        });
        if (!postRows || !postRows[0]) postRows = await db.select("posts", "?order=created_at.desc&limit=1");
        const post = postRows[0];
        let fiRows = await db.insert("feed_items", {
          feed_type: "post", source_type: "posts", source_id: post.id,
          author_member_id: currentMember.id, system_label: null
        });
        if (!fiRows || !fiRows[0]) fiRows = await db.select("feed_items", "?order=created_at.desc&limit=1");
        onCreated(post, fiRows[0]);
        onClose();
      } catch (e) { setErr(e.message); }
      setBusy(false);
    };

    const attachBtnStyle = (active) => ({
      display: "flex", alignItems: "center", gap: 7, padding: "8px 14px",
      borderRadius: 8, border: "1px solid #e5e7eb", cursor: "pointer",
      fontSize: 13, color: "#374151", background: active ? "#f0fdf4" : "#fff",
      fontFamily: "inherit", transition: "all 0.15s"
    });

    return React.createElement(Modal, { onClose },
      React.createElement("div", { className: "modal-body", style: { padding: 28, maxWidth: 520 } },
        React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 20 } }, "Create a Post"),
        React.createElement("textarea", {
          value: text, onChange: (e) => setText(e.target.value),
          placeholder: "Share an update, insight, or announcement with the DEO Leaders community…",
          rows: 5,
          style: { width: "100%", padding: "12px 14px", borderRadius: 10, border: "1px solid #e5e7eb", fontSize: 14, fontFamily: "inherit", resize: "vertical", outline: "none", boxSizing: "border-box", color: DARK, lineHeight: 1.6 }
        }),
        React.createElement("div", { className: "modal-attach-row", style: { display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" } },
          React.createElement("label", { style: attachBtnStyle(!!imageData) },
            "🖼 ", imageData ? "Image attached" : "Add Image",
            React.createElement("input", { type: "file", accept: "image/*", onChange: pickImage, style: { display: "none" } })
          ),
          React.createElement("label", { style: attachBtnStyle(!!pdfData) },
            "📄 ", pdfName || "Attach PDF",
            React.createElement("input", { type: "file", accept: ".pdf,application/pdf", onChange: pickPdf, style: { display: "none" } })
          ),
          imageData && React.createElement("button", { onClick: () => setImageData(null), style: { padding: "8px 10px", border: "none", borderRadius: 8, background: "#fee2e2", color: "#dc2626", cursor: "pointer", fontSize: 12 } }, "✕ Remove image"),
          pdfData && React.createElement("button", { onClick: () => { setPdfData(null); setPdfName(null); }, style: { padding: "8px 10px", border: "none", borderRadius: 8, background: "#fee2e2", color: "#dc2626", cursor: "pointer", fontSize: 12 } }, "✕ Remove PDF")
        ),
        imageData && React.createElement("img", { src: imageData, style: { width: "100%", borderRadius: 10, marginTop: 12, maxHeight: 220, objectFit: "cover" } }),
        err && React.createElement("div", { style: { marginTop: 10, color: "#dc2626", fontSize: 13 } }, err),
        React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 } },
          React.createElement(Btn, { variant: "ghost", onClick: onClose }, "Cancel"),
          React.createElement(Btn, { onClick: submit, disabled: busy }, busy ? "Posting…" : "Post")
        )
      )
    );
  };

  // ── CreateJobModal ─────────────────────────────────────────────────────────
  // ── JobPostModal — premium multi-section job posting form ─────────────────
  var JobPostModal = ({ currentMember, onClose, onCreated, existingJob = null }) => {
    const emptyForm = { title: "", company: (currentMember.companies||[])[0]||"", contactName: "", location: "", locationCountry: "", workMode: "hybrid", employmentType: "Full-time", seniorityLevel: "", department: "", industry: (currentMember.industries||[])[0]||"", summary: "", description: "", responsibilities: "", requirements: "", preferredExperience: "", skills: [], salaryRange: "", applicationDeadline: "", applicationEmail: currentMember.email||"", status: "open" };
    const [form, setForm] = useState(existingJob ? { ...emptyForm, title: existingJob.title||"", company: existingJob.company||"", contactName: existingJob.contactName||"", location: existingJob.location||"", locationCountry: existingJob.locationCountry||"", workMode: existingJob.workMode||"hybrid", employmentType: existingJob.employmentType||"Full-time", seniorityLevel: existingJob.seniorityLevel||"", department: existingJob.department||"", industry: existingJob.industry||"", summary: existingJob.summary||"", description: existingJob.description||"", responsibilities: existingJob.responsibilities||"", requirements: existingJob.requirements||"", preferredExperience: existingJob.preferredExperience||"", skills: existingJob.skills||[], salaryRange: existingJob.salaryRange||"", applicationDeadline: existingJob.applicationDeadline||"", applicationEmail: existingJob.applicationEmail||"", status: existingJob.status||"open" } : emptyForm);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const [step, setStep] = useState(0);
    const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));
    const isEdit = !!existingJob;

    const submit = async () => {
      if (!form.title.trim()) { setErr("Job title is required."); setStep(0); return; }
      if (!form.company.trim()) { setErr("Company name is required."); setStep(0); return; }
      setBusy(true); setErr("");
      try {
        const row = { ...jobToRow(form), created_by: currentMember.id };
        if (isEdit) {
          await db.update("jobs", existingJob.id, jobToRow(form));
          onCreated({ ...existingJob, ...form }, null);
        } else {
          let rows = await db.insert("jobs", row);
          if (!rows || !rows[0]) rows = await db.select("jobs", "?order=created_at.desc&limit=1");
          const job = rows[0];
          let fiRows = await db.insert("feed_items", { feed_type: "job", source_type: "jobs", source_id: job.id, author_member_id: currentMember.id, system_label: null });
          if (!fiRows || !fiRows[0]) fiRows = await db.select("feed_items", "?order=created_at.desc&limit=1");
          onCreated(rowToJob(job), fiRows[0]);
        }
        onClose();
      } catch (e) { setErr(e.message); }
      setBusy(false);
    };

    const sectionLabel = (t) => React.createElement("div", { style: { fontSize: 11, fontWeight: 700, color: GOLD, textTransform: "uppercase", letterSpacing: "1px", margin: "20px 0 12px", borderTop: `1px solid ${BORDER}`, paddingTop: 16 } }, t);
    const g2 = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 };
    const steps = ["Role", "Details", "Requirements", "Application"];

    return React.createElement("div", { style: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 20, backdropFilter: "blur(4px)" }, onClick: onClose },
      React.createElement("div", { style: { background: "#fff", borderRadius: 18, width: "100%", maxWidth: 720, maxHeight: "94vh", overflow: "hidden", display: "flex", flexDirection: "column" }, onClick: (e) => e.stopPropagation() },
        // Header
        React.createElement("div", { style: { padding: "22px 28px 0", borderBottom: `1px solid ${BORDER}` } },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 } },
            React.createElement("div", null,
              React.createElement("div", { style: { fontSize: 20, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, isEdit ? "Edit Job Posting" : "Post a Job"),
              React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 3 } }, "Visible to all DEO Leaders members")
            ),
            React.createElement("button", { onClick: onClose, style: { background: "#f5f3ef", border: "none", width: 32, height: 32, borderRadius: 8, cursor: "pointer", fontSize: 16, color: "#6b7280" } }, "✕")
          ),
          React.createElement("div", { style: { display: "flex", gap: 0, marginBottom: -1 } },
            steps.map((s, i) => React.createElement("button", { key: s, onClick: () => setStep(i), style: { padding: "8px 18px", border: "none", borderBottom: step === i ? `2px solid ${GOLD}` : "2px solid transparent", background: "none", fontWeight: step === i ? 700 : 400, color: step === i ? GOLD : "#9ca3af", cursor: "pointer", fontSize: 13, transition: "all 0.15s" } }, s))
          )
        ),
        // Body
        React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "20px 28px" } },
          step === 0 && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
            React.createElement("div", { style: g2 },
              React.createElement(Input, { label: "Job Title *", value: form.title, onChange: set("title"), placeholder: "e.g. Head of Product, Software Engineer" }),
              React.createElement(Input, { label: "Hiring Company *", value: form.company, onChange: set("company"), placeholder: "Company or organisation" })
            ),
            React.createElement("div", { style: g2 },
              React.createElement(Input, { label: "Hiring Contact Name", value: form.contactName, onChange: set("contactName"), placeholder: "e.g. Sarah Hassan (optional)" }),
              React.createElement(Select, { label: "Employment Type", value: form.employmentType, onChange: set("employmentType"), options: EMPLOYMENT_TYPE_OPTIONS })
            ),
            React.createElement("div", { style: g2 },
              React.createElement(Select, { label: "Seniority Level", value: form.seniorityLevel, onChange: set("seniorityLevel"), options: ["", ...SENIORITY_OPTIONS] }),
              React.createElement(Select, { label: "Department / Function", value: form.department, onChange: set("department"), options: ["", ...JOB_FUNCTION_OPTIONS] })
            ),
            React.createElement("div", { style: g2 },
              React.createElement(Select, { label: "Industry", value: form.industry, onChange: set("industry"), options: ["", ...INDUSTRY_OPTIONS] }),
              React.createElement(Select, { label: "Status", value: form.status, onChange: set("status"), options: ["open", "closed"] })
            ),
            React.createElement(Textarea, { label: "Short Summary", value: form.summary, onChange: set("summary"), rows: 2, placeholder: "One or two sentences summarising the opportunity…" })
          ),
          step === 1 && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
            React.createElement("div", { style: g2 },
              React.createElement(Input, { label: "City / Location", value: form.location, onChange: set("location"), placeholder: "e.g. Cairo, Dubai, London" }),
              React.createElement(Select, { label: "Country", value: form.locationCountry, onChange: set("locationCountry"), options: ["", ...ALL_COUNTRY_OPTIONS] })
            ),
            React.createElement("div", { style: g2 },
              React.createElement(Select, { label: "Work Mode", value: form.workMode, onChange: set("workMode"), options: WORK_MODE_OPTIONS }),
              React.createElement(Input, { label: "Salary Range (optional)", value: form.salaryRange, onChange: set("salaryRange"), placeholder: "e.g. $80k–$120k / EGP 30k–50k /mo" })
            ),
            React.createElement(Textarea, { label: "Full Job Description", value: form.description, onChange: set("description"), rows: 5, placeholder: "Describe the role, the team, and what makes this opportunity exciting…" }),
            React.createElement(Textarea, { label: "Key Responsibilities", value: form.responsibilities, onChange: set("responsibilities"), rows: 4, placeholder: "• Lead product roadmap\n• Manage cross-functional teams\n• Drive go-to-market execution…" })
          ),
          step === 2 && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
            React.createElement(Textarea, { label: "Requirements & Qualifications", value: form.requirements, onChange: set("requirements"), rows: 4, placeholder: "• 5+ years in a similar role\n• Strong analytical skills\n• Fluent English required…" }),
            React.createElement(Textarea, { label: "Preferred Experience (optional)", value: form.preferredExperience, onChange: set("preferredExperience"), rows: 3, placeholder: "Nice-to-have skills or background…" }),
            React.createElement(MultiSelect, { label: "Skills & Tags", value: form.skills, onChange: set("skills"), options: SKILLS_OPTIONS })
          ),
          step === 3 && React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } },
            React.createElement(Input, { label: "Application / Contact Email", value: form.applicationEmail, onChange: set("applicationEmail"), placeholder: "Where should applicants send their CVs?" }),
            React.createElement(Input, { label: "Application Deadline (optional)", type: "date", value: form.applicationDeadline, onChange: set("applicationDeadline") }),
            React.createElement("div", { style: { background: "#faf9f7", borderRadius: 10, padding: "14px 16px", fontSize: 13, color: "#6b7280", lineHeight: 1.6 } },
              React.createElement("div", { style: { fontWeight: 600, color: DARK, marginBottom: 4 } }, "💡 How applications work"),
              "DEO members can apply directly through the platform. When someone applies, you'll receive a DEO Mail message with their full profile and a note. You can also receive applications via the email above."
            )
          ),
          err && React.createElement("div", { style: { color: "#dc2626", fontSize: 13, marginTop: 8, padding: "10px 14px", background: "#fef2f2", borderRadius: 8 } }, err)
        ),
        // Footer
        React.createElement("div", { style: { padding: "16px 28px", borderTop: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center" } },
          React.createElement("div", { style: { display: "flex", gap: 6 } },
            steps.map((_, i) => React.createElement("div", { key: i, style: { width: 7, height: 7, borderRadius: "50%", background: step === i ? GOLD : "#e5e7eb", cursor: "pointer", transition: "background 0.2s" }, onClick: () => setStep(i) }))
          ),
          React.createElement("div", { style: { display: "flex", gap: 10 } },
            step > 0 && React.createElement(Btn, { variant: "ghost", onClick: () => setStep(step - 1) }, "← Back"),
            step < steps.length - 1
              ? React.createElement(Btn, { onClick: () => setStep(step + 1) }, "Next →")
              : React.createElement(Btn, { onClick: submit, disabled: busy }, busy ? "Posting…" : (isEdit ? "Save Changes" : "Post Job"))
          )
        )
      )
    );
  };
  // Keep backward-compat alias so any remaining references still work
  var CreateJobModal = JobPostModal;

  // ── CreateInvestmentModal ──────────────────────────────────────────────────
  var CreateInvestmentModal = ({ currentMember, onClose, onCreated }) => {
    const [form, setForm] = useState({ title: "", company_name: "", summary: "", stage: "Seed", location: "" });
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));

    const submit = async () => {
      if (!form.title.trim()) { setErr("Opportunity title is required."); return; }
      setBusy(true); setErr("");
      try {
        let rows = await db.insert("investment_opportunities", {
          title: form.title.trim(), company_name: form.company_name || null,
          summary: form.summary || null, stage: form.stage || null,
          location: form.location || null, created_by: currentMember.id
        });
        if (!rows || !rows[0]) rows = await db.select("investment_opportunities", "?order=created_at.desc&limit=1");
        const opp = rows[0];
        let fiRows = await db.insert("feed_items", {
          feed_type: "investment_opportunity", source_type: "investment_opportunities",
          source_id: opp.id, author_member_id: currentMember.id, system_label: null
        });
        if (!fiRows || !fiRows[0]) fiRows = await db.select("feed_items", "?order=created_at.desc&limit=1");
        onCreated(opp, fiRows[0]);
        onClose();
      } catch (e) { setErr(e.message); }
      setBusy(false);
    };

    return React.createElement(Modal, { onClose },
      React.createElement("div", { className: "modal-body", style: { padding: 28, maxWidth: 560 } },
        React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 20 } }, "Share an Investment Opportunity"),
        React.createElement("div", { className: "form-2col", style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } },
          React.createElement(Input, { label: "Opportunity Title *", value: form.title, onChange: set("title"), placeholder: "e.g. Series A in CleanTech startup" }),
          React.createElement(Input, { label: "Company / Entity", value: form.company_name, onChange: set("company_name"), placeholder: "Company name" }),
          React.createElement(Select, { label: "Stage", value: form.stage, onChange: set("stage"), options: ["Pre-seed", "Seed", "Series A", "Series B", "Series C+", "Growth", "IPO", "Other"] }),
          React.createElement(Input, { label: "Location", value: form.location, onChange: set("location"), placeholder: "e.g. Cairo / DACH / Remote" })
        ),
        React.createElement("div", { style: { marginTop: 14 } },
          React.createElement(Textarea, { label: "Summary", value: form.summary, onChange: set("summary"), rows: 4, placeholder: "Describe the opportunity, key metrics, and what you are looking for…" })
        ),
        err && React.createElement("div", { style: { color: "#dc2626", fontSize: 13, marginTop: 10 } }, err),
        React.createElement("div", { style: { display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 20 } },
          React.createElement(Btn, { variant: "ghost", onClick: onClose }, "Cancel"),
          React.createElement(Btn, { onClick: submit, disabled: busy }, busy ? "Sharing…" : "Share Opportunity")
        )
      )
    );
  };

  // ── FeedItemCard ───────────────────────────────────────────────────────────
  var FeedItemCard = ({ item, posts, jobs, opportunities, deals, allMembers, events, donationProjects, currentMember, onViewProfile, onDeleteItem, onViewDeal, onViewJob }) => {
    const [expanded, setExpanded] = useState(false);
    const [lightbox, setLightbox] = useState(null);
    const [showComments, setShowComments] = useState(false);
    const isAdmin = currentMember && (currentMember.userRole === "admin" || currentMember.userRole === "super_admin");
    const author = allMembers.find((m) => m.id === item.author_member_id);
    const authorName = author ? (author.firstName + " " + author.lastName) : "DEO Leaders";
    const typeColor = (FEED_TYPE_CFG[item.feed_type] || { color: "#e5e7eb" }).color;
    const cardBase = {
      background: "#fff", borderRadius: 14,
      border: "1px solid " + BORDER, borderLeft: "4px solid " + typeColor,
      padding: "20px 24px", marginBottom: 14
    };

    const authorRow = () => React.createElement("div", { style: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 14, gap: 12 } },
      React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } },
        React.createElement("div", {
          onClick: () => author && onViewProfile && onViewProfile(author),
          style: { flexShrink: 0, cursor: author && onViewProfile ? "pointer" : "default" }
        },
          author
            ? React.createElement(Avatar, { member: author, size: 40 })
            : React.createElement("div", { style: { width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, " + DARK + ", #2a2725)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 } }, "🏛")
        ),
        React.createElement("div", null,
          React.createElement("div", {
            onClick: () => author && onViewProfile && onViewProfile(author),
            style: { fontWeight: 700, fontSize: 14, color: DARK, cursor: author && onViewProfile ? "pointer" : "default" }
          }, authorName),
          author && author.role && React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 1 } }, author.role)
        )
      ),
      React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 5 } },
        React.createElement(FeedTypeBadge, { type: item.feed_type }),
        React.createElement("div", { style: { fontSize: 11, color: "#9ca3af" } }, relTime(item.created_at)),
        (isAdmin || (currentMember && author && currentMember.id === author.id)) && onDeleteItem && React.createElement("button", {
          onClick: () => { if (window.confirm("Delete this post from the feed?")) onDeleteItem(item.id); },
          style: { background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 11, padding: "2px 0", marginTop: 2 }
        }, "🗑 Delete")
      )
    );

    const commentSection = () => React.createElement("div", { style: { borderTop: "1px solid " + BORDER, marginTop: 14, paddingTop: 12 } },
      !showComments
        ? React.createElement("button", {
            onClick: () => setShowComments(true),
            style: { background: "none", border: "none", color: "#6b7280", fontWeight: 600, cursor: "pointer", fontSize: 13, padding: 0 }
          }, "💬 Reply")
        : React.createElement(CommentSection, { feedItemId: item.id, currentMember, allMembers })
    );

    const Lightbox = lightbox ? React.createElement("div", {
      onClick: () => setLightbox(null),
      style: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, cursor: "pointer" }
    },
      React.createElement("img", { src: lightbox, style: { maxWidth: "92vw", maxHeight: "92vh", borderRadius: 12, boxShadow: "0 25px 60px rgba(0,0,0,0.7)" }, onClick: (e) => e.stopPropagation() }),
      React.createElement("div", { style: { position: "absolute", top: 22, right: 22, background: "rgba(255,255,255,0.15)", width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: "#fff", cursor: "pointer" } }, "×")
    ) : null;

    // POST
    if (item.feed_type === "post") {
      const post = posts.find((p) => p.id === item.source_id);
      if (!post) return null;
      const text = post.text_content || "";
      const long = text.length > 300;
      const display = long && !expanded ? text.slice(0, 300) + "…" : text;
      return React.createElement("div", { className: "feed-card", style: cardBase },
        Lightbox,
        authorRow(),
        display && React.createElement("div", { style: { fontSize: 14, color: "#374151", lineHeight: 1.75, whiteSpace: "pre-wrap", wordBreak: "break-word" } }, display),
        long && React.createElement("button", { onClick: () => setExpanded(!expanded), style: { marginTop: 6, background: "none", border: "none", color: GOLD, fontWeight: 600, cursor: "pointer", fontSize: 13, padding: 0 } }, expanded ? "Show less" : "Read more"),
        post.image_data && React.createElement("img", {
          src: post.image_data, onClick: () => setLightbox(post.image_data),
          style: { width: "100%", height: "auto", display: "block", borderRadius: 10, marginTop: 14, cursor: "zoom-in" }
        }),
        post.pdf_name && React.createElement("a", { href: post.pdf_data, download: post.pdf_name, style: { display: "inline-flex", alignItems: "center", gap: 8, marginTop: 12, padding: "8px 14px", background: "#f8f7f5", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 13, color: DARK, textDecoration: "none", fontWeight: 600 } }, "📄 ", post.pdf_name),
        currentMember && commentSection()
      );
    }

    // JOB
    if (item.feed_type === "job") {
      const rawJob = jobs.find((j) => j.id === item.source_id);
      if (!rawJob) return null;
      const job = rawJob.title ? rawJob : rowToJob(rawJob);
      const wm = job.workMode || job.work_mode;
      const et = job.employmentType || job.employment_type;
      const wmColor = { "remote": "#22c55e", "hybrid": "#3b82f6", "on-site": "#f59e0b" }[wm] || "#6b7280";
      return React.createElement("div", { className: "feed-card", style: cardBase },
        authorRow(),
        React.createElement("div", { style: { background: "linear-gradient(135deg,#f0fdf4 0%,#f8fff9 100%)", borderRadius: 12, padding: "18px 20px", border: "1px solid #d1fae5", cursor: "pointer" }, onClick: () => onViewJob && onViewJob(job) },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, flexWrap: "wrap" } },
            React.createElement("div", { style: { flex: 1 } },
              React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 19, fontWeight: 700, color: DARK, marginBottom: 4 } }, job.title),
              React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 6 } },
                (job.company || job.company) && React.createElement("span", { style: { fontSize: 13, color: "#374151", fontWeight: 600 } }, "🏢 ", job.company),
                (job.location || job.locationCountry) && React.createElement("span", { style: { fontSize: 12, color: "#6b7280" } }, "📍 ", [job.location, job.locationCountry].filter(Boolean).join(", ")),
                wm && React.createElement("span", { style: { background: wmColor + "18", color: wmColor, border: `1px solid ${wmColor}33`, borderRadius: 12, padding: "2px 9px", fontSize: 11, fontWeight: 600 } }, WORK_MODE_LABELS[wm] || wm)
              )
            ),
            React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end", flexShrink: 0 } },
              et && React.createElement(Badge, { label: et, color: "#22c55e" }),
              job.seniorityLevel && React.createElement(Badge, { label: job.seniorityLevel, color: "#8b5cf6" }),
              (job.status || job.status === "open") && React.createElement("span", { style: { background: job.status === "open" || !job.status ? "#dcfce7" : "#fee2e2", color: job.status === "open" || !job.status ? "#16a34a" : "#dc2626", borderRadius: 12, padding: "2px 9px", fontSize: 10, fontWeight: 700, textTransform: "uppercase" } }, job.status || "Open")
            )
          ),
          (job.summary || job.description) && React.createElement("div", { style: { fontSize: 13, color: "#4b5563", lineHeight: 1.6, marginTop: 6 } }, (() => { const t = job.summary || job.description || ""; return t.length > 180 ? t.slice(0, 180) + "…" : t; })()),
          (job.skills||[]).length > 0 && React.createElement("div", { style: { display: "flex", gap: 5, flexWrap: "wrap", marginTop: 10 } },
            (job.skills||[]).slice(0,5).map((s) => React.createElement("span", { key: s, style: { background: "#fdf0e1", color: "#9a4a00", borderRadius: 12, padding: "2px 10px", fontSize: 11, fontWeight: 500 } }, s))
          ),
          React.createElement("div", { style: { marginTop: 12, paddingTop: 10, borderTop: "1px solid #d1fae5", display: "flex", justifyContent: "space-between", alignItems: "center" } },
            React.createElement("span", { style: { fontSize: 11, color: "#9ca3af" } }, job.applicationDeadline ? `Deadline: ${job.applicationDeadline}` : ""),
            React.createElement("span", { style: { fontSize: 12, color: "#22c55e", fontWeight: 700 } }, "View & Apply →")
          )
        ),
        currentMember && commentSection()
      );
    }

    // INVESTMENT OPPORTUNITY
    if (item.feed_type === "investment_opportunity") {
      const opp = opportunities.find((o) => o.id === item.source_id);
      if (!opp) return null;
      return React.createElement("div", { className: "feed-card", style: cardBase },
        authorRow(),
        React.createElement("div", { style: { background: "#faf5ff", borderRadius: 10, padding: "16px 18px" } },
          React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 6 } }, opp.title),
          React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" } },
            opp.company_name && React.createElement("span", { style: { fontSize: 13, color: "#374151", fontWeight: 600 } }, "🏢 ", opp.company_name),
            opp.location && React.createElement("span", { style: { fontSize: 13, color: "#6b7280" } }, "📍 ", opp.location),
            opp.stage && React.createElement(Badge, { label: opp.stage, color: "#8b5cf6" })
          ),
          opp.summary && React.createElement("div", { style: { fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginTop: 10 } }, opp.summary.length > 220 ? opp.summary.slice(0, 220) + "…" : opp.summary)
        ),
        currentMember && commentSection()
      );
    }

    // DEAL POSTED
    if (item.feed_type === "deal_posted") {
      const deal = (deals||[]).find(d => d.id === item.source_id);
      if (!deal) return null;
      const tc = dtColor(deal.deal_type);
      return React.createElement("div", { className: "feed-card", style: cardBase },
        authorRow(),
        React.createElement("div", { onClick: () => onViewDeal && onViewDeal(deal), style: { background: tc+"0d", borderRadius: 10, padding: "16px 18px", border: "1px solid "+tc+"30", cursor: onViewDeal ? "pointer" : "default", transition: "box-shadow 0.15s" } },
          deal.cover_image_url && React.createElement("img", { src: deal.cover_image_url, style: { width: "100%", height: 150, objectFit: "cover", borderRadius: 8, marginBottom: 10, display: "block" } }),
          React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6, marginBottom: 8 } },
            React.createElement("span", { style: { background: tc, color: "#fff", fontSize: 10, fontWeight: 700, padding: "2px 9px", borderRadius: 12, textTransform: "uppercase", letterSpacing: "0.5px" } }, fmtDT(deal.deal_type)),
            deal.stage && React.createElement("span", { style: { background: tc+"20", color: tc, fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 12 } }, fmtStg(deal.stage))
          ),
          React.createElement("div", { style: { fontFamily: "var(--font-sans)", fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 4 } }, deal.deal_title),
          deal.company_or_project_name && React.createElement("div", { style: { fontSize: 13, color: "#374151", fontWeight: 600, marginBottom: 6 } }, "🏢 ", deal.company_or_project_name),
          React.createElement("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 } },
            deal.industry && React.createElement("span", { style: { fontSize: 12, color: "#6b7280" } }, deal.industry),
            deal.location && React.createElement("span", { style: { fontSize: 12, color: "#6b7280" } }, "📍 ", deal.location)
          ),
          deal.short_summary && React.createElement("div", { style: { fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginBottom: 10 } }, deal.short_summary.length > 200 ? deal.short_summary.slice(0, 200) + "…" : deal.short_summary),
          deal.financing_needed_amount && React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 6 } },
            React.createElement("span", { style: { fontSize: 12, color: "#9ca3af" } }, "Raising:"),
            React.createElement("span", { style: { fontSize: 15, fontWeight: 700, color: DARK, fontFamily: "var(--font-sans)" } }, fmtM(deal.financing_needed_amount, deal.currency))
          )
        ),
        currentMember && commentSection()
      );
    }

    // SYSTEM: member joined
    if (item.feed_type === "member_joined") {
      const joinedMember = allMembers.find((m) => m.id === item.source_id);
      return React.createElement("div", { className: "feed-card", style: { ...cardBase, background: "#fefcf7" } },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } },
          React.createElement("div", {
            onClick: () => joinedMember && onViewProfile && onViewProfile(joinedMember),
            style: { width: 40, height: 40, borderRadius: "50%", overflow: "hidden", flexShrink: 0, cursor: joinedMember && onViewProfile ? "pointer" : "default" }
          }, joinedMember
            ? React.createElement(Avatar, { member: joinedMember, size: 40 })
            : React.createElement("div", { style: { width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, " + GOLD + ", #a07830)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 } }, "🎓")
          ),
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", {
              onClick: () => joinedMember && onViewProfile && onViewProfile(joinedMember),
              style: { fontSize: 14, color: DARK, fontWeight: 600, cursor: joinedMember && onViewProfile ? "pointer" : "default" }
            }, item.system_label || "A new member joined DEO Leaders"),
            joinedMember && joinedMember.role && React.createElement("div", { style: { fontSize: 12, color: GOLD_TEXT, marginTop: 2, fontWeight: 600 } }, joinedMember.role),
            React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 3 } }, relTime(item.created_at))
          ),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" } },
            React.createElement(FeedTypeBadge, { type: "member_joined" }),
            isAdmin && onDeleteItem && React.createElement("button", { onClick: () => { if (window.confirm("Delete this from the feed?")) onDeleteItem(item.id); }, style: { background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 11, padding: "2px 0" } }, "🗑")
          )
        )
      );
    }

    // SYSTEM: event created
    if (item.feed_type === "event_created") {
      const ev = events.find((e) => e.id === item.source_id);
      return React.createElement("div", { className: "feed-card", style: { ...cardBase, background: "#fff6ec" } },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } },
          React.createElement("div", { style: { width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #f59e0b, #d97706)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 } }, "📅"),
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", { style: { fontSize: 14, color: DARK, fontWeight: 600 } }, item.system_label || "New event created"),
            ev && React.createElement("div", { style: { fontSize: 12, color: "#6b7280", marginTop: 3 } }, [ev.location, ev.isOnline ? "Online" : null].filter(Boolean).join(" · ")),
            React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 2 } }, relTime(item.created_at))
          ),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" } },
            React.createElement(FeedTypeBadge, { type: "event_created" }),
            isAdmin && onDeleteItem && React.createElement("button", { onClick: () => { if (window.confirm("Delete this from the feed?")) onDeleteItem(item.id); }, style: { background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 11, padding: "2px 0" } }, "🗑")
          )
        )
      );
    }

    // SYSTEM: donation project created
    if (item.feed_type === "donation_project_created") {
      const proj = donationProjects.find((p) => p.id === item.source_id);
      return React.createElement("div", { className: "feed-card", style: { ...cardBase, background: "#fff8fb" } },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } },
          React.createElement("div", { style: { width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #ec4899, #be185d)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 } }, "💝"),
          React.createElement("div", { style: { flex: 1 } },
            React.createElement("div", { style: { fontSize: 14, color: DARK, fontWeight: 600 } }, item.system_label || "New donation project created"),
            proj && proj.description && React.createElement("div", { style: { fontSize: 12, color: "#6b7280", marginTop: 3 } }, proj.description.length > 100 ? proj.description.slice(0, 100) + "…" : proj.description),
            React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", marginTop: 2 } }, relTime(item.created_at))
          ),
          React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" } },
            React.createElement(FeedTypeBadge, { type: "donation_project_created" }),
            isAdmin && onDeleteItem && React.createElement("button", { onClick: () => { if (window.confirm("Delete this from the feed?")) onDeleteItem(item.id); }, style: { background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 11, padding: "2px 0" } }, "🗑")
          )
        )
      );
    }

    // Fallback
    return React.createElement("div", { style: cardBase },
      React.createElement("div", { style: { fontSize: 13, color: "#9ca3af" } }, item.system_label || "Activity"),
      React.createElement("div", { style: { fontSize: 11, color: "#d1d5db", marginTop: 4 } }, relTime(item.created_at))
    );
  };

  // ── CommentSection ─────────────────────────────────────────────────────────
  var CommentSection = ({ feedItemId, currentMember, allMembers }) => {
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(false);
    const [body, setBody] = useState("");
    const [posting, setPosting] = useState(false);
    const isAdmin = currentMember && (currentMember.userRole === "admin" || currentMember.userRole === "super_admin");

    React.useEffect(() => {
      setLoading(true);
      db.select("post_comments", "?feed_item_id=eq." + feedItemId + "&order=created_at.asc")
        .then((rows) => setComments(rows || []))
        .catch(() => setComments([]))
        .finally(() => setLoading(false));
    }, [feedItemId]);

    const addComment = async () => {
      if (!body.trim() || posting) return;
      setPosting(true);
      try {
        const rows = await db.insert("post_comments", {
          feed_item_id: feedItemId, author_member_id: currentMember.id, body: body.trim()
        });
        const row = Array.isArray(rows) && rows[0];
        setComments((prev) => [...(prev || []), row || { id: Date.now() + "", feed_item_id: feedItemId, author_member_id: currentMember.id, body: body.trim(), created_at: new Date().toISOString() }]);
        setBody("");
      } catch (e) { alert("Error posting reply: " + e.message); }
      setPosting(false);
    };

    const deleteComment = async (id) => {
      try {
        await db.delete("post_comments", id);
        setComments((prev) => (prev || []).filter((c) => c.id !== id));
      } catch (e) { alert("Error deleting: " + e.message); }
    };

    return React.createElement("div", { style: { marginTop: 8 } },
      loading && React.createElement("div", { style: { fontSize: 12, color: "#9ca3af", paddingLeft: 4 } }, "Loading…"),
      !loading && (comments || []).map((c) => {
        const cAuthor = allMembers.find((m) => m.id === c.author_member_id);
        const canDelete = isAdmin || (currentMember && c.author_member_id === currentMember.id);
        return React.createElement("div", { key: c.id, style: { display: "flex", gap: 8, marginBottom: 8 } },
          cAuthor
            ? React.createElement(Avatar, { member: cAuthor, size: 28 })
            : React.createElement("div", { style: { width: 28, height: 28, borderRadius: "50%", background: "#e5e7eb", flexShrink: 0 } }),
          React.createElement("div", { style: { flex: 1, background: "#f8f7f5", borderRadius: 10, padding: "7px 12px" } },
            React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" } },
              React.createElement("span", { style: { fontWeight: 600, fontSize: 12, color: DARK } }, cAuthor ? (cAuthor.firstName + " " + cAuthor.lastName) : "Member"),
              React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center" } },
                React.createElement("span", { style: { fontSize: 11, color: "#9ca3af" } }, relTime(c.created_at)),
                canDelete && React.createElement("button", {
                  onClick: () => deleteComment(c.id),
                  style: { background: "none", border: "none", cursor: "pointer", color: "#ef4444", fontSize: 12, padding: 0, lineHeight: 1 }
                }, "✕")
              )
            ),
            React.createElement("div", { style: { fontSize: 13, color: "#374151", marginTop: 3, lineHeight: 1.5 } }, c.body)
          )
        );
      }),
      React.createElement("div", { style: { display: "flex", gap: 8, alignItems: "center", marginTop: 6 } },
        React.createElement(Avatar, { member: currentMember, size: 28 }),
        React.createElement("input", {
          value: body, onChange: (e) => setBody(e.target.value),
          placeholder: "Write a reply…",
          onKeyDown: (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); addComment(); } },
          style: { flex: 1, padding: "7px 14px", borderRadius: 20, border: "1px solid #e5e7eb", fontSize: 13, outline: "none", fontFamily: "inherit", background: "#f8f7f5" }
        }),
        body.trim() && React.createElement("button", {
          onClick: addComment, disabled: posting,
          style: { padding: "7px 14px", borderRadius: 20, border: "none", background: DARK, color: GOLD, fontWeight: 700, fontSize: 13, cursor: "pointer", flexShrink: 0 }
        }, posting ? "…" : "Reply")
      )
    );
  };

  // ── NewsfeedTab ────────────────────────────────────────────────────────────
  var NewsfeedTab = ({ currentMember, feedItems, setFeedItems, posts, setPosts, jobs, setJobs, opportunities, setOpportunities, deals, setDeals, dealBids, setDealBids, allMembers, events, donationProjects, onViewProfile, onRefresh }) => {
    const [createMode, setCreateMode] = useState(null);
    const [filter, setFilter] = useState("all");
    const [viewingFeedDeal, setViewingFeedDeal] = useState(null);
    const [viewingFeedJob, setViewingFeedJob] = useState(null);
    const [refreshing, setRefreshing] = useState(false);

    const handlePostCreated = (post, fi) => { setPosts((prev) => [post, ...prev]); setFeedItems((prev) => [fi, ...prev]); };
    const handleJobCreated = (job, fi) => { setJobs((prev) => [job, ...prev]); setFeedItems((prev) => [fi, ...prev]); };
    const handleInvestmentCreated = (opp, fi) => { setOpportunities((prev) => [opp, ...prev]); setFeedItems((prev) => [fi, ...prev]); };

    const handleDeleteItem = async (id) => {
      try {
        await db.delete("feed_items", id);
        setFeedItems((prev) => prev.filter((fi) => fi.id !== id));
      } catch (e) { alert("Error deleting: " + e.message); }
    };

    const handleRefresh = async () => {
      if (!onRefresh || refreshing) return;
      setRefreshing(true);
      await onRefresh();
      setRefreshing(false);
    };

    const FILTERS = [
      ["all", "All"],
      ["post", "Posts"],
      ["job", "Jobs"],
      ["deal_posted", "Deals"],
      ["member_joined", "New Members"],
      ["event_created", "Events"],
      ["donation_project_created", "Donations"]
    ];

    const filtered = filter === "all" ? feedItems : feedItems.filter((fi) => fi.feed_type === filter);

    const quickBtnStyle = {
      display: "flex", alignItems: "center", gap: 7, padding: "8px 16px",
      borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff",
      color: "#374151", fontSize: 13, fontWeight: 600, cursor: "pointer",
      fontFamily: "inherit", transition: "background 0.15s"
    };

    return React.createElement("div", null,
      // Composer bar
      React.createElement("div", { style: { background: "#fff", borderRadius: 14, border: "1px solid " + BORDER, padding: "18px 22px", marginBottom: 14 } },
        React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 14 } },
          React.createElement(Avatar, { member: currentMember, size: 40 }),
          React.createElement("button", {
            onClick: () => setCreateMode("post"),
            style: { flex: 1, padding: "11px 18px", borderRadius: 24, border: "1px solid #e5e7eb", background: "#f9f8f6", color: "#9ca3af", fontSize: 14, textAlign: "left", cursor: "pointer", fontFamily: "inherit" }
          }, "Share something with DEO Leaders…")
        ),
        React.createElement("div", { className: "feed-quick-btns", style: { display: "flex", gap: 8, paddingTop: 14, borderTop: "1px solid " + BORDER, flexWrap: "wrap", alignItems: "center" } },
          React.createElement("button", { onClick: () => setCreateMode("post"), style: quickBtnStyle }, "✍️ Write a Post"),
          React.createElement("button", { onClick: () => setCreateMode("job"), style: quickBtnStyle }, "💼 Post a Job"),
          React.createElement("button", { onClick: () => setCreateMode("deal"), style: quickBtnStyle }, "💼 Post a Deal"),
          onRefresh && React.createElement("button", {
            onClick: handleRefresh, disabled: refreshing,
            style: { ...quickBtnStyle, marginLeft: "auto", color: refreshing ? "#9ca3af" : GOLD_TEXT, borderColor: GOLD + "40" }
          }, refreshing ? "↻ Refreshing…" : "↻ Refresh")
        )
      ),
      // Filter chips
      React.createElement("div", { style: { display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" } },
        FILTERS.map(([key, label]) => {
          const count = key === "all" ? feedItems.length : feedItems.filter((fi) => fi.feed_type === key).length;
          const color = key === "all" ? DARK : (FEED_TYPE_CFG[key] || {}).color || "#6b7280";
          const active = filter === key;
          return React.createElement("button", {
            key, onClick: () => setFilter(key),
            style: {
              padding: "5px 12px", borderRadius: 20,
              border: "1px solid " + (active ? color : "#e5e7eb"),
              background: active ? color : "#fff",
              color: active ? "#fff" : "#6b7280",
              fontSize: 12, fontWeight: active ? 700 : 400, cursor: "pointer",
              fontFamily: "inherit", transition: "all 0.15s"
            }
          }, label, count > 0 ? React.createElement("span", { style: { marginLeft: 5, opacity: 0.75 } }, "(", count, ")") : null);
        })
      ),
      // Feed list
      filtered.length === 0
        ? React.createElement("div", { style: { textAlign: "center", padding: "60px 0", color: "#9ca3af" } },
            React.createElement("div", { style: { fontSize: 40, marginBottom: 12 } }, "📰"),
            React.createElement("div", { style: { fontWeight: 600, color: DARK, marginBottom: 6, fontSize: 15 } }, filter === "all" ? "The feed is empty" : "No " + ((FEED_TYPE_CFG[filter] || { label: "items" }).label).toLowerCase() + " yet"),
            React.createElement("div", { style: { fontSize: 13 } }, "Be the first to post something for the community.")
          )
        : filtered.map((item) =>
            React.createElement(FeedItemCard, {
              key: item.id, item,
              posts, jobs, opportunities, deals, allMembers, events, donationProjects,
              currentMember, onViewProfile, onDeleteItem: handleDeleteItem,
              onViewDeal: deal => setViewingFeedDeal(deal),
              onViewJob: job => setViewingFeedJob(job)
            })
          ),
      // Creation modals
      createMode === "post"       && React.createElement(CreatePostModal,       { currentMember, onClose: () => setCreateMode(null), onCreated: handlePostCreated }),
      createMode === "job"        && React.createElement(JobPostModal,          { currentMember, onClose: () => setCreateMode(null), onCreated: handleJobCreated }),
      createMode === "deal"       && React.createElement(DealPostModal,         { currentMember, onClose: () => setCreateMode(null), onCreated: deal => { setDeals && setDeals(prev => [deal, ...prev]); } }),
      // Deal detail from feed click
      viewingFeedDeal && React.createElement(DealDetailModal, {
        deal: viewingFeedDeal, members: allMembers, dealBids: dealBids||[], currentMember,
        onClose: () => setViewingFeedDeal(null),
        onBidSubmitted: bid => { setDealBids && setDealBids(prev => { const i = prev.findIndex(b => b.id === bid.id); return i >= 0 ? prev.map((b,j) => j===i?bid:b) : [...prev, bid]; }); },
        onDealUpdated: updated => { setDeals && setDeals(prev => prev.map(d => d.id===updated.id?updated:d)); setViewingFeedDeal(updated); },
        onDealDeleted: id => { setDeals && setDeals(prev => prev.filter(d => d.id!==id)); setViewingFeedDeal(null); }
      }),
      // Job detail from feed click
      viewingFeedJob && React.createElement(JobDetailModal, {
        job: viewingFeedJob, currentMember, allMembers,
        onClose: () => setViewingFeedJob(null),
        onApplied: () => {},
        onEdit: (updated) => { setJobs && setJobs(prev => prev.map(j => j.id===updated.id ? {...j,...updated} : j)); setViewingFeedJob({...viewingFeedJob,...updated}); },
        onStatusChange: (ns) => { setJobs && setJobs(prev => prev.map(j => j.id===viewingFeedJob.id ? {...j,status:ns} : j)); setViewingFeedJob(v => v ? {...v,status:ns} : v); }
      })
    );
  };

  // ═══════════════════════ DEAL ROOM ═══════════════════════
  var DEAL_TYPES_OPT=["startup_investment","company_acquisition","real_estate_investment","project_financing","venture_funding","private_equity_opportunity","strategic_partnership"];
  var DEAL_STAGES_OPT=["idea","pre_seed","seed","series_a","series_b","growth","acquisition","real_estate_development","project_finance"];
  var RETURN_TYPES_OPT=["equity","revenue_share","debt","convertible_note","profit_share"];
  var fmtDT=v=>({startup_investment:"Startup Investment",company_acquisition:"Company Acquisition",real_estate_investment:"Real Estate Investment",project_financing:"Project Financing",venture_funding:"Venture Funding",private_equity_opportunity:"Private Equity",strategic_partnership:"Strategic Partnership"}[v]||v||"");
  var fmtStg=v=>({idea:"Idea",pre_seed:"Pre-Seed",seed:"Seed",series_a:"Series A",series_b:"Series B",growth:"Growth",acquisition:"Acquisition",real_estate_development:"RE Development",project_finance:"Project Finance"}[v]||v||"");
  var fmtRT=v=>({equity:"Equity",revenue_share:"Revenue Share",debt:"Debt",convertible_note:"Conv. Note",profit_share:"Profit Share"}[v]||v||"");
  var dtColor=v=>({startup_investment:"#3b82f6",company_acquisition:"#8b5cf6",real_estate_investment:"#22c55e",project_financing:"#f59e0b",venture_funding:"#06b6d4",private_equity_opportunity:"#ec4899",strategic_partnership:"#f7911d"}[v]||GOLD);
  var fmtM=(n,cur)=>{
    const sym={USD:"$",EUR:"€",EGP:"EGP ",AED:"AED "}[cur||"USD"]||"$";
    if(!n&&n!==0)return"—";
    if(n>=1e9)return sym+(n/1e9).toFixed(1)+"B";
    if(n>=1e6)return sym+(n/1e6).toFixed(1)+"M";
    if(n>=1e3)return sym+(n/1e3).toFixed(0)+"K";
    return sym+n;
  };

  var DealImageUpload=({value,onChange})=>{
    const ref=useRef();
    const handle=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>onChange(ev.target.result);r.readAsDataURL(f);};
    return React.createElement("div",null,
      React.createElement("div",{style:{fontSize:11,fontWeight:600,color:"#374151",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.7px"}},"Cover Image"),
      React.createElement("div",{onClick:()=>ref.current.click(),style:{width:"100%",height:140,borderRadius:10,border:"2px dashed #cfcac4",background:value?`url(${value}) center/cover no-repeat`:"#f9f8f6",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},
        !value&&React.createElement("div",{style:{textAlign:"center",color:"#9ca3af",pointerEvents:"none"}},
          React.createElement("div",{style:{fontSize:28,marginBottom:4}},"🖼"),
          React.createElement("div",{style:{fontSize:12}},"Click to upload cover image")
        )
      ),
      value&&React.createElement("button",{type:"button",onClick:()=>onChange(null),style:{marginTop:4,padding:"4px 10px",background:"transparent",border:"1px solid #e5e7eb",borderRadius:6,fontSize:11,color:"#9ca3af",cursor:"pointer"}},"Remove image"),
      React.createElement("input",{ref,type:"file",accept:"image/*",onChange:handle,style:{display:"none"}})
    );
  };

  var PDFUpload=({value,onChange})=>{
    const ref=useRef();
    const [name,setName]=useState("");
    const handle=e=>{const f=e.target.files[0];if(!f)return;setName(f.name);const r=new FileReader();r.onload=ev=>onChange(ev.target.result);r.readAsDataURL(f);};
    return React.createElement("div",null,
      React.createElement("div",{style:{fontSize:11,fontWeight:600,color:"#374151",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.7px"}},"Pitch Deck (PDF)"),
      React.createElement("div",{onClick:()=>ref.current.click(),style:{border:"2px dashed #cfcac4",borderRadius:8,padding:"14px",textAlign:"center",cursor:"pointer",background:"#f9f8f6"}},
        value
          ?React.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:8}},
            React.createElement("span",{style:{fontSize:20}},"📄"),
            React.createElement("span",{style:{fontSize:13,color:DARK,fontWeight:600,maxWidth:200,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},name||"PDF uploaded"),
            React.createElement("button",{type:"button",onClick:e=>{e.stopPropagation();onChange(null);setName("");},style:{padding:"2px 8px",background:"transparent",border:"1px solid #e5e7eb",borderRadius:6,fontSize:11,color:"#9ca3af",cursor:"pointer"}},"✕")
          )
          :React.createElement("div",{style:{color:"#9ca3af"}},
            React.createElement("div",{style:{fontSize:22,marginBottom:2}},"📄"),
            React.createElement("div",{style:{fontSize:12}},"Click to upload PDF")
          )
      ),
      React.createElement("input",{ref,type:"file",accept:".pdf,application/pdf",onChange:handle,style:{display:"none"}})
    );
  };

  var DealCard=({deal,members,dealBids,onView,currentMember})=>{
    const poster=members.find(m=>m.id===deal.poster_id);
    const bids=(dealBids||[]).filter(b=>b.deal_id===deal.id);
    const tc=dtColor(deal.deal_type);
    const isOwn=currentMember&&currentMember.id===deal.poster_id;
    return React.createElement("div",{onClick:()=>onView(deal),style:{background:"#fff",borderRadius:14,overflow:"hidden",border:`1px solid ${BORDER}`,cursor:"pointer",transition:"box-shadow 0.2s,transform 0.15s",boxShadow:"0 1px 4px rgba(0,0,0,0.06)"},onMouseEnter:e=>{e.currentTarget.style.boxShadow="0 8px 24px rgba(0,0,0,0.12)";e.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:e=>{e.currentTarget.style.boxShadow="0 1px 4px rgba(0,0,0,0.06)";e.currentTarget.style.transform=""}},
      React.createElement("div",{style:{height:180,background:deal.cover_image_url?`url(${deal.cover_image_url}) center/cover no-repeat`:`linear-gradient(135deg,${DARK} 0%,#2d1f08 100%)`,position:"relative",display:"flex",alignItems:"flex-end"}},
        React.createElement("div",{style:{position:"absolute",top:12,left:12}},
          React.createElement("span",{style:{background:tc,color:"#fff",fontSize:10,fontWeight:700,padding:"3px 9px",borderRadius:20,letterSpacing:"0.5px",textTransform:"uppercase"}},fmtDT(deal.deal_type))
        ),
        isOwn&&React.createElement("div",{style:{position:"absolute",top:12,right:12}},
          React.createElement("span",{style:{background:GOLD,color:DARK,fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:20}},"✎ My Deal")
        ),
        React.createElement("div",{style:{width:"100%",background:"linear-gradient(to top,rgba(0,0,0,0.7) 0%,transparent 100%)",padding:"40px 16px 14px"}},
          React.createElement("div",{style:{fontSize:17,fontWeight:700,color:"#fff",fontFamily:"var(--font-sans)",lineHeight:1.3}},deal.deal_title),
          deal.company_or_project_name&&React.createElement("div",{style:{fontSize:12,color:"rgba(255,255,255,0.75)",marginTop:3}},deal.company_or_project_name)
        )
      ),
      React.createElement("div",{style:{padding:"14px 16px 16px"}},
        React.createElement("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:10}},
          deal.industry&&React.createElement("span",{style:{background:"#f3f4f6",color:"#374151",fontSize:11,padding:"2px 8px",borderRadius:12}},deal.industry),
          deal.location&&React.createElement("span",{style:{background:"#f3f4f6",color:"#374151",fontSize:11,padding:"2px 8px",borderRadius:12}},"📍 "+deal.location),
          deal.stage&&React.createElement("span",{style:{background:tc+"18",color:tc,fontSize:11,padding:"2px 8px",borderRadius:12,fontWeight:600}},fmtStg(deal.stage))
        ),
        deal.short_summary&&React.createElement("div",{style:{fontSize:12,color:"#6b7280",lineHeight:1.6,marginBottom:12,display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}},deal.short_summary),
        React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:10,borderTop:`1px solid ${BORDER}`}},
          React.createElement("div",null,
            React.createElement("div",{style:{fontSize:10,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:2}},"Capital Needed"),
            React.createElement("div",{style:{fontSize:16,fontWeight:700,color:DARK,fontFamily:"var(--font-sans)"}},fmtM(deal.financing_needed_amount,deal.currency))
          ),
          React.createElement("div",{style:{textAlign:"right"}},
            React.createElement("div",{style:{fontSize:10,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:2}},"Interested"),
            React.createElement("div",{style:{fontSize:16,fontWeight:700,color:tc}},bids.length," investor"+(bids.length!==1?"s":""))
          )
        )
      )
    );
  };

  var BidModal=({deal,currentMember,onClose,onSubmitted,existingBid})=>{
    const [bidType,setBidType]=useState(existingBid?existingBid.bid_type:"interest");
    const [isPublic,setIsPublic]=useState(existingBid?!!existingBid.is_public:false);
    const [amount,setAmount]=useState(existingBid?String(existingBid.amount||""):"");
    const [message,setMessage]=useState(existingBid?existingBid.message||"":"");
    const [saving,setSaving]=useState(false);
    const submit=async()=>{
      if(bidType==="bid"&&!amount)return alert("Please enter an investment amount.");
      setSaving(true);
      try{
        const payload={deal_id:deal.id,bidder_member_id:currentMember.id,bid_type:bidType,is_public:isPublic,amount:(bidType==="bid"&&amount)?parseFloat(amount):null,message:message||null};
        if(existingBid){
          await db.update("deal_bids",existingBid.id,{bid_type:bidType,is_public:isPublic,amount:payload.amount,message:payload.message});
          onSubmitted({...existingBid,...payload});
        }else{
          const rows=await db.insert("deal_bids",payload);
          onSubmitted(rows&&rows[0]?rows[0]:{...payload,id:Date.now().toString(),created_at:new Date().toISOString()});
        }
        onClose();
      }catch(e){alert("Error: "+e.message);setSaving(false);}
    };
    const ToggleCard=({active,onClick,icon,label,desc})=>React.createElement("div",{onClick,style:{border:`2px solid ${active?GOLD:BORDER}`,borderRadius:10,padding:"14px 12px",cursor:"pointer",background:active?"#fff6ec":"#fff",textAlign:"center",transition:"all 0.15s"}},
      React.createElement("div",{style:{fontSize:20,marginBottom:4}},icon),
      React.createElement("div",{style:{fontWeight:700,color:active?DARK:"#374151",fontSize:13}},label),
      React.createElement("div",{style:{fontSize:11,color:"#9ca3af",marginTop:3,lineHeight:1.4}},desc)
    );
    return React.createElement(Modal,{title:existingBid?"Update Your Engagement":"Express Investment Interest",onClose,maxWidth:520},
      React.createElement("div",null,
        React.createElement("div",{style:{fontSize:13,color:"#6b7280",marginBottom:20}},"Deal: ",React.createElement("strong",{style:{color:DARK}},deal.deal_title)),
        React.createElement("div",{style:{fontSize:11,color:"#9ca3af",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:10}},"Engagement Type"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}},
          React.createElement(ToggleCard,{active:bidType==="interest",onClick:()=>setBidType("interest"),icon:"🤝",label:"Show Interest",desc:"Express interest without disclosing an amount"}),
          React.createElement(ToggleCard,{active:bidType==="bid",onClick:()=>setBidType("bid"),icon:"💰",label:"Bid with Amount",desc:"Submit a specific investment amount"})
        ),
        bidType==="bid"&&React.createElement("div",{style:{marginBottom:20}},
          React.createElement(Input,{label:"Investment Amount (USD) *",type:"number",value:amount,onChange:setAmount,placeholder:"e.g. 50000"})
        ),
        React.createElement("div",{style:{fontSize:11,color:"#9ca3af",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:10}},"Visibility"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20}},
          React.createElement(ToggleCard,{active:!isPublic,onClick:()=>setIsPublic(false),icon:"🔒",label:"Private",desc:"Only the poster and admins see your identity"+(bidType==="bid"?" and amount":"")}),
          React.createElement(ToggleCard,{active:isPublic,onClick:()=>setIsPublic(true),icon:"🌐",label:"Public",desc:"All members see your identity"+(bidType==="bid"?" and amount":"")})
        ),
        React.createElement(Textarea,{label:"Message to Poster (Optional)",value:message,onChange:setMessage,rows:2,placeholder:"Introduce yourself or ask a question..."}),
        React.createElement("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",marginTop:16}},
          React.createElement(Btn,{variant:"ghost",onClick:onClose},"Cancel"),
          React.createElement(Btn,{onClick:submit,disabled:saving},saving?"Saving...":existingBid?"Update":"Submit")
        )
      )
    );
  };

  var DealInsightsModal=({deal,dealBids,members,onClose})=>{
    const bids=(dealBids||[]).filter(b=>b.deal_id===deal.id);
    const interests=bids.filter(b=>b.bid_type==="interest");
    const bidsWith=bids.filter(b=>b.bid_type==="bid");
    const privateBids=bids.filter(b=>!b.is_public);
    const publicBids=bids.filter(b=>b.is_public);
    const totalCapital=bidsWith.reduce((s,b)=>s+(b.amount||0),0);
    return React.createElement(Modal,{title:"Deal Insights — Full View",onClose,maxWidth:720},
      React.createElement("div",null,
        React.createElement("div",{style:{fontWeight:700,color:DARK,fontFamily:"var(--font-sans)",fontSize:20,marginBottom:2}},deal.deal_title),
        React.createElement("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:20}},deal.company_or_project_name),
        React.createElement("div",{style:{background:"#fff8e8",border:`1px solid ${GOLD}30`,borderRadius:8,padding:"8px 12px",fontSize:12,color:"#92690a",marginBottom:20}},"🔒 Full view — visible only to you and admins"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:10,marginBottom:24}},
          [{label:"Total Engaged",value:bids.length,color:GOLD},{label:"Interests",value:interests.length,color:"#9ca3af"},{label:"Bids w/ Amount",value:bidsWith.length,color:"#3b82f6"},{label:"Total Capital",value:fmtM(totalCapital),color:"#22c55e"}]
          .map(({label,value,color})=>React.createElement("div",{key:label,style:{background:"#fafaf8",border:`1px solid ${BORDER}`,borderRadius:10,padding:"14px 12px",textAlign:"center"}},
            React.createElement("div",{style:{fontSize:22,fontWeight:700,color,fontFamily:"var(--font-sans)"}},value),
            React.createElement("div",{style:{fontSize:11,color:"#9ca3af",marginTop:3}},label)
          ))
        ),
        bids.length===0
          ?React.createElement("div",{style:{textAlign:"center",padding:"32px 0",color:"#9ca3af"}},"No investor expressions yet.")
          :React.createElement("div",null,
            React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:10}},"All Engagements"),
            bids.map(bid=>{
              const m=members.find(x=>x.id===bid.bidder_member_id);
              if(!m)return null;
              const typeLabel=bid.bid_type==="bid"?"Bid with Amount":"Interest";
              const typeColor=bid.bid_type==="bid"?"#3b82f6":"#9ca3af";
              return React.createElement("div",{key:bid.id,style:{display:"flex",alignItems:"center",gap:12,padding:"12px 0",borderBottom:`1px solid ${BORDER}`}},
                React.createElement(Avatar,{member:m,size:36}),
                React.createElement("div",{style:{flex:1}},
                  React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},
                    React.createElement("div",{style:{fontWeight:600,color:DARK,fontSize:14}},m.firstName," ",m.lastName),
                    React.createElement("span",{style:{fontSize:10,color:bid.is_public?"#22c55e":"#8b5cf6",background:bid.is_public?"#22c55e18":"#8b5cf618",padding:"1px 6px",borderRadius:8,fontWeight:600}},bid.is_public?"🌐 Public":"🔒 Private")
                  ),
                  React.createElement("div",{style:{fontSize:12,color:"#9ca3af",marginTop:1}},m.role||"",m.country?" · "+m.country:"")
                ),
                React.createElement("div",{style:{textAlign:"right"}},
                  React.createElement("span",{style:{background:typeColor+"18",color:typeColor,fontSize:11,fontWeight:600,padding:"2px 8px",borderRadius:10}},typeLabel),
                  bid.amount&&React.createElement("div",{style:{fontSize:14,fontWeight:700,color:DARK,marginTop:4}},fmtM(bid.amount)),
                  bid.message&&React.createElement("div",{style:{fontSize:11,color:"#6b7280",marginTop:4,maxWidth:200,fontStyle:"italic"}},"\u201C",bid.message,"\u201D")
                )
              );
            })
          )
      )
    );
  };

  var DealDetailModal=({deal,members,dealBids,currentMember,onClose,onBidSubmitted,onDealUpdated,onDealDeleted})=>{
    const [showBid,setShowBid]=useState(false);
    const [showInsights,setShowInsights]=useState(false);
    const [showEdit,setShowEdit]=useState(false);
    const poster=members.find(m=>m.id===deal.poster_id);
    const bids=(dealBids||[]).filter(b=>b.deal_id===deal.id);
    const myBid=bids.find(b=>b.bidder_member_id===currentMember.id);
    const isOwn=currentMember.id===deal.poster_id;
    const isPrivileged=isOwn||currentMember.userRole==="admin"||currentMember.userRole==="super_admin";
    // Regular members only see public engagements; poster + admin see all
    const visibleBids=isPrivileged?bids:bids.filter(b=>b.is_public);
    const publicBids=bids.filter(b=>b.is_public);
    const tc=dtColor(deal.deal_type);
    const Sec=({title,children})=>React.createElement("div",{style:{marginBottom:24}},
      React.createElement("div",{style:{fontSize:11,fontWeight:700,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"1.2px",marginBottom:12,paddingBottom:8,borderBottom:`1px solid ${BORDER}`}},title),
      children
    );
    return React.createElement("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:2000,overflowY:"auto",padding:"24px 16px"},onClick:e=>{if(e.target===e.currentTarget)onClose()}},
      React.createElement("div",{style:{background:"#fff",borderRadius:16,maxWidth:720,margin:"0 auto",overflow:"hidden",boxShadow:"0 20px 60px rgba(0,0,0,0.25)"}},
        React.createElement("div",{style:{height:260,background:deal.cover_image_url?`url(${deal.cover_image_url}) center/cover no-repeat`:`linear-gradient(135deg,${DARK} 0%,#2d1f08 100%)`,position:"relative",display:"flex",alignItems:"flex-end"}},
          React.createElement("div",{style:{position:"absolute",top:16,left:16}},
            React.createElement("span",{style:{background:tc,color:"#fff",fontSize:11,fontWeight:700,padding:"4px 12px",borderRadius:20,textTransform:"uppercase",letterSpacing:"0.5px"}},fmtDT(deal.deal_type))
          ),
          React.createElement("button",{onClick:onClose,style:{position:"absolute",top:16,right:16,background:"rgba(0,0,0,0.5)",border:"none",color:"#fff",borderRadius:"50%",width:32,height:32,cursor:"pointer",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center"}},"×"),
          React.createElement("div",{style:{width:"100%",background:"linear-gradient(to top,rgba(0,0,0,0.8) 0%,transparent 100%)",padding:"60px 24px 24px"}},
            React.createElement("div",{style:{fontSize:28,fontWeight:700,color:"#fff",fontFamily:"var(--font-sans)",lineHeight:1.2}},deal.deal_title),
            deal.company_or_project_name&&React.createElement("div",{style:{fontSize:14,color:"rgba(255,255,255,0.75)",marginTop:4}},deal.company_or_project_name),
            React.createElement("div",{style:{display:"flex",gap:8,marginTop:10,flexWrap:"wrap"}},
              deal.industry&&React.createElement("span",{style:{background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,padding:"2px 8px",borderRadius:10}},deal.industry),
              deal.location&&React.createElement("span",{style:{background:"rgba(255,255,255,0.2)",color:"#fff",fontSize:11,padding:"2px 8px",borderRadius:10}},"📍 "+deal.location),
              deal.stage&&React.createElement("span",{style:{background:tc,color:"#fff",fontSize:11,padding:"2px 8px",borderRadius:10,fontWeight:600}},fmtStg(deal.stage))
            )
          )
        ),
        React.createElement("div",{style:{padding:"28px 28px 32px"}},
          React.createElement("div",{style:{display:"flex",gap:10,marginBottom:24,flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"}},
            React.createElement("div",{style:{display:"flex",gap:10,flexWrap:"wrap"}},
              !isOwn&&!myBid&&React.createElement(Btn,{onClick:()=>setShowBid(true)},"💼 Express Interest"),
              !isOwn&&myBid&&React.createElement(Btn,{variant:"secondary",onClick:()=>setShowBid(true)},"✏️ Update Engagement"),
              isOwn&&React.createElement(Btn,{variant:"secondary",onClick:()=>setShowInsights(true)},"📊 View Insights"),
              isPrivileged&&React.createElement(Btn,{variant:"secondary",onClick:()=>setShowEdit(true)},"✏️ Edit Deal"),
              isPrivileged&&React.createElement(Btn,{variant:"ghost",onClick:async()=>{if(!confirm("Delete this deal?"))return;try{await db.delete("deals",deal.id);onDealDeleted&&onDealDeleted(deal.id);onClose();}catch(e){alert(e.message);}}},"🗑 Delete")
            ),
            myBid&&React.createElement("div",{style:{fontSize:12,color:"#22c55e",fontWeight:600}},"✓ "+(myBid.bid_type==="bid"?"Bid submitted":"Interest expressed")+(myBid.amount?" · "+fmtM(myBid.amount):"")+" · "+(myBid.is_public?"🌐 Public":"🔒 Private"))
          ),
          (deal.short_summary||deal.full_description)&&React.createElement(Sec,{title:"Overview"},
            deal.short_summary&&React.createElement("p",{style:{fontSize:14,color:"#374151",lineHeight:1.8,margin:"0 0 8px"}},deal.short_summary),
            deal.full_description&&React.createElement("p",{style:{fontSize:14,color:"#374151",lineHeight:1.8,margin:0}},deal.full_description)
          ),
          React.createElement(Sec,{title:"Investment Details"},
            React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(160px,1fr))",gap:10}},
              [{l:"Capital Needed",v:fmtM(deal.financing_needed_amount,deal.currency)},{l:"Min. Ticket",v:fmtM(deal.minimum_ticket_size,deal.currency)},{l:"Max. Ticket",v:fmtM(deal.maximum_ticket_size,deal.currency)},{l:"Valuation",v:fmtM(deal.valuation,deal.currency)},{l:"Return Type",v:fmtRT(deal.expected_return_type)},{l:"Expected Return",v:deal.expected_return_range},{l:"Horizon",v:deal.investment_horizon_years?deal.investment_horizon_years+"y":null},{l:"Stage",v:fmtStg(deal.stage)}]
              .filter(({v})=>v&&v!=="—")
              .map(({l,v})=>React.createElement("div",{key:l,style:{background:"#fafaf8",border:`1px solid ${BORDER}`,borderRadius:8,padding:"12px"}},
                React.createElement("div",{style:{fontSize:10,color:"#9ca3af",textTransform:"uppercase",letterSpacing:"0.8px",marginBottom:4}},l),
                React.createElement("div",{style:{fontSize:15,fontWeight:700,color:DARK}},v)
              ))
            )
          ),
          (deal.video_link||deal.pitch_deck_url||deal.website_url)&&React.createElement(Sec,{title:"Media & Presentation"},
            React.createElement("div",{style:{display:"flex",gap:10,flexWrap:"wrap"}},
              deal.pitch_deck_url&&React.createElement("button",{onClick:()=>{const a=document.createElement("a");a.href=deal.pitch_deck_url;a.download="pitch-deck.pdf";a.target="_blank";document.body.appendChild(a);a.click();document.body.removeChild(a);},style:{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 16px",background:"#fafaf8",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:13,color:DARK,fontWeight:600,cursor:"pointer"}},"📄 Download Pitch Deck"),
              deal.video_link&&React.createElement("a",{href:deal.video_link,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 16px",background:"#fafaf8",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:13,color:DARK,textDecoration:"none",fontWeight:600}},"▶️ Watch Video"),
              deal.website_url&&React.createElement("a",{href:deal.website_url,target:"_blank",rel:"noopener noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,padding:"10px 16px",background:"#fafaf8",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:13,color:DARK,textDecoration:"none",fontWeight:600}},"🌐 Website")
            )
          ),
          React.createElement(Sec,{title:"Investor Interest"},
            React.createElement("div",{style:{display:"flex",gap:10,marginBottom:16,flexWrap:"wrap"}},
              [{l:"Total Engaged",v:bids.length,c:GOLD},{l:"Public",v:publicBids.length,c:"#3b82f6"},{l:"Public Capital",v:fmtM(publicBids.filter(b=>b.bid_type==="bid").reduce((s,b)=>s+(b.amount||0),0)),c:"#22c55e"}]
              .map(({l,v,c})=>React.createElement("div",{key:l,style:{flex:1,minWidth:100,background:"#fafaf8",border:`1px solid ${BORDER}`,borderRadius:8,padding:"12px",textAlign:"center"}},
                React.createElement("div",{style:{fontSize:18,fontWeight:700,color:c,fontFamily:"var(--font-sans)"}},v),
                React.createElement("div",{style:{fontSize:10,color:"#9ca3af",marginTop:2}},l)
              ))
            ),
            visibleBids.length>0&&React.createElement("div",null,
              isPrivileged&&React.createElement("div",{style:{background:"#fff8e8",border:`1px solid ${GOLD}30`,borderRadius:6,padding:"6px 10px",fontSize:11,color:"#92690a",marginBottom:10}},"🔒 You see all engagements (public + private) as "+(isOwn?"the deal poster":"an admin")),
              visibleBids.map(bid=>{
                const m=members.find(x=>x.id===bid.bidder_member_id);
                if(!m)return null;
                return React.createElement("div",{key:bid.id,style:{display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:`1px solid #f6f5f3`}},
                  React.createElement(Avatar,{member:m,size:30}),
                  React.createElement("div",{style:{flex:1}},
                    React.createElement("div",{style:{display:"flex",alignItems:"center",gap:6}},
                      React.createElement("div",{style:{fontSize:13,fontWeight:600,color:DARK}},m.firstName," ",m.lastName),
                      isPrivileged&&React.createElement("span",{style:{fontSize:10,color:bid.is_public?"#22c55e":"#8b5cf6",background:bid.is_public?"#22c55e18":"#8b5cf618",padding:"1px 5px",borderRadius:6,fontWeight:600}},bid.is_public?"🌐":"🔒")
                    ),
                    React.createElement("div",{style:{fontSize:11,color:"#9ca3af"}},bid.bid_type==="bid"?"Bid with Amount":"Interest Only")
                  ),
                  bid.amount&&React.createElement("div",{style:{fontSize:14,fontWeight:700,color:DARK}},fmtM(bid.amount))
                );
              }),
              !isPrivileged&&bids.length>publicBids.length&&React.createElement("div",{style:{fontSize:12,color:"#9ca3af",padding:"10px 0",fontStyle:"italic"}},"+"+(bids.length-publicBids.length)+" private engagement"+(bids.length-publicBids.length>1?"s":"")+" (not shown)")
            ),
            visibleBids.length===0&&React.createElement("div",{style:{fontSize:13,color:"#9ca3af",padding:"8px 0"}},isPrivileged?"No engagements yet.":"No public engagements yet.")
          ),
          poster&&React.createElement(Sec,{title:"Posted By"},
            React.createElement("div",{style:{display:"flex",alignItems:"center",gap:12}},
              React.createElement(Avatar,{member:poster,size:42}),
              React.createElement("div",null,
                React.createElement("div",{style:{fontWeight:600,color:DARK,fontSize:14}},poster.firstName," ",poster.lastName),
                React.createElement("div",{style:{fontSize:12,color:"#9ca3af"}},poster.role||"",poster.country?" · "+poster.country:""),
                React.createElement("div",{style:{fontSize:11,color:"#9ca3af",marginTop:2}},new Date(deal.created_at).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}))
              )
            )
          )
        )
      ),
      showBid&&React.createElement(BidModal,{deal,currentMember,existingBid:myBid,onClose:()=>setShowBid(false),onSubmitted:bid=>{onBidSubmitted&&onBidSubmitted(bid);setShowBid(false);}}),
      showInsights&&React.createElement(DealInsightsModal,{deal,dealBids,members,onClose:()=>setShowInsights(false)}),
      showEdit&&React.createElement(DealPostModal,{currentMember,existing:deal,onClose:()=>setShowEdit(false),onUpdated:updated=>{onDealUpdated&&onDealUpdated(updated);setShowEdit(false);}})
    );
  };

  var DealPostModal=({currentMember,onClose,onCreated,onUpdated,existing})=>{
    const isEdit=!!existing;
    const blank={deal_title:"",company_or_project_name:"",deal_type:"",industry:"",location:"",short_summary:"",full_description:"",financing_needed_amount:"",minimum_ticket_size:"",maximum_ticket_size:"",valuation:"",currency:"USD",stage:"",expected_return_type:"",expected_return_range:"",investment_horizon_years:"",cover_image_url:"",pitch_deck_url:"",video_link:"",website_url:""};
    const [form,setForm]=useState(isEdit?{...blank,...existing,financing_needed_amount:existing.financing_needed_amount||"",minimum_ticket_size:existing.minimum_ticket_size||"",maximum_ticket_size:existing.maximum_ticket_size||"",valuation:existing.valuation||"",investment_horizon_years:existing.investment_horizon_years||""}:blank);
    const [saving,setSaving]=useState(false);
    const set=k=>v=>setForm(f=>({...f,[k]:v}));
    const fld=(label,key,opts={})=>React.createElement(Input,{label,value:form[key],onChange:set(key),...opts});
    const sel=(label,key,options)=>React.createElement("div",null,
      React.createElement("div",{style:{fontSize:11,fontWeight:600,color:"#374151",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.7px"}},label),
      React.createElement("select",{value:form[key],onChange:e=>set(key)(e.target.value),style:{width:"100%",padding:"10px 12px",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:13,color:form[key]?DARK:"#9ca3af",background:"#fff",cursor:"pointer",boxSizing:"border-box"}},
        React.createElement("option",{value:""},"Select..."),
        options.map(v=>React.createElement("option",{key:Array.isArray(v)?v[0]:v,value:Array.isArray(v)?v[0]:v},Array.isArray(v)?v[1]:v))
      )
    );
    const amtField=(label,key)=>React.createElement("div",null,
      React.createElement("div",{style:{fontSize:11,fontWeight:600,color:"#374151",marginBottom:5,textTransform:"uppercase",letterSpacing:"0.7px"}},label),
      React.createElement("div",{style:{display:"flex",gap:6}},
        React.createElement("select",{value:form.currency,onChange:e=>set("currency")(e.target.value),style:{padding:"10px 8px",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:13,color:DARK,background:"#fff",cursor:"pointer",flexShrink:0,width:80}},
          ["USD","EUR","EGP","AED"].map(c=>React.createElement("option",{key:c,value:c},c))
        ),
        React.createElement("input",{type:"number",value:form[key],onChange:e=>set(key)(e.target.value),placeholder:"0",style:{flex:1,padding:"10px 12px",border:`1px solid ${BORDER}`,borderRadius:8,fontSize:13,outline:"none",background:"#fff",boxSizing:"border-box",width:"100%"}})
      )
    );
    const submit=async()=>{
      if(!form.deal_title.trim())return alert("Deal title is required.");
      if(!form.deal_type)return alert("Deal type is required.");
      setSaving(true);
      try{
        const payload={deal_title:form.deal_title.trim(),company_or_project_name:form.company_or_project_name||null,deal_type:form.deal_type,industry:form.industry||null,location:form.location||null,short_summary:form.short_summary||null,full_description:form.full_description||null,financing_needed_amount:form.financing_needed_amount?parseFloat(form.financing_needed_amount):null,minimum_ticket_size:form.minimum_ticket_size?parseFloat(form.minimum_ticket_size):null,maximum_ticket_size:form.maximum_ticket_size?parseFloat(form.maximum_ticket_size):null,valuation:form.valuation?parseFloat(form.valuation):null,currency:form.currency||"USD",stage:form.stage||null,expected_return_type:form.expected_return_type||null,expected_return_range:form.expected_return_range||null,investment_horizon_years:form.investment_horizon_years?parseFloat(form.investment_horizon_years):null,cover_image_url:form.cover_image_url||null,pitch_deck_url:form.pitch_deck_url||null,video_link:form.video_link||null,website_url:form.website_url||null,status:"active"};
        if(isEdit){
          await db.update("deals",existing.id,payload);
          onUpdated&&onUpdated({...existing,...payload});
          onClose();
        }else{
          const payload2={...payload,poster_id:currentMember.id};
          let rows=await db.insert("deals",payload2);
          if(!rows||!rows[0])rows=await db.select("deals","?order=created_at.desc&limit=1");
          const deal=rows[0];
          await db.insert("feed_items",{feed_type:"deal_posted",source_type:"deals",source_id:deal.id,author_member_id:currentMember.id,system_label:null}).catch(()=>{});
          onCreated&&onCreated(deal);
          onClose();
        }
      }catch(e){alert("Error: "+e.message);setSaving(false);}
    };
    return React.createElement(Modal,{title:isEdit?"Edit Deal":"Post a Deal",onClose,maxWidth:740},
      React.createElement("div",{style:{display:"flex",flexDirection:"column",gap:14}},
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          fld("Deal Title *","deal_title",{placeholder:"e.g. AI Healthcare Platform Series A"}),
          fld("Company / Project Name","company_or_project_name")
        ),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          sel("Deal Type *","deal_type",DEAL_TYPES_OPT.map(v=>[v,fmtDT(v)])),
          sel("Stage","stage",DEAL_STAGES_OPT.map(v=>[v,fmtStg(v)]))
        ),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          sel("Industry","industry",INDUSTRY_OPTIONS),
          fld("Location","location",{placeholder:"e.g. Cairo, Egypt"})
        ),
        React.createElement(Textarea,{label:"Short Summary",value:form.short_summary,onChange:set("short_summary"),rows:2,placeholder:"One-line pitch for the opportunity..."}),
        React.createElement(Textarea,{label:"Full Description",value:form.full_description,onChange:set("full_description"),rows:3,placeholder:"Business model, traction, team, opportunity details..."}),
        React.createElement("div",{style:{fontSize:13,fontWeight:700,color:DARK,paddingTop:4,borderTop:`1px solid ${BORDER}`}},"Investment Details"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          amtField("Capital Needed","financing_needed_amount"),
          amtField("Valuation","valuation"),
          amtField("Min. Ticket Size","minimum_ticket_size"),
          amtField("Max. Ticket Size","maximum_ticket_size")
        ),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:12}},
          sel("Return Type","expected_return_type",RETURN_TYPES_OPT.map(v=>[v,fmtRT(v)])),
          fld("Expected Return Range","expected_return_range",{placeholder:"e.g. 15-25% IRR"}),
          fld("Horizon (Years)","investment_horizon_years",{type:"number",placeholder:"e.g. 5"})
        ),
        React.createElement("div",{style:{fontSize:13,fontWeight:700,color:DARK,paddingTop:4,borderTop:`1px solid ${BORDER}`}},"Media & Presentation"),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          React.createElement(DealImageUpload,{value:form.cover_image_url,onChange:set("cover_image_url")}),
          React.createElement(PDFUpload,{value:form.pitch_deck_url,onChange:set("pitch_deck_url")})
        ),
        React.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}},
          fld("Video Link (YouTube / Vimeo)","video_link",{placeholder:"https://youtube.com/..."}),
          fld("Website URL","website_url",{placeholder:"https://company.com"})
        ),
        React.createElement("div",{style:{display:"flex",gap:10,justifyContent:"flex-end",paddingTop:8}},
          React.createElement(Btn,{variant:"ghost",onClick:onClose},"Cancel"),
          React.createElement(Btn,{onClick:submit,disabled:saving},saving?(isEdit?"Saving...":"Posting..."):isEdit?"Save Changes":"Post Deal")
        )
      )
    );
  };

  var DealRoomTab=({currentMember,deals,setDeals,dealBids,setDealBids,allMembers,isAdmin})=>{
    const [filter,setFilter]=useState("all");
    const [viewingDeal,setViewingDeal]=useState(null);
    const [showPost,setShowPost]=useState(false);
    const filtered=useMemo(()=>{
      const d=[...(deals||[])].sort((a,b)=>new Date(b.created_at)-new Date(a.created_at));
      return filter==="all"?d:d.filter(x=>x.deal_type===filter);
    },[deals,filter]);
    const chip=(k,label)=>{
      const count=k==="all"?deals.length:(deals||[]).filter(d=>d.deal_type===k).length;
      const active=filter===k;
      return React.createElement("button",{key:k,onClick:()=>setFilter(k),style:{padding:"7px 14px",border:`1px solid ${active?DARK:BORDER}`,borderRadius:20,cursor:"pointer",fontWeight:active?700:400,background:active?DARK:"#fff",color:active?GOLD:"#6b7280",fontSize:12,transition:"all 0.15s",whiteSpace:"nowrap"}},label+(count>0?" ("+count+")":""));
    };
    return React.createElement("div",null,
      React.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,flexWrap:"wrap",gap:10}},
        React.createElement("div",null,
          React.createElement("div",{style:{fontSize:22,fontWeight:700,color:DARK,fontFamily:"var(--font-sans)"}},"Deal Room"),
          React.createElement("div",{style:{fontSize:13,color:"#9ca3af",marginTop:2}},"Private investment opportunities from the DEO Leaders network")
        ),
        React.createElement(Btn,{onClick:()=>setShowPost(true)},"+ Post a Deal")
      ),
      React.createElement("div",{style:{display:"flex",gap:6,flexWrap:"wrap",marginBottom:20,paddingBottom:4}},
        chip("all","All Deals"),
        ...DEAL_TYPES_OPT.map(v=>chip(v,fmtDT(v)))
      ),
      deals.length===0
        ?React.createElement("div",{style:{textAlign:"center",padding:"80px 0",color:"#9ca3af"}},
          React.createElement("div",{style:{fontSize:48,marginBottom:12}},"💼"),
          React.createElement("div",{style:{fontWeight:600,color:DARK,fontSize:17,marginBottom:8}},"No deals posted yet"),
          React.createElement("div",{style:{fontSize:13,marginBottom:24}},"Be the first to share an investment opportunity with the DEO Leaders network."),
          React.createElement(Btn,{onClick:()=>setShowPost(true)},"Post the First Deal")
        )
        :filtered.length===0
        ?React.createElement("div",{style:{textAlign:"center",padding:"40px 0",color:"#9ca3af"}},"No "+fmtDT(filter)+" deals yet.")
        :React.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:20}},
          filtered.map(deal=>React.createElement(DealCard,{key:deal.id,deal,members:allMembers,dealBids,currentMember,onView:setViewingDeal}))
        ),
      viewingDeal&&React.createElement(DealDetailModal,{
        deal:viewingDeal,members:allMembers,dealBids,currentMember,
        onClose:()=>setViewingDeal(null),
        onBidSubmitted:bid=>{setDealBids(prev=>{const i=prev.findIndex(b=>b.id===bid.id);return i>=0?prev.map((b,j)=>j===i?bid:b):[...prev,bid];});},
        onDealUpdated:updated=>{setDeals(prev=>prev.map(d=>d.id===updated.id?updated:d));setViewingDeal(updated);},
        onDealDeleted:id=>{setDeals(prev=>prev.filter(d=>d.id!==id));setViewingDeal(null);}
      }),
      showPost&&React.createElement(DealPostModal,{
        currentMember,
        onClose:()=>setShowPost(false),
        onCreated:deal=>setDeals(prev=>[deal,...prev])
      })
    );
  };
  // ═════════════════════════════════════════════════════════

  function App() {
    var _a;
    const [lang, setLang] = useState(() => { try { return localStorage.getItem("deo_portal_lang") === "de" ? "de" : "en"; } catch (e) { return "en"; } });
    useEffect(() => { try { localStorage.setItem("deo_portal_lang", lang); } catch (e) {} }, [lang]);
    const [screen, setScreen] = useState("landing");
    const [adminTab, setAdminTab] = useState("dashboard");
    const [members, setMembers] = useState([]);
    const [applications, setApplications] = useState([]);
    const [loggedInMember, setLoggedInMember] = useState(null);
    const [showAddMember, setShowAddMember] = useState(false);
    const [viewingFeedMember, setViewingFeedMember] = useState(null);
    const [events, setEvents] = useState([]);
    const [myRegistrations, setMyRegistrations] = useState([]);
    const [donationProjects, setDonationProjects] = useState([]);
    const [perks, setPerks] = useState([]);
    const [memberPerks, setMemberPerks] = useState([]);
    const [messages, setMessages] = useState([]);
    const [pendingMailTo, setPendingMailTo] = useState(null);
    const [feedItems, setFeedItems] = useState([]);
    const [posts, setPosts] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [opportunities, setOpportunities] = useState([]);
    const [deals, setDeals] = useState([]);
    const [dealBids, setDealBids] = useState([]);
    const [loading, setLoading] = useState(true);
    const [membersLoading, setMembersLoading] = useState(false);
    const [dbError, setDbError] = useState(null);
    const [authUser, setAuthUser] = useState(null);
    const [authChecked, setAuthChecked] = useState(false);
    const [pendingSignIn, setPendingSignIn] = useState(null); // set by SIGNED_IN event

    const loadFeedData = async () => {
      try {
        const [feedRows, postRows, jobRows, oppRows] = await Promise.all([
          db.select("feed_items", "?order=created_at.desc&limit=100"),
          db.select("posts", "?order=created_at.desc&limit=50"),
          db.select("jobs", "?order=created_at.desc&limit=50"),
          db.select("investment_opportunities", "?order=created_at.desc&limit=50")
        ]);
        setFeedItems(feedRows || []);
        setPosts(postRows || []);
        setJobs(jobRows || []);
        setOpportunities(oppRows || []);
      } catch (e) { console.error("Feed refresh error:", e); }
    };
    const loadApplications = async () => {
      try {
        const rows = await db.select("applications", "?order=applied_date.desc");
        setApplications((rows || []).map(rowToApplication));
      } catch (e) { console.error("Applications refresh error:", e); }
    };
    const reloadMembers = async () => {
      if (membersLoading) return;
      setMembersLoading(true);
      const _retry = (fn) => fn().catch(() => new Promise((r) => setTimeout(r, 2000)).then(fn).catch(() => null));
      try {
        const [memberRows, donRows, appRows] = await Promise.all([
          _retry(() => db.select("members", "?order=created_at.asc&limit=500")),
          db.select("donations", "?order=year.desc&limit=500").catch(() => []),
          _retry(() => db.select("applications", "?order=applied_date.desc&limit=200"))
        ]);
        const donMap = {};
        donRows.forEach((d) => { (donMap[d.member_id] = donMap[d.member_id] || []).push(d); });
        if (memberRows !== null) setMembers(memberRows.map((r) => rowToMember(r, donMap[r.id] || [])));
        if (appRows !== null) setApplications(appRows.map(rowToApplication));
        _privateDataLoaded = true;
      } catch (e) {
        console.error("Member reload error:", e);
      } finally {
        setMembersLoading(false);
      }
    };

    // ── Public page switches (home ⇄ sign in / apply) go through the DEO | Leaders
    // curtain defined in index.html; falls back to an instant switch.
    // Forward (to sign in / apply) sweeps right with DEO; back to home sweeps left with Leaders.
    const goWithCurtain = (target, dir) => {
      // Apply (Bewerben) replays the home loading animation; sign in keeps the curtain.
      if (target === "signup" && window.__deoLoaderTransition) window.__deoLoaderTransition(() => setScreen(target));
      else if (window.__deoCurtain) window.__deoCurtain(() => setScreen(target), dir || (target === "landing" ? "left" : "right"));
      else setScreen(target);
    };

    // ── deo-nav-landing event ────────────────────────────────────────────────
    useEffect(() => {
      // Back to home: instant, no curtain / loading animation
      const go = () => { setScreen("landing"); window.scrollTo(0, 0); };
      window.addEventListener("deo-nav-landing", go);
      return () => window.removeEventListener("deo-nav-landing", go);
    }, []);

    // ── Auth: session init + listener ─────────────────────────────────────────
    useEffect(() => {
      // Listen for auth state changes (login, logout, password reset link, email confirmation link)
      const unsubscribe = deoAuth.onChange((event, user) => {
        if (event !== "PASSWORD_RECOVERY") setAuthUser(user);
        if (event === "PASSWORD_RECOVERY") setScreen("reset-password");
        // SIGNED_IN fires when user confirms email via link; auto-route them in
        if (event === "SIGNED_IN" && user) setPendingSignIn(user);
        if (event === "SIGNED_OUT") {
          setLoggedInMember(null);
          setScreen("landing");
          setMyRegistrations([]);
          setMemberPerks([]);
          setMessages([]);
        }
      });
      // Check for an existing session (and email links) on page load
      deoAuth.init().then((user) => {
        if (user) setAuthUser(user);
        setAuthChecked(true);
      });
      return unsubscribe;
    }, []);

    // ── Data loading: wait for auth check, then load public + (if auth) private ─
    useEffect(() => {
      if (!authChecked) return;
      (async () => {
        try {
          // Public data (events, perks, donation_projects) — available to all
          const [eventRows, eventImageRows, projectRows, perkRows] = await Promise.all([
            db.select("events", "?order=start_datetime.asc").catch(() => []),
            db.select("event_images", "?order=sort_order.asc").catch(() => []),
            db.select("donation_projects", "?order=created_at.asc").catch(() => []),
            db.select("perks", "?order=created_at.desc").catch(() => [])
          ]);
          const imgMap = {};
          eventImageRows.forEach((img) => { (imgMap[img.event_id] = imgMap[img.event_id] || []).push(img); });
          setEvents(eventRows.map((r) => rowToEvent(r, imgMap[r.id] || [], [])));
          setDonationProjects(projectRows || []);
          setPerks((perkRows || []).map(rowToPerk));

          if (authUser) {
            // Tier 1 (critical): members, donations, applications — load first so admin lists populate fast
            setMembersLoading(true);
            const [memberRows, donationRows, appRows] = await Promise.all([
              db.select("members", "?order=created_at.asc&limit=500").catch(() => null),
              db.select("donations", "?order=year.desc&limit=500").catch(() => []),
              db.select("applications", "?order=applied_date.desc&limit=200").catch(() => null)
            ]);
            const donMap = {};
            donationRows.forEach((d) => { (donMap[d.member_id] = donMap[d.member_id] || []).push(d); });
            // null = query failed — keep existing state instead of overwriting with []
            const safeMembers = memberRows !== null ? memberRows : [];
            if (memberRows !== null) setMembers(safeMembers.map((r) => rowToMember(r, donMap[r.id] || [])));
            if (appRows !== null) setApplications(appRows.map(rowToApplication));
            _privateDataLoaded = true;
            setMembersLoading(false);

            // Tier 2 (secondary): feed, posts, jobs, deals, registrations — loaded in the
            // background AFTER the page is shown (does not hold the loading screen)
            const loadTier2 = async () => {
            const [regRows, feedRows, postRows, jobRows, oppRows, dealRows, bidRows] = await Promise.all([
              db.select("event_registrations", "?order=registered_at.asc&limit=500").catch(() => []),
              db.select("feed_items", "?order=created_at.desc&limit=100").catch(() => []),
              db.select("posts", "?order=created_at.desc&limit=50").catch(() => []),
              db.select("jobs", "?order=created_at.desc&limit=50").catch(() => []),
              db.select("investment_opportunities", "?order=created_at.desc&limit=50").catch(() => []),
              db.select("deals", "?order=created_at.desc&limit=100").catch(() => []),
              db.select("deal_bids", "?order=created_at.asc&limit=500").catch(() => [])
            ]);
            setFeedItems(feedRows || []);
            setPosts(postRows || []);
            setJobs(jobRows || []);
            setOpportunities(oppRows || []);
            setDeals(dealRows || []);
            setDealBids(bidRows || []);
            const regMap = {};
            regRows.forEach((r) => { (regMap[r.event_id] = regMap[r.event_id] || []).push(r); });
            setEvents(eventRows.map((r) => rowToEvent(r, imgMap[r.id] || [], (regMap[r.id] || []).map(rowToRegistration))));
            };
            const tier2 = loadTier2().catch(() => {});

            // Auto-resume session: route the authenticated user to their portal
            const _memberRowsForLookup = safeMembers;
            let myRow = _memberRowsForLookup.find((r) => r.user_id === authUser.id) ||
                        _memberRowsForLookup.find((r) => r.email === authUser.email);
            // If bulk query failed (null) or returned empty, try a direct targeted lookup
            if (!myRow && (memberRows === null || _memberRowsForLookup.length === 0)) {
              const directRows = await db.select("members", `?user_id=eq.${authUser.id}&limit=1`).catch(() => []);
              myRow = directRows[0] || null;
              if (!myRow) {
                const emailRows = await db.select("members", `?email=eq.${encodeURIComponent(authUser.email)}&limit=1`).catch(() => []);
                myRow = emailRows[0] || null;
              }
            }
            if (myRow) {
              const myMember = rowToMember(myRow, donMap[myRow.id] || []);
              if (!myMember.deactivated) {
                setLoggedInMember(myMember);
                // Only auto-route if on landing/login (don't override reset-password)
                if (screen === "landing" || screen === "login") {
                  setScreen(myMember.userRole === "admin" || myMember.userRole === "super_admin" ? "admin" : "member");
                }
                // The right screen is known now — show the page; the rest loads in the background
                setLoading(false);
                // Load member-specific data (messages loaded async to avoid slowing login)
                const [regs, mpRows] = await Promise.all([
                  db.select("event_registrations", `?member_email=eq.${encodeURIComponent(myMember.email)}&order=registered_at.desc`).catch(() => []),
                  db.select("member_perks", `?member_id=eq.${myRow.id}&order=saved_at.desc`).catch(() => [])
                ]);
                setMyRegistrations(regs.map(rowToRegistration));
                setMemberPerks((mpRows || []).map(rowToMemberPerk));
                // Messages loaded separately — OR query can be slow, don't block login
                db.select("messages", `?or=(sender_id.eq.${myRow.id},receiver_id.eq.${myRow.id})&order=created_at.desc&limit=200`)
                  .then(msgRows => setMessages((msgRows || []).map(rowToMessage)))
                  .catch(() => {});
              }
            } else if (safeMembers.length > 0 && (screen === "landing" || screen === "login")) {
              // Only show pending-approval if the bulk query actually returned data
              // but this authenticated user has no member record — they're truly pending.
              setScreen("pending-approval");
            }
            setLoading(false);
            await tier2;
          }
        } catch (e) {
          setDbError(e.message);
        } finally {
          setLoading(false);
        }
      })();
    }, [authChecked]);

    // ── handleLogin: called by LoginPage after deoAuth.signIn ─
    const handleLogin = async (authUserObj) => {
      if (_loginInProgress) return;
      _loginInProgress = true;
      try {
        // Look up member by user_id; fall back to email for legacy/unlinked accounts
        let rows = await db.select("members", `?user_id=eq.${authUserObj.id}&limit=1`).catch(() => []);
        if (!rows || rows.length === 0) {
          rows = await db.select("members", `?email=eq.${encodeURIComponent(authUserObj.email)}&limit=1`).catch(() => []);
          if (rows && rows[0]) {
            // Link auth user to the existing member record
            await db.update("members", rows[0].id, { user_id: authUserObj.id }).catch(() => {});
          }
        }
        if (!rows || rows.length === 0) {
          setScreen("pending-approval");
          return;
        }
        const member = rowToMember(rows[0], []);
        if (member.deactivated) {
          alert("Your account has been deactivated. Please contact the DEO Leaders team.");
          await deoAuth.signOut();
          return;
        }
        // Record last login timestamp (fire-and-forget, non-blocking)
        db.update("members", rows[0].id, { last_login_at: new Date().toISOString() }).catch(() => {});
        setLoggedInMember({ ...member, lastLoginAt: new Date().toISOString() });
        // Route immediately — don't wait for data loads
        setScreen(member.userRole === "admin" || member.userRole === "super_admin" ? "admin" : "member");
        // Load all data in background — skip if authChecked effect already loaded it (session restore)
        const memberId = rows[0].id;
        const memberEmail = member.email;
        if (!_privateDataLoaded) {
          const _retry = (fn) => fn().catch(() => new Promise((r) => setTimeout(r, 2000)).then(fn).catch(() => null));
          setMembersLoading(true);
          Promise.all([
            _retry(() => db.select("members", "?order=created_at.asc&limit=500")),
            db.select("donations", "?order=year.desc&limit=500").catch(() => []),
            _retry(() => db.select("applications", "?order=applied_date.desc&limit=200"))
          ]).then(([allRows, donRows, appRows]) => {
            const donMap = {};
            donRows.forEach((d) => { (donMap[d.member_id] = donMap[d.member_id] || []).push(d); });
            _privateDataLoaded = true;
            if (allRows !== null) setMembers(allRows.map((r) => rowToMember(r, donMap[r.id] || [])));
            if (appRows !== null) setApplications(appRows.map(rowToApplication));
          }).catch(() => {}).finally(() => setMembersLoading(false));
        }
        // Member-specific data also background
        Promise.all([
          db.select("event_registrations", `?member_email=eq.${encodeURIComponent(memberEmail)}&order=registered_at.desc`).catch(() => []),
          db.select("member_perks", `?member_id=eq.${memberId}&order=saved_at.desc`).catch(() => [])
        ]).then(([regs, mpRows]) => {
          setMyRegistrations(regs.map(rowToRegistration));
          setMemberPerks((mpRows || []).map(rowToMemberPerk));
        }).catch(() => {});
        // Messages separately (slow OR query)
        db.select("messages", `?or=(sender_id.eq.${memberId},receiver_id.eq.${memberId})&order=created_at.desc&limit=200`)
          .then(msgRows => setMessages((msgRows || []).map(rowToMessage)))
          .catch(() => {});
      } catch (e) {
        alert("Login error: " + e.message);
      } finally {
        _loginInProgress = false;
      }
    };

    // ── handleSignupAccount: called after an account is confirmed ─
    // The sign-in token is already stored by deoAuth before this is called.
    // handleLogin handles: find by user_id → find by email + link → route by role.
    const handleSignupAccount = async (authUserObj) => {
      if (!authUserObj) { setScreen("login"); return; }
      await handleLogin(authUserObj);
    };

    // Auto-login when SIGNED_IN fires (e.g. email confirmation link)
    useEffect(() => {
      if (pendingSignIn && !loggedInMember) {
        handleLogin(pendingSignIn).catch(() => {});
        setPendingSignIn(null);
      }
    }, [pendingSignIn]);

    // ── handleLogout ──────────────────────────────────────────────────────────
    const handleLogout = async () => {
      _privateDataLoaded = false;
      _loginInProgress = false;
      await deoAuth.signOut();
      // SIGNED_OUT event above clears member/screen state
      setMyRegistrations([]);
      setMemberPerks([]);
      setMessages([]);
      setMembers([]);
      setApplications([]);
    };
    const handleRegister = async (ev, member) => {
      if (!member) return;
      const alreadyReg = myRegistrations.find((r) => r.eventId === ev.id);
      if (alreadyReg) return;
      const status = ev.requiresApproval ? "pending" : "approved";
      const row = {
        event_id: ev.id,
        member_id: member.id || null,
        member_email: member.email,
        member_name: `${member.firstName} ${member.lastName}`,
        status
      };
      let rows = await db.insert("event_registrations", row);
      if (!rows || rows.length === 0) {
        rows = await db.select("event_registrations", `?event_id=eq.${ev.id}&member_email=eq.${encodeURIComponent(member.email)}&limit=1`);
      }
      if (rows == null ? void 0 : rows[0]) {
        const reg = rowToRegistration(rows[0]);
        setMyRegistrations((prev) => [...prev, reg]);
        setEvents((prev) => prev.map((e) => e.id === ev.id ? __spreadProps(__spreadValues({}, e), { registrations: [...e.registrations || [], reg] }) : e));
      }
    };
    const handleSignupSubmit = async (form) => {
      try {
        const compressImage = (dataUrl, maxSize = 800, quality = 0.7) => new Promise((res) => {
          if (!dataUrl || !dataUrl.startsWith("data:image")) {
            res(dataUrl);
            return;
          }
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
            res(canvas.toDataURL("image/jpeg", quality));
          };
          img.onerror = () => res(null);
          img.src = dataUrl;
        });
        const photoUrl = form.photo ? await compressImage(form.photo, 600, 0.7) : null;
        const idDocUrl = form.idDocument ? await compressImage(form.idDocument, 1200, 0.8) : null;
        const row = {
          first_name: form.firstName,
          last_name: form.lastName,
          email: (form.email || "").trim().toLowerCase(),
          phone: form.phone || null,
          linkedin: form.linkedin || null,
          website: form.website || null,
          graduation_year: form.graduationYear ? parseInt(form.graduationYear) : null,
          gender: (form.gender || "").toLowerCase() || null,
          date_of_birth: form.dateOfBirth || null,
          country: form.country || null,
          regions: form.regions || [],
          companies: form.companies || [],
          role: form.primaryRole || form.role || null,
          roles: form.roles || [],
          primary_role: form.primaryRole || form.role || null,
          industries: form.industries || [],
          expertise: form.expertise || [],
          bio: form.bio || null,
          motivation: form.motivation || null,
          willing_to_mentor: form.willingToMentor || false,
          open_to_fundraising: form.willingToDonate || false,
          willing_to_donate: form.willingToDonate || false,
          open_to_hiring: form.openToHiring || false,
          willing_to_invest: form.willingToInvest || false,
          investment_budget: form.willingToInvest ? form.investmentBudget || null : null,
          willing_to_pay_membership: form.willingToPayMembership || false,
          membership_fee_amount: form.willingToPayMembership ? form.membershipFeeAmount || null : null,
          phone_visible: form.phoneVisible !== false,
          email_visible: form.emailVisible !== false,
          photo_url: photoUrl,
          id_document_url: idDocUrl,
          highest_education_level: form.highestEducationLevel || "na",
          education_entries: form.educationEntries || [],
          university_name: (form.educationEntries && form.educationEntries[0]) ? form.educationEntries[0].university || null : null,
          field_of_study: (form.educationEntries && form.educationEntries[0]) ? form.educationEntries[0].field || null : null,
          study_country: (form.educationEntries && form.educationEntries[0]) ? form.educationEntries[0].country || null : null,
          status: "pending",
          applied_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
        };
        await db.insert("applications", row, { minimal: true });
        // Create the login now so the applicant can sign in once approved (the password never goes into the application row).
        const { data, error } = await deoAuth.signUp(row.email, form.password);
        return { accountError: error ? error.message : null, needsVerification: !!(data && data.needsVerification) };
      } catch (e) {
        throw e;
      }
    };
    const updateMember = useCallback(async (updated) => {
      try {
        await db.update("members", updated.id, memberToRow(updated));
        setMembers((prev) => prev.map((m) => m.id === updated.id ? updated : m));
        if ((loggedInMember == null ? void 0 : loggedInMember.id) === updated.id) setLoggedInMember(updated);
      } catch (e) {
        alert("Error saving member: " + e.message);
      }
    }, [loggedInMember]);
    const addMember = useCallback(async (member) => {
      try {
        const row = __spreadProps(__spreadValues({}, memberToRow(member)), {
          status: "active",
          donation_total: 0,
          events_attended: [],
          join_date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
          engagement_score: 0,
          deactivated: false
        });
        let rows = await db.insert("members", row);
        if (!rows || rows.length === 0) {
          rows = await db.select("members", `?email=eq.${encodeURIComponent(row.email)}&order=created_at.desc&limit=1`);
        }
        if (rows && rows[0]) setMembers((prev) => [...prev, rowToMember(rows[0], [])]);
      } catch (e) {
        alert("Error adding member: " + e.message);
      }
    }, []);
    const ADMIN_TABS = [
      ["dashboard", "🏠", "Dashboard"],
      ["feed", "📰", "Newsfeed"],
      ["deals", "💼", "Deal Room"],
      ["members", "👥", "Members"],
      ["applications", "📋", "Applications"],
      ["careers", "💼", "Careers"],
      ["analytics", "📊", "Analytics"],
      ["donations", "💰", "Donations"],
      ["events", "📅", "Events"],
      ["perks", "🎁", "Perks"]
    ,
      ...(loggedInMember && loggedInMember.userRole === "super_admin" ? [["blast", "📢", "Blast Mail"], ["permissions", "\u{1F510}", "Permissions"]] : [])
    ];
    // Portal language: German applies only inside Admin CRM / Member Portal (landing page has its own toggle)
    __deoSetLang(screen === "admin" || screen === "member" ? lang : "en");
    // Data still loading: the logo loader in index.html (#deo-loader) stays on screen.
    if (loading) return null;
    if (window.__deoAppReady) window.__deoAppReady();
    if (dbError) return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: CREAM, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-sans)" } }, /* @__PURE__ */ React.createElement("div", { style: { background: "#fff", borderRadius: 16, padding: 32, maxWidth: 400, textAlign: "center", border: `1px solid ${BORDER}` } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 32, marginBottom: 12 } }, "⚠️"), /* @__PURE__ */ React.createElement("div", { style: { fontWeight: 700, color: DARK, marginBottom: 8 } }, "Database connection error"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 13, color: "#6b7280" } }, dbError)));
    return /* @__PURE__ */ React.createElement("div", { style: { minHeight: "100vh", background: CREAM, fontFamily: "var(--font-sans)" } }, /* @__PURE__ */ screen === "landing" && /* @__PURE__ */ React.createElement(LandingPage, { onLogin: () => goWithCurtain("login"), onApply: () => goWithCurtain("signup"), member: loggedInMember, onPortal: () => setScreen(loggedInMember && (loggedInMember.userRole === "admin" || loggedInMember.userRole === "super_admin") ? "admin" : "member"), onLogout: handleLogout }), screen === "login" && /* @__PURE__ */ React.createElement(LoginPage, { onLogin: handleLogin, onSignupAccount: handleSignupAccount, onSignup: () => goWithCurtain("signup") }), screen === "signup" && /* @__PURE__ */ React.createElement(SignupPage, { onBack: () => goWithCurtain("login", "left"), onSubmitted: handleSignupSubmit }), screen === "reset-password" && /* @__PURE__ */ React.createElement(ResetPasswordPage, { onDone: () => setScreen("login") }), screen === "pending-approval" && /* @__PURE__ */ React.createElement(PendingApprovalPage, { email: (authUser && authUser.email) || "", onLogout: handleLogout }), (screen === "admin" || screen === "member") && /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", height: "100vh" } }, /* @__PURE__ */ React.createElement(TopNav, { view: screen, isAdmin: !!(loggedInMember && (loggedInMember.userRole === "admin" || loggedInMember.userRole === "super_admin")), onSwitchToMember: () => { setScreen("member"); }, onSwitchToAdmin: () => { if (loggedInMember && (loggedInMember.userRole === "admin" || loggedInMember.userRole === "super_admin")) setScreen("admin"); }, onLogout: handleLogout, lang, setLang }), /* @__PURE__ */ React.createElement("div", { className: "admin-layout", style: { flex: 1, display: "flex", overflow: "hidden" } }, screen === "admin" && /* @__PURE__ */ React.createElement("div", { className: "admin-sidebar ui-sidebar", "aria-label": "Admin navigation" }, /* @__PURE__ */ React.createElement("div", { className: "ui-side-heading" }, "Management"), ADMIN_TABS.map(([key, icon, label]) => /* @__PURE__ */ React.createElement("button", { key, type: "button", onClick: () => setAdminTab(key), className: "ui-side-item" + (adminTab === key ? " is-active" : ""), "aria-current": adminTab === key ? "page" : undefined }, React.createElement(Icon, { name: key, size: 18 }), React.createElement("span", null, label), key === "applications" && applications.filter((a) => a.status === "pending").length > 0 && /* @__PURE__ */ React.createElement("span", { className: "ui-count" }, applications.filter((a) => a.status === "pending").length)))), /* @__PURE__ */ React.createElement("div", { className: "admin-content", style: { flex: 1, padding: "28px", overflow: "auto" } }, screen === "admin" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 } }, /* @__PURE__ */ React.createElement("h1", { className: "ui-page-title" }, (_a = ADMIN_TABS.find((t) => t[0] === adminTab)) == null ? void 0 : _a[2])), adminTab === "dashboard" && React.createElement(AdminDashboard, { members, applications }), adminTab === "feed" && React.createElement(NewsfeedTab, { currentMember: loggedInMember, feedItems, setFeedItems, posts, setPosts, jobs, setJobs, opportunities, setOpportunities, deals, setDeals, dealBids, setDealBids, allMembers: members, events, donationProjects, onRefresh: loadFeedData, onViewProfile: (m) => setViewingFeedMember(m) }), adminTab === "deals" && React.createElement(DealRoomTab, { currentMember: loggedInMember, deals, setDeals, dealBids, setDealBids, allMembers: members, isAdmin: true }), adminTab === "members" && /* @__PURE__ */ React.createElement(AdminMembers, { members, setMembers, onAddMember: () => setShowAddMember(true), onSendMail: (m) => { setPendingMailTo(m); setScreen("member"); }, membersLoading, onReload: reloadMembers }), adminTab === "applications" && /* @__PURE__ */ React.createElement(AdminApplications, { applications, setApplications, members, setMembers, setFeedItems, onRefresh: loadApplications }), adminTab === "careers" && React.createElement(AdminCareers, { members, jobs, setJobs }), adminTab === "analytics" && /* @__PURE__ */ React.createElement(AdminAnalytics, { members, setMembers }), adminTab === "donations" && /* @__PURE__ */ React.createElement(AdminDonations, { members, setMembers, donationProjects, setDonationProjects, setFeedItems }), adminTab === "events" && /* @__PURE__ */ React.createElement(AdminEvents, { events, setEvents, members, setMembers, setFeedItems }), adminTab === "perks" && React.createElement(AdminPerks, { perks, setPerks }), adminTab === "blast" && React.createElement(AdminBlast, { members, currentMember: loggedInMember, setMessages }), adminTab === "permissions" && React.createElement(AdminPermissions, { members, setMembers, currentMember: loggedInMember })), screen === "member" && loggedInMember && /* @__PURE__ */ React.createElement(MemberPortal, { currentMember: members.find((m) => m.id === loggedInMember.id) || loggedInMember, allMembers: members, onUpdateSelf: updateMember, allEvents: events, onRegister: handleRegister, myRegistrations, perks, memberPerks, setMemberPerks, messages, setMessages, pendingMailTo, setPendingMailTo, donationProjects, feedItems, setFeedItems, posts, setPosts, jobs, setJobs, opportunities, setOpportunities, onRefresh: loadFeedData, deals, setDeals, dealBids, setDealBids })))), showAddMember && /* @__PURE__ */ React.createElement(AddMemberModal, { onClose: () => setShowAddMember(false), onAdd: addMember }), viewingFeedMember && React.createElement(MemberDetailModal, { member: members.find((m) => m.id === viewingFeedMember.id) || viewingFeedMember, onClose: () => setViewingFeedMember(null), isAdmin: true }));
  }

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));