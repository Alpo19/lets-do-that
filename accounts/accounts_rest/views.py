from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import AccountEncoder, ActivityVOEncoder

from .models import Account, ActivityVO

# Create your views here.

@require_http_methods(["GET", "POST"])
def api_accounts(request):
    if request.method == "GET":
        accounts = Account.objects.all()
        return JsonResponse(
            {"accounts": accounts},
            encoder=AccountEncoder,
        )
    else:
        try:
            content = json.loads(request.body)

            activity_data = content["activity"]
            activity = ActivityVO.objects.get(name=activity_data)
            content["activity"] = activity
        except ActivityVO.DoesNotExist:
            response = JsonResponse(
                {"message": "Activity doesn't exist"}
            )
            response.status_code = 400
            return response

        account = Account.objects.create(**content)
        return JsonResponse(
          account,
          encoder=AccountEncoder,
          safe=False,
        )


