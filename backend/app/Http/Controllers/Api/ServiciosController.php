<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\ServiciosRepositoryInterface;

class ServiciosController extends Controller
{
    protected ServiciosRepositoryInterface $serviciosRepository;
    protected Request $request;

    public function __construct(ServiciosRepositoryInterface $serviciosRepository, Request $request)
    {
        $this->serviciosRepository = $serviciosRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->serviciosRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="servicios.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_servicio','id_cliente','id_taxista',

      'fecha_solicitud','fecha_reserva',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_servicio'],$row['id_cliente'],$row['id_taxista'],

      $row['fecha_solicitud'],$row['fecha_reserva'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->serviciosRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->serviciosRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->serviciosRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->serviciosRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->serviciosRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->serviciosRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

