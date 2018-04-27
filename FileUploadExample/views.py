from django.views.generic import FormView
from .forms import UploadForm


class UploadView(FormView):
    template_name = 'upload.html'
    form_class = UploadForm
    success_url = '/admin/'

    def post(self, request, *args, **kwargs):
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        files = request.FILES.getlist('file')
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(form)

