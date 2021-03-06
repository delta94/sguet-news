/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { OverPack } from "rc-scroll-anim";
import QueueAnim from "rc-queue-anim";
import { Button } from "antd";
import { Link } from "react-router-dom";

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>
          Let’s <span>Try</span>
        </h2>
        <h2>
          Let’s <span>Star & Fork</span>
        </h2>
        <OverPack>
          <QueueAnim
            key="queue"
            type="bottom"
            leaveReverse
            className="page2-content"
          >
            <div key="button" style={{ marginTop: 88 }}>
              <Link to="tool">
                <Button
                  type="primary"
                  onClick={() => {
                    document.body.scrollTop = 0; // For Safari
                    document.documentElement.scrollTop = 0;
                  }}
                >
                  Get Started!
                </Button>
              </Link>

              <a
                href="https://github.com/NoCtrlZ1110/sguet-news/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button type="primary" style={{ margin: "0 16px" }}>
                  Star ⭐
                </Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
