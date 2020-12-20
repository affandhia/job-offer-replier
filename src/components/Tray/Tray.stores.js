import { writable } from 'svelte/store';

export const SHOWING_STATE = {
  HIDDEN: 'hidden',
  CLOSE: 'close',
  PARTIAL: 'partial',
  FULL: 'full-page',
};

const INITIAL_STATE = {
  body: null,
  props: null,
  showing: SHOWING_STATE.HIDDEN,
  isWithOverlay: true,
};

export const trayStore = writable(INITIAL_STATE);
export const showTray = (payload) => {
  const { showing } = payload;
  const getShowing = () => {
    switch (typeof showing) {
      case 'boolean':
        return SHOWING_STATE.PARTIAL;
      case 'string':
        return showing;
      default:
        return SHOWING_STATE.PARTIAL;
    }
  };

  trayStore.update((store) => ({
    ...store,
    ...payload,
    showing: getShowing(),
  }));
};

export const closeTray = () => {
  trayStore.update((store) => ({
    ...store,
    showing: SHOWING_STATE.CLOSE,
  }));
};

export const hideTray = () => {
  trayStore.update((store) => ({
    ...store,
    body: null,
    showing: SHOWING_STATE.HIDDEN,
  }));
};
