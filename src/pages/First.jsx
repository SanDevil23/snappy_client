import React from 'react';
import { Anchor } from 'antd';
import Sports from '../components/Sports.jsx'
import Politics from '../components/Politics';
import Entertainment from '../components/Entertainment.jsx';
const First = () => (
  <>
    <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'part-1',
            href: '#part-1',
            title: 'Sports',
          },
          {
            key: 'part-2',
            href: '#part-2',
            title: 'Entertainment',
          },
          {
            key: 'part-3',
            href: '#part-3',
            title: 'Politics',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="part-1"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      >
        <Sports></Sports>
      </div>
      <div
        id="part-2"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      >
        <Entertainment></Entertainment>
      </div>
      <div
        id="part-3"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      >
        <Politics></Politics>
      </div>
    </div>
  </>
);
export default First;
