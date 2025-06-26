<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use App\Repositories\MensajesRepositoryInterface;

class MensajesController extends Controller
{
    protected MensajesRepositoryInterface $mensajesRepository;
    protected Request $request;

    public function __construct(MensajesRepositoryInterface $mensajesRepository, Request $request)
    {
        $this->mensajesRepository = $mensajesRepository;
        $this->request = $request;
    }

    public function index()
    {
        $payload = $this->mensajesRepository->findAll($this->request->all());

        $fileType = request()->query('filetype');
        if($fileType && $fileType == 'csv') {
            header("Content-type: text/csv");
            header("Cache-Control: no-store, no-cache");
            header('Content-Disposition: attachment; filename="mensajes.csv"');
            $rows = $payload['rows'];
            $fields = array('id','id_mensaje','id_departamento','id_taxista','contenido',

      'fecha_envio',
        );

            $f = fopen('php://output', 'w');

            fputcsv($f, $fields);

            foreach($rows as $row)
                {
                    fputcsv($f, array($row['id'],$row['id_mensaje'],$row['id_departamento'],$row['id_taxista'],$row['contenido'],

      $row['fecha_envio'],
        ));
                }

            fclose($f);

        } else {
            return response()->json($payload);
        }
    }

    public function count()
    {
        $payload = $this->mensajesRepository->findAll($this->request->all());

        $countPayload = ['count' => $payload['count']];
        return response()->json($countPayload);
    }

    public function show($id)
    {
        $payload = $this->mensajesRepository->findById($id);

        return response()->json($payload);
    }

    public function store()
    {
        $payload = $this->mensajesRepository->create($this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function update($id)
    {
        $payload = $this->mensajesRepository->update($id, $this->request->all(), auth()->user());

        return response()->json($payload);
    }

    public function destroy($id)
    {
        $this->mensajesRepository->destroy($id);

        return response()->json(true, 204);
    }

    public function findAllAutocomplete()
    {
        $payload = $this->mensajesRepository->findAllAutocomplete($this->request->only(['query', 'limit']));

        return response()->json($payload);
    }
}

