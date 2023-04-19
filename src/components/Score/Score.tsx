import React, { Component } from 'react';
import deepEqual from 'fast-deep-equal';
import './Score.css';

const GET_URL = 'http://localhost:3999/users';
const UPDATE_URL = 'http://localhost:3999/update';

type Props = {
  leftUserName?: string;
  leftPoint?: number;
  rightUserName?: string;
  rightPoint?: number;
  separator?: string;
};
type State = {
  leftUserName?: string;
  leftPoint?: number;
  rightUserName?: string;
  rightPoint?: number;
  separator?: string;
};

export class Score extends Component<Props, State> {
  private controller: AbortController;

  constructor(props: Props) {
    super(props);
    this.state = {
      leftUserName: props.leftUserName || 'user A',
      leftPoint: props.leftPoint || 0,
      rightUserName: props.rightUserName || 'name B',
      rightPoint: props.rightPoint || 0,
      separator: props.separator || ':',
    };
    this.controller = null;

    this.doClearPoints = this.doClearPoints.bind(this);
  }

  // Event from Floor.tsx component
  subscribe(eventName, listener) {
    document.addEventListener(eventName, listener);
  }

  unsubscribe = (eventName, listener) => {
    document.removeEventListener(eventName, listener);
  };

  shouldComponentUpdate(
    nextProps: Readonly<Props>,
    nextState: Readonly<State>,
  ): boolean {
    if (deepEqual(nextState, this.state)) return false;

    console.log('Score was update');
    return true;
  }

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (!deepEqual(prevState, this.state)) {
      console.log('componentDidUpdate() with update');
      // Как бы обновляем данные на сервере (вызываем просто get-метод-заглушку)
      fetch(UPDATE_URL)
        .then((response) => response.json())
        .then(() => {
          console.log('Condition was updated');
        })
        .catch((e) => console.error('Back error: ', e));
    }
  }

  componentDidMount() {
    this.subscribe('myEvent', (data: { detail: { isLeft: boolean } }) => {
      console.log('myEvent got -->');

      this.setState({
        ...this.state,
        leftPoint: data.detail.isLeft
          ? this.state.leftPoint + 1
          : this.state.leftPoint,
        rightPoint: data.detail.isLeft
          ? this.state.rightPoint
          : this.state.rightPoint + 1,
      });
    });

    this.controller = new AbortController();
    console.log('componentDidMount()');
    // Получение данных об игроках (в данном случае просто имена)
    fetch(GET_URL, { signal: this.controller.signal })
      .then((response) => response.json())
      .then((data: { userA: string; userB: string }) => {
        console.log('Data from backend: ', data);
        if (!this.controller.signal.aborted) {
          this.setState({
            leftUserName: data.userA,
            leftPoint: 0,
            rightPoint: 0,
            rightUserName: data.userB,
          });
        }
      })
      .catch((e) => console.error('Back error: ', e));
  }

  componentWillUnmount() {
    console.log('componentWillUnmount()');
    this.unsubscribe('myEvent', () => {
      console.log('unsubscribe for "myEvent"');
    });
    this.controller.abort();
  }

  doClearPoints = () => {
    console.log('doClearPoints()');
    this.setState((prevState) => {
      return {
        ...prevState,
        leftPoint: 0,
        rightPoint: 0,
      };
    });
  };

  render() {
    return (
      <div className="score" role="score">
        <div className="left" role="left">
          <div>{this.state.leftUserName.toUpperCase()}</div>
          <p className="point" role="leftPoint">
            {this.state.leftPoint}
          </p>
        </div>
        <div className="separator" role="separator">
          <p>{this.state.separator}</p>
        </div>
        <div className="right" role="right">
          <p className="point" role="rightPoint">
            {this.state.rightPoint}
          </p>
          <p>{this.state.rightUserName.toUpperCase()}</p>
        </div>
        <button className="cButton" onClick={this.doClearPoints}>
          X
        </button>
      </div>
    );
  }
}
