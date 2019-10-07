import Bottle from 'bottlejs';
import config from '../config';

const bottle = new Bottle();

bottle.constant(config);

export default bottle.container;
