Quill,
TinyMCE,
CKEditor5,
Editor.js
SimpleMDE

TinyMCE WYSIWYG Editor
https://www.tiny.cloud/docs/tinymce/6/expressjs-pm/

```sh
    $ npm i tinymce
```

index.js

```js
// TinyMCE static files:
app.use("/tinymce", express.static("./node_modules/tinymce"));
```

public/postForm.ejs

```html
<textarea id="tinymceEditor" name="content" class="form-control">
{%= post?.content %}</textarea
>
```

```html
<!-- Script element sourcing TinyMCE -->
<script type="application/javascript" src="/tinymce/tinymce.min.js"></script>
<!-- Script element sourcing the TinyMCE configuration -->
<script type="application/javascript">
  // https://www.tiny.cloud/docs/configure
  tinymce.init({
    selector: "textarea#tinymceEditor",
    plugins: "lists link image table code wordcount",
    height: 750,
  });
</script>
```
