import React, { Component } from 'react';
import { Button,List,Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import _ from 'lodash'


class Blogs extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

    };
    render() {
        return (
            <div>
                {
                    (this.props.blogs.length>10) ?
                        <div>
                            { _.times(this.props.blogs.length, i =>
                                <List.Item key={this.props.blogs[i].title} >
                                    <List.Icon name='leaf' />
                                    <List.Content><Header color='green' as='h3'>{(this.props.blogs[i].title.length>21) ? this.props.blogs[i].title: this.props.blogs[i].title}</Header></List.Content>
                                    <List.Content>Author: {this.props.blogs[i].author}</List.Content>
                                    <List.Content>Likes {i}</List.Content>
                                    <Button size="mini" ref={this.props.blogs[i].title} onClick={() => { this.props.onReadMore(this.props.blogs[i]) }}  content='Read Full Content' color='green'/>
                                    <hr/>
                                </List.Item>)
                            }
                        </div>:
                        <div>
                            {
                                this.props.blogs.map((x, i) =>
                                    <List.Item key={this.props.blogs[i].title}>
                                        <List.Icon name='leaf' />
                                        <List.Content><Header color='green' as='h3'>{(this.props.blogs[i].title.length>21) ? this.props.blogs[i].title: this.props.blogs[i].title}</Header></List.Content>
                                        <List.Content>Author: {this.props.blogs[i].author}</List.Content>
                                        <List.Content>Likes {i}</List.Content>
                                        <Button size="mini" ref={this.props.blogs[i].title} onClick={() => { this.props.onReadMore(this.props.blogs[i]) }}  content='Read Full Content' color='green'/>
                                        <hr/>
                                    </List.Item>
                                )}
                        </div>
                }
            </div>
        )
    }
}
export default Blogs;