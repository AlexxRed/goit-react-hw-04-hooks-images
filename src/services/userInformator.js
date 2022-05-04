import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ================== Notiflix  init ==================
export function infoStyle() {
    return Notify.init({
        width: '700px',
        position: 'right-top',
        closeButton: false,
        distance: '10px',
        opacity: 5,
        borderRadius: '5px',
        rtl: false,
        timeout: 2000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: 'rgba(0,0,0,0.9)',
        plainText: true,
        showOnlyTheLastOne: false,
        clickToClose: true,
        pauseOnHover: true,
        zindex: 4001,
        fontFamily: 'Quicksand',
        fontSize: '32px',
    });
}

