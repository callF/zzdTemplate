import { Provider } from 'mobx-react';
import 'taro-ui/dist/style/index.scss';
import { PureComponent } from 'react';
import './app.less';

class App extends PureComponent {
  render() {
    const { children } = this.props;
    return <Provider>{children}</Provider>;
  }
}

export default App;
