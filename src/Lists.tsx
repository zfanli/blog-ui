import * as React from 'react';
import { translate } from 'react-i18next';
import { Link, Route } from 'react-router-dom';
import { Square } from './components';
import { Articles } from './type';
import { formatDate } from './utils';


interface Props {
  lists: Articles[],
  t: (p: string) => string
}

class Lists extends React.Component<Props, object> {
  public render() {

    const { lists, t } = this.props;

    // edit list
    const EditedList = (props: { match: boolean }) => (
      <div className={'list-contents ' + (props.match ? '' : 'hide')}>
        {
          lists.map(
            item => (
              <div key={item._id} className="item">
                <Square>{formatDate(item.timestamp)}</Square>
                <div className="item-title">
                  <Link to={item._id}>{item.title}</Link>
                </div>
              </div>
            )
          )
        }
      </div>
    )

    return (
      <Route path="/" exact={true}>
        {(props: { match: boolean }) =>
          <div className="lists" style={{left: props.match ? 0 : -600}}>
            <h4>{t('NEWEST')}</h4>
            <EditedList match={props.match} />
          </div>
        }
      </Route>
    )
  }
}


export default translate()(Lists);
