import React, { Component } from 'react'
import {Button,Image, Header,Loader,Icon} from 'semantic-ui-react'
import axios from 'axios'
import BlogEditor from '../partials/richTextEditor'
/*import config from '../environments/conf'
const env = config[process.env.NODE_ENV] || 'development'*/
export default class WelcomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
    }
    fbShare () {
        let fbShareURL = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fzemuldo.com%2F';
        if(this.props.blog){
            let postURL = this.props.blog.title.split(' ').join('%2520')+'_'+this.props.blog.date.split(' ').join('%2520')
            let shareURL = fbShareURL+postURL+"&amp;src=sdkpreparse'"
            window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');

        }
    }
    tweetShare () {
        if(this.props.blog){
            let hashTgs = '%2F&hashtags='+this.props.blog.topics.join(',')
            let via = '&via=zemuldo'
            let related = '&related=http%3A%2F%2Fpic.twitter.com/Ew9ZJJDPAR%2F'
            let url= '\n&url=http%3A%2F%2Fzemuldo.com/'+this.props.blog.title.split(' ').join('-')+'_'+this.props.blog.date.split(' ').join('-')
            let fullURL = url+related+via+hashTgs
            let shareURL = 'https://twitter.com/intent/tweet?text='+'pic.twitter.com/Ew9ZJJDPAR '+this.props.blog.title+fullURL
            window.open(shareURL, 'sharer', 'toolbar=0,status=0,width=548,height=325');

        }
    }
    gplusShare () {
        window.open("https://plus.google.com/share?url="+'http://zemuldo.com/'+this.props.blog.title.split(' ').join('-'),"","height=550,width=525,left=100,top=100,menubar=0");
        return false;
    }

    linkdnShare(){
        window.open('https://www.linkedin.com/cws/share?url=http%3A%2F%2Fzemuldo.com/'+this.props.blog.title.split(' ').join('-'),"","height=550,width=525,left=100,top=100,menubar=0");
    }

    render() {
        return (
            <div style={{margin: '3em 3em 3em 1em'}}>
                {
                    (this.props.blog===null || !this.props.blog.title) ?
                        <div >
                            <Header style={{ textAlign :'left',alignment:'center'}} color={this.props.color} as='h1'>
                                Welcome To ZemuldO.COM
                            </Header>
                            <hr color="green"/>
                            <div style={{fontSize:"16px",fontFamily:"georgia", padding: '0em 3em 2em 1em'}}>
                                <p>
                                    We share content on trending technologies like Artificial Intelligence and BlockChain.
                                    You are definitely in the right place. Here you acn get very good content on business, development
                                    and technology.
                                </p>
                                <p>
                                    We also offer Business and Tech Consultancy. If you are looking for ways to grow your business,
                                    We are the choice you are looking for. Reach us for insights and growth.
                                </p>
                            </div>

                        </div>:
                        <div>
                            <Header style={{ textAlign :'left',alignment:'center'}} color={this.props.color} as='h1'>
                                {
                                    this.props.blog.title
                                }
                            </Header>
                            <div style={{display:'block',fontSize:"16px",fontFamily:"georgia"}}>
                                <Icon size="large" color='green' name='external share' />
                                Share this on: {  }
                                {'  '}
                                <Button
                                    onClick={() => {this.tweetShare();}}
                                    circular color='twitter' icon='twitter' />
                                <sup>{this.props.counts.twtC}</sup>
                                {'   '}
                                <Button
                                    onClick={() => {this.fbShare();}}
                                    circular color='facebook' icon='facebook' />
                                <sup>{this.props.counts.fbC}</sup>
                                {'   '}
                                <Button
                                    onClick={() => {this.linkdnShare();}}
                                    circular color='linkedin' icon='linkedin' />
                                <sup>{this.props.counts.gplsC}</sup>
                                {'   '}
                                <Button
                                    onClick={() => {this.gplusShare();}}
                                    circular color='google plus' icon='google plus' />
                                <sup>{this.props.counts.gplsC}</sup>
                                <br/>
                                <br/>
                                Published on:  {this.props.blog.date}  By {this.props.blog.author}
                            </div>
                            <hr color="green"/>
                            <div style={{margin: '2em 1em 3em 1em',fontSize:"16px",fontFamily:"georgia", padding: '0em 3em 2em 1em'}}>
                                <Image width={1} size='big' shape='rounded' src='/img/blogs/blogs_pic.jpg' />
                                <br/>
                                <BlogEditor body={this.props.blog.body}/>
                            </div>

                        </div>
                }
            </div>
        )
    }
}
