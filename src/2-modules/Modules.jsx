// import Default from './Default'; // default export is easy to rename on go
import Fupa from './Default'; // and now we cand use default with difrient name

import {
  Named as Supername,
  Sayhi as First,
  SomeComponent as Second,
} from './Named'; // in name export its not that easy

export const Modules = () => (
  <>
    <Fupa />
    <Supername />
    <First />
    <Second />
  </>
);
