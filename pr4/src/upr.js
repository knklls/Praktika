import MyComponent from './name'
import User from './polzovatel'
import Text from './txt'
import Effect from './Effect'

function upr() {
  return (
    <div className="upr">
      <MyComponent />
      <User name="Том" age="40" city="Москва" />
      <Text />
      <Effect />
    </div>
  );
}

export default upr;
