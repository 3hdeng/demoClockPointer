import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ClockPointer from './lib/ClockPointer'; // Our custom react component

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<div>
<ClockPointer hasSelected={true}
type='hour'value={1}  mystyle={{accColor:'cyan',textColor:'red'}}  />
<ClockPointer value={4} />
<ClockPointer value={6} />
<ClockPointer value={8} />
<ClockPointer value={10} />
<ClockPointer value={11} />
</div>
, document.getElementById('app'));
