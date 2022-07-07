import Alpine from "alpinejs";
import Pottywords from "./potty_words.json"

import './style.css';

const POTTY_WORDS = Pottywords.map(s => s.toLowerCase());
window.POTTY_WORDS = POTTY_WORDS;


Alpine.data("app", () => {

    return {
        input: "",
        inputBind: {
            ['x-model']: "input"
        },
        rootBind: {   
            ['x-init']() {
                let $data = this.$data;
                this.$watch("input", function (n, o) {
                    const nLower = n.toLowerCase();
                    for (const pottyWord of POTTY_WORDS) {
                        if (nLower.indexOf(pottyWord) !== -1) {
                            $data.input = o;
                            return;
                        }
                    }
                })
            }
        }
    };
})


window.Alpine = Alpine;
Alpine.start();

