import { SomeSharedType } from 'shared/types';
import { example } from 'utils/types';

const a: example = { str: 'hello', num: 3 };

const b: SomeSharedType = { exists: true };

export default a;
