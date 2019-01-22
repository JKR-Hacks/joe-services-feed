/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
import React from 'react';

const Feed = ({ ramsFeed }) => (

  <div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col" />
          {/* <th scope="col" />
          <th scope="col" />
          <th scope="col" /> */}
        </tr>
      </thead>

      <tbody>


        {ramsFeed.map(ramFeed => (
          <tr key={ramFeed.id}>

            {/* <div className="row">
        <div className="col-md-6"> */}
            <td>
              {/* <div> */}
              <div><img src={`${ramFeed.bigphoto}`} width={800} height={500} /></div>
              <div>
                <h2>
                  <strong>
                    {ramFeed.title}
                  </strong>

                </h2>
              </div>
              <div>
                <img className="rounded-circle" width={28} height={28} src={`${ramFeed.authorphoto}`} />
                {ramFeed.author}
              </div>

              <p>
                <strong>
Updates:
                </strong>
                {ramFeed.newsfeed}
                <br />
              </p>
              {/* </td> */}
              {/* <td> */}
              <div><img src={`${ramFeed.smallphoto}`} width={600} height={400} /></div>
              <p>
                {ramFeed.newsfeed}
                <br />
              </p>
              {/* </td> */}

              {/* <td> */}
              <iframe width="560" height="315" src={`${ramFeed.videoclip}`} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              <p>
                {ramFeed.newsfeed}
                <br />
              </p>

              <p>
                <img src="https://pbs.twimg.com/profile_images/1027403255607746560/dIyhrGOz_400x400.jpg" width={25} height={25} />
                {ramFeed.timestamp}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Feed;
