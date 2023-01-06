import { ModalEight } from "@/content/Portfolio/modal/templates/ModalEight";
import { ModalFive } from "@/content/Portfolio/modal/templates/ModalFive";
import { ModalFour } from "@/content/Portfolio/modal/templates/ModalFour";
import { ModalNine } from "@/content/Portfolio/modal/templates/ModalNine";
import { ModalOne } from "@/content/Portfolio/modal/templates/ModalOne";
import { ModalSeven } from "@/content/Portfolio/modal/templates/ModalSeven";
import { ModalSix } from "@/content/Portfolio/modal/templates/ModalSix";
import { ModalThree } from "@/content/Portfolio/modal/templates/ModalThree";
import { ModalTwo } from "@/content/Portfolio/modal/templates/ModalTwo";

// export const ModalConfig = {
//     1: ModalOne,
//     2: ModalTwo,
//     3: ModalThree,
//     4: ModalFour,
//     5: ModalFive,
//     6: ModalSix,
//     7: ModalSeven,
//     8: ModalEight,
//     9: ModalNine,
// }

export const ModalMain = ({ modalId, setGetModal }) => {
    if (modalId === 1) {
        return <ModalOne {...{ modalId, setGetModal }} />;
    } else if (modalId === 2) {
        return <ModalTwo {...{ modalId, setGetModal }} />;
    } else if (modalId === 3) {
        return <ModalThree {...{ modalId, setGetModal }} />;
    } else if (modalId === 4) {
        return <ModalFour {...{ modalId, setGetModal }} />;
    } else if (modalId === 5) {
        return <ModalFive {...{ modalId, setGetModal }} />;
    } else if (modalId === 6) {
        return <ModalSix {...{ modalId, setGetModal }} />;
    } else if (modalId === 7) {
        return <ModalSeven {...{ modalId, setGetModal }} />;
    } else if (modalId === 8) {
        return <ModalEight {...{ modalId, setGetModal }} />;
    } else if (modalId === 9) {
        return <ModalNine {...{ modalId, setGetModal }} />;
    }
};

export default ModalMain;
