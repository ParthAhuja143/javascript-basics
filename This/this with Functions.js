/*
This refers to the object it's called with(if there is an object)
*/
const obj = {
    title: 'The title',
    body: 'The description',
    changeDescription: function(newBody){
        this.body = newBody;
        console.log(this, this.body);
    }
};

obj.changeDescription('New Description');

/* 
If a function is not a method (not a function part of an object) then
this refers to the global object
*/

function globalThis(){
    console.log('Global -> ',this);
}

globalThis();

/* 
If this is used with constructor function
then it refers to the object
*/

function Video(title){
    this.title = title;
    console.log('Constructor function -> ', this);
}

const v = new Video("Youtube");

/* 
Function forEach is in the global scope so this
refers to global object and not video
*/

const video = {
    title: 'A video title',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    showTags: function(){
        this.tags.forEach(function(tag){
            console.log(this, tag)
        })
    }
}

video.showTags();

/*
To solve the problem forEach has a second optional arg
for context, if you pass 'this' into second argument, since
the function 'showTags' is inside the video object, this refers 
to 'video' object and not global object
*/

const video2 = {
    title: 'A video title',
    tags: ['Tag 1', 'Tag 2', 'Tag 3'],
    showTags: function(){
        this.tags.forEach(function(tag){
            console.log(this, tag)
        }, this)
    }
}

video2.showTags()