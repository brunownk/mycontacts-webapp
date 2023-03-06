import PropTypes from 'prop-types';

import { Overlay } from './styles';

import Spinner from '../Spinner';
import ReactPortal from '../ReactPortal';

import useAnimatedUnmont from '../../hooks/useAnimatedUnmont';

export default function Loader({ isLoading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmont(isLoading);

  if (!shouldRender) return null;

  return (
    <ReactPortal containerId="loader-root">
      <Overlay isLeaving={!isLoading} ref={animatedElementRef}>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
