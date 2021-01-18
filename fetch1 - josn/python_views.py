import time
import json

from django.shortcuts import render, redirect, get_object_or_404, HttpResponseRedirect
from rest_framework import viewsets


def projectList(request):
    project = Project.objects.all()

    if request.method == 'POST':
        pk = json.loads(request.body)
        instance = get_object_or_404(Project, pk=pk['pk'])

        form = ProjectForm(instance=instance)
        if form.is_valid():
            project.save()
            return redirect('/setting/project/')
    else:
        form = ProjectForm()
    return render(request, "setting/project.html", {'projectList': project, 'projectRe': form})

