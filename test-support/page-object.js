import {
  build,
  componentAttribute
} from './page-object/build';
import { collection } from './page-object/collection';
import customHelper from './page-object/properties/custom-helper';
import clickable from './page-object/properties/clickable';
import clickOnText from './page-object/properties/click-on-text';
import fillable from './page-object/properties/fillable';
import visitable from './page-object/properties/visitable';
import hasClass from './page-object/properties/has-class';
import notHasClass from './page-object/properties/not-has-class';
import isVisible from './page-object/properties/is-visible';
import isHidden from './page-object/properties/is-hidden';
import attribute from './page-object/properties/attribute';
import count from './page-object/properties/count';
import text from './page-object/properties/text';
import value from './page-object/properties/value';

export default {
  attribute,
  build,
  clickable,
  clickOnText,
  customHelper,
  collection,
  component:   componentAttribute,
  count,
  fillable,
  hasClass,
  isHidden,
  isVisible,
  notHasClass,
  selectable:  fillable,
  text,
  value,
  visitable
};
