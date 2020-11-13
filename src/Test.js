export default class Test {
    static dispo() {
        // <div class="body" id="app">
        //     <fieldset class="champ disponibilites" disabled="disabled">
        //         <label style="font-weight: bold;" for="disponibilites">Disponibilités</label>
        //         <label>Matin <input type="checkbox" name="disponibilites" id="disponibilites_matin" value="matin"></label>
        //         <label>Midi <input type="checkbox" name="disponibilites" id="disponibilites_midi" value="midi"></label>
        //         <label>Soir <input type="checkbox" name="disponibilites" id="disponibilites_soir" value="soir"></label>
        //     </fieldset>
        // </div>
        var app, fieldset, label, input;
        app = document.getElementById("app");
        fieldset = document.createElement("fieldset");
        app.appendChild(fieldset);
        fieldset.classList.add("champ");
        fieldset.classList.add("disponibilites");
        fieldset.setAttribute("disabled", "disabled");

        var label = document.createElement("label");
        fieldset.appendChild(label)
        label.style.fontWeight = "bold";
        label.setAttribute("for", "disponibilites");
        label.innerHTML = "Disponibilités";

        label = document.createElement("label");
        fieldset.appendChild(label);
        label.innerHTML = "Matin ";
        input = document.createElement("input");
        label.appendChild(input);
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "disponibilites");
        input.setAttribute("id", "disponibilites_matin");
        input.setAttribute("value", "matin");

        label = document.createElement("label");
        fieldset.appendChild(label);
        label.innerHTML = "Midi ";
        input = document.createElement("input");
        label.appendChild(input);
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "disponibilites");
        input.setAttribute("id", "disponibilites_midi");
        input.setAttribute("value", "midi");

        label = document.createElement("label");
        fieldset.appendChild(label);
        label.innerHTML = "Soir ";
        input = document.createElement("input");
        label.appendChild(input);
        input.setAttribute("type", "checkbox");
        input.setAttribute("name", "disponibilites");
        input.setAttribute("id", "disponibilites_soir");
        input.setAttribute("value", "soir");
    }
}