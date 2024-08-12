# Generated by Django 5.0.7 on 2024-07-28 20:04

import department_and_events.models
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Department',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('department_name', models.CharField(max_length=250, unique=True)),
                ('type', models.CharField(choices=[('department', 'Department'), ('club', 'Club'), ('center', 'Center')], default='created', max_length=20)),
                ('is_active', models.BooleanField(default=True)),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Department_head',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now_add=True)),
                ('is_active', models.BooleanField(default=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_by', to=settings.AUTH_USER_MODEL)),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='dept', to='department_and_events.department')),
                ('updated_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='updated_by', to=settings.AUTH_USER_MODEL)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='users', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('event_title', models.CharField(max_length=350)),
                ('no_of_activities', models.IntegerField()),
                ('start_date', models.DateTimeField()),
                ('end_date', models.DateTimeField()),
                ('venue', models.TextField(max_length=250)),
                ('academic_year', models.TextField(max_length=10)),
                ('event_type', models.TextField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='c', to=settings.AUTH_USER_MODEL)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dpt', to='department_and_events.department')),
            ],
        ),
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity_title', models.CharField(max_length=350)),
                ('activity_description', models.TextField()),
                ('activity_date', models.DateTimeField()),
                ('venue', models.TextField(max_length=250)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='usr', to=settings.AUTH_USER_MODEL)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='department_and_events.event')),
            ],
        ),
        migrations.CreateModel(
            name='EventOwners',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='cr', to=settings.AUTH_USER_MODEL)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_owners', to='department_and_events.event')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='person', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EventReport',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('external_speakers', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('registration_list', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('list_of_attendees', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('details_of_external_attendees', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('list_of_all_participants_and_winners_list', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('list_of_students_volunteers', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('sample_certificates_of_participants_or_attendees', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('sample_certificates_of_winners', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('proposal_or_planning_documents', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('budgets', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('printout_of_email_communication', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('feedback', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='events', to='department_and_events.event')),
            ],
        ),
        migrations.CreateModel(
            name='Brochure',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='brochures', to='department_and_events.event')),
                ('event_report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='brochure', to='department_and_events.eventreport')),
            ],
        ),
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('event_report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='blog_posts', to='department_and_events.eventreport')),
            ],
        ),
        migrations.CreateModel(
            name='Photographs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to=department_and_events.models.custom_upload_to)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('event_report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='photographs', to='department_and_events.eventreport')),
            ],
        ),
        migrations.CreateModel(
            name='ReportStatus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('approved_by_department', 'Approved_by_Department'), ('approved_by_IQAC', 'Approved_by_IQAC'), ('rejected_by_department', 'Rejected_by_Department'), ('rejected_by_IQAC', 'Rejected_by_IQAC'), ('report_send_to_department', 'Report_send_to_Department'), ('report_send_to_IQAC', 'Report_send_to_IQAC')], default='pending', max_length=250)),
                ('comments', models.TextField(blank=True)),
                ('report', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='department_and_events.eventreport')),
            ],
        ),
        migrations.CreateModel(
            name='User_department_map',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_active', models.BooleanField(default=True)),
                ('department', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='department', to='department_and_events.department')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
