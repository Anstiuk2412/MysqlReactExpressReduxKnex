import h from 'virtual-dom/h.js';
import { render } from 'lib/react.js';
import { typeOfProps } from 'lib/propsTypeValidation.js';

const Link = (props) => {
  return h(
    'a',
    {
      className: props.className,
      href: props.href,
    },
    [props.title],
  );
};

Link.propsTypes = {
  className: typeOfProps('string'),
  href: typeOfProps('string'),
  title: typeOfProps('string'),
};

export default render(Link);
