import {
  SET_WINDOW_WIDTH,
  CLOSE_DRAWER,
  OPEN_DRAWER
} from '../constants';

export const setWindowWidth = width => ({ type: SET_WINDOW_WIDTH, width });

export const closeDrawer = () => ({ type: CLOSE_DRAWER });

export const openDrawer = () => ({ type: OPEN_DRAWER});
