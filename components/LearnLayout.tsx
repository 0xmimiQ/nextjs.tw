import TopNav from './TopNav';
import { PropsWithChildren } from 'react';

function LearnLayout(props: PropsWithChildren<{}>) {
  return <div className="w-screen">
    <TopNav/>
    <div className="mx-auto container docs pb-32 pt-16 z-20 flex">
      <aside className="z-10 w-72 h-screen pt-12 fixed">
        <p className="opacity-50">
          這裡會放學習進度和分數<br/>但現在還沒有 👷
        </p>
      </aside>
      <div className="w-full pl-72">
        {props.children}
      </div>
    </div>
  </div>;
}

export default LearnLayout;
