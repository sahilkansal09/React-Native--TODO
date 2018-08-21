import React from 'react';
import { View, TextInput, SafeAreaView, RefreshControl, TouchableOpacity, Text, FlatList } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { inputText: '', data: [], isRefresh: false, curDate: new Date().toLocaleDateString() }
    }

    addButtonPressed() {
        console.log('button pressed');
        console.log('data', this.state.inputText);
        let updated = this.state.data
        updated.push(this.state.inputText)
        this.setState({ data: updated, inputText: '', })
        console.log('data', this.state.data);
        // this.setState({isRefresh: false})
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.setState({ refreshing: false });

    }
    render() {
        return (
            <SafeAreaView style={styles.safearea}>
                <View>
                    <View style={{ marginTop: 20, alignItems: 'center' }}>
                        <Text style={{ color: '#1BD0F6', fontSize: 18 }}>{this.state.curDate}</Text>
                    </View>
                    <View style={styles.header}>
                        <TextInput
                            editable
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            selectionColor='gray'
                            placeholder={'Type Here'}
                            onChangeText={inputText => this.setState({ inputText })}
                            value={this.state.inputText}
                            style={styles.textInput}
                        />
                        <TouchableOpacity style={{ alignItems: 'center', flex: 1 }} onPress={this.addButtonPressed.bind(this)}>
                            <Text style={{ fontSize: 20, color: '#1BD0F6', }}> Add </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listStyle}>
                        <FlatList
                            data={this.state.data}
                            renderItem={({ item }) => {
                                console.log(item);
                                return (
                                    <View>
                                        <Text style={{ marginTop: 5, color: 'gray', height: 40, fontSize: 30, marginLeft: 5 }}>{item}</Text>
                                        <View style={{ backgroundColor: 'gray', height: 0.5 }}>
                                        </View>
                                    </View>)}
                            }
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.isRefresh}
                                    onRefresh={this._onRefresh}
                                />
                            }
                        />
                    </View>
                </View>
            </SafeAreaView>
        );
    };
}

const styles = {
    safearea: {
        backgroundColor: '#1180F2', flex: 1
    },
    header: {
        borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'white',
        borderWidth: 1,
        height: 50,
        flexDirection: 'row'
    },
    textInput: {
        fontSize: 25,
        color: 'gray',
        flex: 3,
        alignSelf: 'center'
    },
    listStyle: {
        borderRadius: 5,
        marginTop: 30,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        minHeight: '70%',
        maxHeight: '70%',
    }
}