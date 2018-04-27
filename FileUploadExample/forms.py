from django import forms


class UploadForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    message = forms.CharField(widget=forms.TextInput(attrs={'class': 'form-control'}))
    file_filed = forms.FileField(widget=forms.ClearableFileInput(attrs={
        'multiple': True,
        'class': 'form-control',
    }), required=False)
