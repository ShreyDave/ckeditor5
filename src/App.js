import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Code, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { Image, ImageToolbar, ImageCaption, ImageStyle, ImageResize, ImageUpload, ImageInsert } from '@ckeditor/ckeditor5-image/src';
import { Table, TableCellProperties, TableProperties, TableToolbar } from '@ckeditor/ckeditor5-table/src';
import { Mention } from '@ckeditor/ckeditor5-mention';
import { SpecialCharacters } from '@ckeditor/ckeditor5-special-characters/src';
import { Emoji, EmojiActivity, EmojiFlags, EmojiFood, EmojiNature, EmojiObjects, EmojiPeople, EmojiPlaces, EmojiSymbols } from '@phudak/ckeditor5-emoji/src';
import { AutoLink, Link } from '@ckeditor/ckeditor5-link/src';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';
import List from '@ckeditor/ckeditor5-list/src/list';
import ListProperties from '@ckeditor/ckeditor5-list/src/listproperties';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

const editorConfiguration = {
  placeholder: 'Words not enough? Type : to add emoji. 😍',
  plugins: [
    SpecialCharacters,
    ImageInsert,
    PageBreak,
    Font,
    Heading,
    Table,
    TableToolbar,
    TableCellProperties,
    TableProperties,
    Base64UploadAdapter,
    ImageUpload,
    Mention,
    Essentials,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    Paragraph,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    Emoji,
    EmojiPeople,
    EmojiNature,
    EmojiPlaces,
    EmojiFood,
    EmojiActivity,
    EmojiObjects,
    EmojiSymbols,
    EmojiFlags,
    CodeBlock,
    FindAndReplace,
    HorizontalLine,
    AutoLink,
    Link,
    List,
    ListProperties,
    TodoList,
    Alignment
  ],
  mention: {
    feeds: [
      {
        marker: "@",
        feed: ["@shrey", "@bhumi", "@parth", "@ebrahim", "@vatsal", "@rushi", "@vimal", "@manan", "@kuldeep"],
        minimumCharacters: 0
      }
    ]
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true
    }
  },
  image: {
    toolbar:
      [
        'imageStyle:breakText',
        '|',
        'imageStyle:wrapText',
        '|',
        'resizeImage',
        '|',
        'toggleImageCaption'
      ]
  },
  toolbar: [
    "heading",
    "|",
    'fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor',
    "|",
    'bold', 'italic', 'underline', 'strikethrough', 'code', 'subscript', 'superscript','CodeBlock',
    '|',
    'findAndReplace',
    "link",
    "|",
    'alignment',
    "bulletedList",
    "numberedList",
    'todoList',
    "blockQuote",
    "|",
    "image",
    "ImageInsert",
    "|",
    "mediaEmbed",
    "insertTable",
    "|",
    'horizontalLine',
    "pageBreak",
    "undo",
    "redo",
    "Emoji",
  ],
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties'],
  },
  theme: 'classic',
};

class App extends Component {
  render() {
    return (
      <div className="App" style={{ width: "80%", margin: "auto" }}>
        <h2>Using CKEditor 5 from source in React</h2>
        <CKEditor
          editor={ClassicEditor}
          config={editorConfiguration}
          data=""
          onReady={editor => {
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
    );
  }
}

export default App;