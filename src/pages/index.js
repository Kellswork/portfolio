import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import BeFit from '../images/befit.png';
import politico from '../images/politico.png';
import sendit from '../images/sendit.png';
import ceplanner from '../images/ceplanner.png';
import { HireMe, LinkButton } from '../components/Button.js';
import HireMePopup from '../components/HireMePopup.js';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    width: 300px;
    height: 300px;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

class Homepage extends React.Component {
  state = {
    openHireMePopup: false
  };

  handleRequestDemoClose = () => {
    this.setState({
      openHireMePopup: false
    });
  };

  openContactPopup = () => {
    this.setState({
      openHireMePopup: true
    });
  };

  render() {
    const { openHireMePopup } = this.state;
    const { data } = this.props;
    return (
      <HomepageWrapper>
        <Layout theme="white" bigFooter openContactPopup={this.openContactPopup}>
          <AboveFold>
            <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
            <t.H1 primary align="center">
              Kelechi Ogbonna
            </t.H1>
            <t.LargeP align="center" max45>
              A full stack web engineer with top focus on Front End Technologies
            </t.LargeP>
            <HireMe large onClick={this.openContactPopup} book>
              Hire me
            </HireMe>
          </AboveFold>
          <Content>
            <t.H2 primary align="center" bold>
              Hi there,
            </t.H2>
            <t.P align="center" max70 className="who-desc" />
            <t.H2 primary align="center" bold className="portfolio">
              Portfolio
            </t.H2>
          </Content>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={BeFit} alt="BeFit workout tracker" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>BeFit Workout Tracker</t.H2>
                <t.P>
                  A full-stack production-ready web application that helps users track workouts, follow instructional
                  videos, and create custom workouts from over 850 exercises <br />
                </t.P>
                <t.P>
                  Built with: React, Redux, Netlify, Git, Ant-Design System, Jest, TravisCI, Postgres (Knex) and Node
                </t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://www.befittracker.com">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Politico</t.H2>
                <t.P>
                  Politico is an online voting platform that lets users vote for candidates running for different
                  political offices. Politico enables citizens give their mandate to politicians running for different
                  government offices.
                </t.P>
                <t.P>Built with: HTML, CSS, Javascript, GIT, Heroku, TravisCI, Postgres and Node</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://politico-kell.herokuapp.com/"
                >
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={politico} alt="Politico" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <ItemImage src={ceplanner} alt="ceplanner" />
              </DivWrapper>
              <DivWrapper>
                <t.H2 bold>Corporate Event Planner</t.H2>
                <t.P>
                  Corporate Event Planner is a web application that makes planning your events easy, efficient and
                  successful It helps you organize and keep track of your events and also let's you collaborate with
                  people to have a successful event.
                </t.P>
                <t.P> Built with: HTML, CSS, Javascript</t.P>
                <LinkButton primary bold className="link" as="a" target="_blank" href="https://ceplanner.netlify.com/">
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
            </BlockContent>
          </Block>
          <Block>
            <BlockContent>
              <DivWrapper>
                <t.H2 bold>Send-IT</t.H2>
                <t.P>
                  SendIT is a courier service that helps users deliver parcels to different destinations. SendIT
                  provides courier quotes on weight categories.
                </t.P>
                <t.P>Built with: HTML, CSS, Javascript, GIT, Heroku, TravisCI, Postgres and Node</t.P>
                <LinkButton
                  primary
                  bold
                  className="link"
                  as="a"
                  target="_blank"
                  href="https://kellswork.github.io/SendIT/"
                >
                  Lorem ipsum
                </LinkButton>
              </DivWrapper>
              <DivWrapper>
                <ItemImage src={sendit} alt="Send-IT" />
              </DivWrapper>
            </BlockContent>
          </Block>
          <WorkWithMe>
            <t.H1 green>Get in touch with me</t.H1>
            <t.LargeP>I would love to here from you!</t.LargeP>
            <HireMe onClick={this.openContactPopup} book>
              Contact me
            </HireMe>
          </WorkWithMe>
        </Layout>
        <HireMePopup open={openHireMePopup} handleClose={this.handleRequestDemoClose} />
      </HomepageWrapper>
    );
  }
}

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.jpg" }) {
      ...fluidImage
    }
  }
`;
