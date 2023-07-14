import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Dimensions,
    Image,
} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../../redux/todoSlice';
import { SafeAreaView } from 'react-native-safe-area-context';
import Screen2Controller from './Screen2Controller';

const { width, height } = Dimensions.get('window')

// import todo from '../../redux/todoSlice'


export class Screen2 extends Screen2Controller {

    render() {
        // const { addTodo, deleteTodo, updateTodo } = this.props
        // console.log(todo, 'received props')

        const { todoText } = this.state;
        const { todos } = this.props;

        // console.log(this.props);
        return (
            <SafeAreaView
                style={{
                    height: Dimensions.get('window').height,
                }}>

                <View style={{ backgroundColor: '#52595D' }}>
                    <Text style={styles.title}>T O D O</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                    <TextInput
                        value={this.state.todoText}
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: '60%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            color: 'black',
                            padding: 7,
                            borderRadius: 10,
                        }}
                        placeholder="Enter the task"
                        placeholderTextColor="black"
                        onChangeText={(text) => this.setState({ todoText: text })}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#00bfff',
                            height: '32%',
                            width: '17%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginLeft: 10,
                        }}
                        onPress={
                            this.state.editingTodoId !== ''
                                ? () => this.handleUpdateTodo()
                                : this.handleAddTodo
                        }>
                        <Text style={{ color: 'white', fontSize: 18 }}>{this.state.editingTodoId !== '' ? 'Update' : 'Add'}</Text>
                    </TouchableOpacity>
                </View>
                {this.state.error && this.state.todoText.length! == 0 ? (
                    <Text
                        style={{
                            color: 'red',
                            paddingLeft: 40,
                            bottom: 34,
                            margin: 0,
                        }}>
                        Please Add task
                    </Text>
                ) : null}
                <View style={{ backgroundColor: '#FBFBF9', height: height / 2, justifyContent: 'center', alignItems: 'center', width: '90%', alignSelf: 'center', borderRadius: 10 }}>
                    {todos.length !== 0 ? (
                        <FlatList
                            bounces={true}
                            data={todos}
                            keyExtractor={(item: { id: string, text: string }) => item.id}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={styles.rowcontainer}>
                                        <Text
                                            style={{ color: '#52595D', fontSize: 22, fontWeight: '500', textTransform: 'capitalize' }}>
                                            {item.text}
                                        </Text>
                                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                            <TouchableOpacity
                                                style={{ marginRight: 20 }}
                                                onPress={() => this.handleEditTodo(item.id, item.text)}>
                                                <Image style={{ height: 30, width: 30 }} source={require('./assests/edittext.png')} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.handleDeleteTodo(item.id)}>
                                                <Image style={{ height: 30, width: 30 }} source={require('./assests/delete.png')} />
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                );
                            }}
                        />
                    ) : (

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 200, width: 200 }}>
                                <Image style={{ height: '100%', width: '100%' }} source={require('./assests/notask.png')} />
                            </View>
                            <View>
                                <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginTop: 50 }}>No tasks are added</Text>
                            </View>
                        </View>
                    )}
                </View>


            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    rowcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#52595D',
        borderRadius: 10,
        width: '78%',
        marginBottom: 15,
        marginTop: 10,

    },
    title: {
        padding: 20,
        fontSize: 30,
        fontWeight: '800',
        color: '#ffffff',
        textAlign: 'center',
    },
});



const mapStateToProps = (state: { todo: { todos: { id: string, text: string }[] } }) => {
    return {
        todos: state.todo.todos,
    };
};

const mapDispatchToProps = {
    addTodo,
    deleteTodo,
    updateTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen2);